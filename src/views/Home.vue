<template>
  <div class="page">
    <h1>Список товаров</h1>
    <ProductList :kit="products" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  name: "Home",
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductList
  },

  mounted() {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => {
        this.products = data.products;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
