import Vuex from 'vuex';
import Vue from 'vue';
import shop from '@/api/shop';




Vue.use(Vuex);

export default new Vuex.Store({
    state: { //data
        products: []
    },
    getters: { // =computed properties
        availableProduct(state) {
            return state.products.filter(product => product.inventory > 0)
        }
    },
    actions: { // =methods
        fetchProducts({ commit }) {
            // make the call
            // cal setProducts mutation
            // shop.getProducts( products=> {
            //     context.commit('setProducts', products)
            // })
            return new Promise((resolve) => {
                shop.getProducts(products => {
                    commit('setProducts', products)
                    resolve();
                })
            })
        },

        addToCart(context, product) {
            if (product.inventory > 0) {
                context.commit('pushProductToCart', product)
            }
            // else{
           // // show out of stock message

            // }
        }
    },

    mutations: {
        setProducts(state, products) {
            // update products
            state.products = products
        }
    }
})



