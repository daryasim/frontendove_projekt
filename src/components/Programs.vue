<template>
    <div class="tab-content">

        <div role="tabpanel" class="tab-pane active">
            <!-- program speaker here -->
            <div class="col-md-2 col-sm-2">

            </div>
            <div class="wow fadeInUp col-md-10 col-sm-10" data-wow-delay="0.9s">
                <div>
                    <div v-for="program in selectedDay.programs" :key="program.name">
                        <div class="col-md-2 col-sm-2">
                            <img :src="program.image" class="img-responsive" :alt="program.name">
                        </div>
                        <h6>
                            <span><i class="fa fa-clock-o"></i> {{ program.time }}</span>
                            <span><i class="fa fa-map-marker"></i> {{ program.room }}</span>
                        </h6>
                        <h3>{{ program.name }}</h3>
                        <h4> {{ program.teacher }}</h4>
                        <p>{{ program.description }}</p>
                        <div class="program-divider col-md-12 col-sm-12"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        selectedDay: {
            type: Object,
            required: true,
        },
    },
};
</script>
  