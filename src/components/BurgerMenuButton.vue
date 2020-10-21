<template>
    <div class="burger-btn-container">
      <div class="burger-line one" />
      <div class="burger-line two" />
      <div class="burger-line three" />
      <div class="burger-line four" />
    </div>
</template>

<style scoped>
/* Гамбургер */

.burger-line {
  position: absolute;
  top: 12px;
  right: 10px;
  width: 35px;
  height: 2px;
  background-color: #fff;
  transition: all 0.5s;
}

.two,
.three {
  top: 25px;
}

.four {
  top: 38px;
}
</style>