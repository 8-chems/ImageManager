import _ from "lodash"
//import axios from "@/plugins/Axios"
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
import Vue from "vue"
import vuetify from "@/plugins/Vuetify"
import VueRouter from 'vue-router'; // importing Vue router library
import router from './router/index.js';

/**
 * Enable Axios Settings.
 */
//axios.enableSettings();



Vue.component('App', require('./components/App.vue').default);



import Vuex from 'vuex'
Vue.use(Vuex)
Vue.use(VueRouter);
import storeData from "./store/index.js"


const store = new Vuex.Store(
    storeData

)


if (document.querySelector("#app") !== null) {
    const app = new Vue({
        el: '#app',
        vuetify,
        store,
        router,
        created() {
            const userInfo = localStorage.getItem('user')
            if (userInfo) {
                const userData = JSON.parse(userInfo)
                this.$store.commit('setUserData', userData)
            }
            axios.interceptors.response.use(
                response => response,
                error => {
                    if (error.response.status === 401) {
                        this.$store.dispatch('logout')
                    }
                    return Promise.reject(error)
                }
            )
        },
    });
}