<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="">
    <ul v-else>
      <li v-for="product in products" :key="product.id">{{product.title}} - {{product.price}}</li>
    </ul>
  </div>
</template>

<script>
// import shop from '@/api/shop'
import store from "@/store/index";

export default {
  data() {
    return {
      loading: false
    };
  },

  computed: {
    products() {
      return store.getters.availableProduct;
    }
  },

  created() {
    // shop.getProducts( products=> {
    //     store.commit('setProducts', products)
    // })
    this.loading = true;
    store.dispatch("fetchProducts").then(() => (this.loading = false));
  }
};
</script>

<style scoped>
</style>