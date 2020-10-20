<template>
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
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
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
  }
};
</script>

<style scoped>
/* figure {
  width: 260px;
  border-radius: 10px;
  padding: 10px;
  margin: 15px 0 20px 90px;
}

figure img {
  padding: 10px;
  margin-bottom: 5px;
  background-color: #333;
  border: 5px solid green;
}

.figure {
  width: 240px;
  height: 240px;
}

figcaption {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font: bold 1em / normal Verdana, Arial, Helvetica, sans-serif;
  color: #333;
  width: 240px;
  background-color: #e6f3ff;
  border: 1px dashed #666;
  padding: 8px;
  padding-left: 15px;
  border-radius: 0 0 10px 10px;
} */

/* Рейтинг */

/* .active-star:before {
  content: "\2605";
  position: absolute;
}

.rating {
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
  padding-left: 45px;
}

.rating span {
  display: flex;
  width: 1.3em;
  color: red;
} */
</style>

