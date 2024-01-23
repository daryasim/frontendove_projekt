<template>
    <div class="tab-content">
        <div role="tabpanel" class="tab-pane active">
            <div class="col-md-2 col-sm-2"></div>
            <div class=" fadeInUp col-md-10 col-sm-10" data-wow-delay="0.9s">
                <div v-for="program in selectedDay.programs" :key="program.name">
                    <div class="text-end">
                        <v-btn variant="tonal" @click="openDialog(program.id)">
                            Register
                        </v-btn>

                        <v-dialog v-model="dialog[program.id]" max-width="500">
                            <v-card>
                                <v-card-title>Registration Form</v-card-title>
                                <v-card-text>
                                    <v-form @submit.prevent="submitForm(program.id)" ref="form" v-model="valid" lazy-validation>
                                        <v-text-field v-model="name" label="Name" :rules="rules"></v-text-field>
                                        <v-text-field v-model="phone" label="Phone number" :rules="rules"></v-text-field>
                                        <v-text-field v-model="email" label="Email" :rules="emailRules"></v-text-field>
                                        <v-btn @click="closeDialog(program.id)">Close</v-btn>
                                        <v-btn type="submit" color="primary" :disabled="!valid">Submit</v-btn>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </div>
                    <div class="col-md-2 col-sm-2">
                        <img :src="program.image" class="img-responsive" :alt="program.name">
                    </div>
                    <h6>
                        <span><i class="fa fa-clock-o"></i> {{ program.time }}</span>
                        <span><i class="fa fa-map-marker"></i> {{ program.room }}</span>
                    </h6>
                    <h3>{{ program.name }}</h3>
                    <h4>{{ program.teacher }}</h4>
                    <p>{{ program.description }}</p>
                    <div class="program-divider col-md-12 col-sm-12"></div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { useRegistrationStore } from '@/stores/programs.js';

export default {
    props: {
        selectedDay: {
            type: Object,
            required: true,
        },
    },
    data: () => ({
        valid: true,
        dialog: {},
        name: '',
        phone: '',
        email: '',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
        rules: [ v => !!v || 'Field is required',
        ],
    }),

    methods: {
        openDialog(programId) {
            this.dialog[programId] = true;
        },
        closeDialog(programId) {
            this.dialog[programId] = false;
        },

        submitForm(programId) {

            const registrationStore = useRegistrationStore();
            registrationStore.addRegister(programId, {
                name: this.name,
                phone: this.phone,
                email: this.email,
            });


            this.name = '';
            this.phone = '';
            this.email = '';
            this.closeDialog(programId);
        },
    },
};
</script>
  
  