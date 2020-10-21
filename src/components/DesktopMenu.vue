<template>
  <div class="big-menu">
    <ul>
      <li>
        <router-link to="/">На главную</router-link>
      </li>
      <li>
        <router-link to="/winter">Озимые культуры</router-link>
      </li>
      <li>
        <router-link to="/spring">Яровые культуры</router-link>
      </li>
      <li>
        <router-link to="/fertil">Удобрения</router-link>
      </li>
      <li>
        <router-link to="/tools">Инструменты</router-link>
      </li>
      <li>
        <router-link to="/mechan">Механизмы</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.big-menu {
  display: none;
}

@media (min-width: 600px) {
  .big-menu {
    display: block;
    margin: 15px 0 0 70px;
  }

  .big-menu li {
    display: inline-block;
    margin: 0 5px 5px 0;
  }

  .big-menu li a {
    display: inline-block;
    width: 196px;
    height: 50px;
    padding: 10px;
    color: red;
    background: rgb(90, 206, 90);
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
  }
}
</style>
