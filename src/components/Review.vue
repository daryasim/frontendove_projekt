<template>
    <v-card width="350" class="mx-auto my-8">
        <v-card-actions>
            <span v-for="i in 5" :key="i" class="fa"
                :class="{ 'fa-star': i <= review.rating, 'fa-star-o': i > review.rating }"></span>
        </v-card-actions>
        <v-card-title>{{ review.name }}</v-card-title>
        <v-card-text>{{ review.text }}</v-card-text>
        <v-card-subtitle>
            {{ formatDate(review.date) }}
        </v-card-subtitle>
    </v-card>
</template>
<script>
import { useReviewStore } from "@/stores/reviews.js";

export default {
    props: {
        review: {
            type: Object,
            required: true
        },
    },
    methods: {
        formatDate(dateString) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        },

    },
    data() {
        return {
            reviewStore: useReviewStore()
        }
    }
}
</script>
<style scoped></style>