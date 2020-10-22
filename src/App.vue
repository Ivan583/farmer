<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { Header, Footer }
};
</script>

<style>
@import url("/reset.css");

* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(216, 226, 245);
}

.page {
  flex: 1;
  margin-top: 5px;
}

h1 {
  font-size: 2em;
  font-weight: normal;
  padding-top: 4px;
  color: blue;
}

@media (min-width: 1400px) {
  #app {
    max-width: 1400px;
    margin: 0 auto;
    border: 5px double green;
    border-bottom: none;
  }
}
</style>
