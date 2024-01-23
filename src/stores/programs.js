import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useRegistrationStore = defineStore('registration', {
  state: () => ({
    registrations: useStorage('registrations', []),
  }),
  actions: {
    addRegister(programId, registration) {
      const newRegister = { programId,name: registration.name, email: registration.email,phone: registration.phone };

      this.registrations.push(newRegister);
      this.saveRegisterToLocalStorage();
    },

    saveRegisterToLocalStorage() {
      localStorage.setItem('registrations', JSON.stringify(this.registrations));
    },
  },
});
