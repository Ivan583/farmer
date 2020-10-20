<template>
  <main>
    {{kit}}
    <!-- <div v-for="product in products" :key="product.id">
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
    </div>-->
  </main>
</template>

<script>
export default {
  props: ["kit"]
};
</script>

<style scoped>
</style>
