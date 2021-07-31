import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    cart: {
        items: ''
    },
    mutations: {
        change(cart, items) {
         cart.items = items
            console.log(items)
        }
    },
    getters: {
     items: cart => cart.items
    }
})