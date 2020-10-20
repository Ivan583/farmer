<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

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
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(216, 226, 245);
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
