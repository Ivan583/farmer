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

  methods: {
    starRating(n, myProduct) {
      return myProduct.rating - n >= 0;
    }
  },

  filters: {
    formatPrice(price) {
      if (price < 1000) {
        return "$ " + price.toFixed(2);
      } else {
        let priceString = price.toFixed(2);
        let priceArray = priceString.split("").reverse();
        let index = 3;
        while (priceArray.length > index + 3) {
          priceArray.splice(index + 3, 0, " ");
          index += 4;
        }
        return "$ " + priceArray.reverse().join("");
      }
    }
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
