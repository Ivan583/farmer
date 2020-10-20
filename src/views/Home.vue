<template>
  <div class="page">
    <h1>Список товаров</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <main>
      <div v-for="product in products" :key="product.id">
        <figure>
          <img :src="product.image" :alt="product.alt" class="figure" />
          <figcaption>
            <div class="data">
              <div class="title">
                <p v-text="product.title"></p>
              </div>
              <div class="description">
                <p v-html="product.description"></p>
              </div>
            </div>
            <div>
              <div class="price">
                <p>
                  Price:
                  <span>{{product.price | formatPrice}}</span>
                </p>
              </div>
              <div class="rating">
                <span v-for="n in 5" :class="{'active-star': starRating(n, product)}" :key="n.id">☆</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </main>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  data() {
    return {
      products: []
    };
  },
  components: {
    // HelloWorld
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
