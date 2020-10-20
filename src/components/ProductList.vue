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
</style>
