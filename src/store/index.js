import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { //data
        products: []
    },
    getters: { // =computed properties
        availableProduct(state){
            return state.products.filter(product => product.inventory > 0)
        }
    },
    actions: {
        fetchProducts(){
            // make the call
            // cal setProducts mutation
        }
    },

    mutations: {
        setProducts(state, products){
            state.products = products
        }
    }
})



