import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useReviewStore = defineStore('ReviewStore', {
  state: () => ({
    reviews: useStorage('reviews', []),
    review_id: useStorage('review_id', 0),
    likes: useStorage('likes', {}),
    dislikes: useStorage('dislikes', {}),
  }),
  actions: {
    addReview(name, text, rating) {
      const id = this.review_id;
      this.reviews.push({ id, name, text, rating, date: new Date().toISOString() });
      this.review_id += 1;
      this.likes[id] = 0;
      this.dislikes[id] = 0;
    },
    likeReview(id) {
      this.likes[id] += 1;
      this.saveToLocalStorage();
    },
    dislikeReview(id) {
      this.dislikes[id] += 1;
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem('likes', JSON.stringify(this.likes));
      localStorage.setItem('dislikes', JSON.stringify(this.dislikes));
    },
  },
});
