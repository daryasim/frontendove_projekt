import {defineStore} from "pinia";
import {useStorage} from "@vueuse/core";

export const useReviewStore = defineStore("ReviewStore",{
    state:()=>({
        reviews: useStorage('reviews',[]),
        review_id: useStorage('review_id',0)
    }),
    actions:{
        addReview(name,text,rating,date){
            this.reviews.push({id:this.review_id,name,text,rating,date: new Date().toISOString()});
            this.review_id+=1
        },
    }
})