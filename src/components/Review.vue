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

        <v-row>
            <v-col>
                <v-btn class="ma-2" variant="text" icon="mdi-thumb-up" color="green-lighten-2" @click="likeReview"></v-btn>
                <v-card-subtitle>{{ likesCount }}</v-card-subtitle>
            </v-col>
            <v-col>
                <v-btn class="ma-2" variant="text" icon="mdi-thumb-down" color="red-lighten-2"
                    @click="dislikeReview"></v-btn>
                <v-card-subtitle>{{ dislikesCount }}</v-card-subtitle>
            </v-col>
        </v-row>
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
        likeReview() {
            this.reviewStore.likeReview(this.review.id);
        },
        dislikeReview() {
            this.reviewStore.dislikeReview(this.review.id);
        },
    },
    computed: {
        likesCount() {
            return this.reviewStore.likes[this.review.id];
        },
        dislikesCount() {
            return this.reviewStore.dislikes[this.review.id];
        },
    },
    data() {
        return {
            reviewStore: useReviewStore()
        }
    },
}
</script>
