<template>
  <main>
    <ProductItem v-for="elem in kit" :key="elem.id" :product="elem" />
  </main>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
export default {
  props: ["kit"],
  components: { ProductItem }
};
</script>

<style scoped>
main {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 25px;
}

@media (min-width: 992px) {
  main {
    flex-flow: row wrap;
  }
}
</style>
