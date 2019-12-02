<template>
  <div id="app">
    <ProductList msg="Welcome to Vuex"/>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'

export default {
  name: 'app',
  components: {
    ProductList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
