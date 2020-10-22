<template>
  <div class="main-menu">
    <router-link to="/">На главную</router-link>
    <router-link to="/winter">Озимые культуры</router-link>
    <router-link to="/spring">Яровые культуры</router-link>
    <router-link to="/fertil">Удобрения</router-link>
    <router-link to="/tools">Инструменты</router-link>
    <router-link to="/mechan">Механизмы</router-link>
  </div>
</template>

<style scoped>
#check-menu:checked ~ .main-menu {
  max-height: 500px;
  font-size: 16px;
}

.main-menu {
  display: block;
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  font-family: Arial, Helvetica, sans-serif;
  transform: translateY(100%);
  max-height: 0;
  font-size: 0;
  overflow: hidden;
  transition: all 0.75s;
  z-index: 1;
}

a {
  display: block;
  padding: 10px;
  color: red;
  background: rgb(90, 206, 90);
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
