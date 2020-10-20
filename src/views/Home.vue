<template>
  <div class="page">
    <h1>Список товаров</h1>
    <Loader v-if="loading" />
    <ProductList v-else :kit="products" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
import Loader from "@/components/Loader.vue";

export default {
  name: "Home",
  data() {
    return {
      products: [],
      loading: true
    };
  },
  components: {
    ProductList,
    Loader
  },

  mounted() {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => {
        setTimeout(() => {
          this.products = data.products;
          this.loading = false;
        }, 2000);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
