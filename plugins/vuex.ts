import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
        userData:{},

    };
  },
  mutations: {
    registerUser(state:any,payload:any){
        state.userData.firstName = payload.firstName
        state.userData.secondName = payload.secondName
        state.userData.email = payload.email
        state.userData.password = payload.password
        state.userData.gender = payload.gender
        state.userData.currentLocation = payload.currentLocation
        state.userData.selected = payload.selected
        state.userData.dob = payload.dob
    }
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});