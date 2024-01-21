<template>
    <v-card
        width="400"
        class="mx-auto my-8"
    >
    <v-card-title>{{ review.name }}</v-card-title>
    <v-card-text>{{ review.text }}</v-card-text>
     
    </v-card>
  </template>
  <script>
  import {useReviewStore} from "@/stores/reviews.js";
  
  export default {
    props:{
      review:{
        type: Object,
        required: true,
        default: () => {}
      },
    },
    data(){
      return{
        reviewStore: useReviewStore()
      }
    }
  }
  </script>
  <style scoped>
  
  </style>