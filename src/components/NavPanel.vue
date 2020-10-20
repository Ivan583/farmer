<template>
  <div>
    <div class="wrapperInner">
      <input type="checkbox" id="check-menu" />
      <label for="check-menu">ТОВАРЫ</label>

      <!-- Гамбургер -->
      <div class="burger-line one"></div>
      <div class="burger-line two"></div>
      <div class="burger-line three"></div>
      <div class="burger-line four"></div>

      <!-- Выпадающий список -->

      <div class="main-menu">
        <router-link to="/">На главную</router-link>
        <router-link to="/winter">Озимые культуры</router-link>
        <router-link to="/spring">Яровые культуры</router-link>
        <router-link to="/fertil">Удобрения</router-link>
        <router-link to="/tools">Инструменты</router-link>
        <router-link to="/mechan">Механизмы</router-link>
      </div>
    </div>

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
  </div>
</template>

<style scoped>
.wrapperInner {
  margin: 20px 100px 20px 130px;
  width: 240px;
  background: rgb(90, 206, 90);
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  color: red;
  font-weight: bold;
  text-align: center;
  height: 50px;
}

label {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  line-height: 50px;
  z-index: 2;
}

/* Убираем чекбокс */

#check-menu {
  display: none;
}

/* Раскрытие и закрытие списка */

#check-menu:checked ~ .main-menu {
  max-height: 500px;
  font-size: 16px;
}

/* Выпадающий список */

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
  width: 196px;
  padding: 10px;
  color: red;
  background: rgb(90, 206, 90);
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

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

/* Крест */

#check-menu:checked ~ .one {
  display: none;
}

#check-menu:checked ~ .four {
  display: none;
}

#check-menu:checked ~ .two {
  transform: rotate(45deg);
}

#check-menu:checked ~ .three {
  transform: rotate(-45deg);
}

/* Большая панель  */

.big-menu {
  display: none;
}

@media (min-width: 600px) {
  .wrapperInner {
    display: none;
  }

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
    color: red;
    background: rgb(90, 206, 90);
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    height: 50px;
  }
}
</style>
