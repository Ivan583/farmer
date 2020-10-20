<template>
  <header>
    <div class="container">
      <img src="images/tractor.png" class="logo" width="90" height="64" alt />
      <h1>A well-fed farmer will feed everyone</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem
        aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
        magni
        dolores eos qui ratione voluptatem sequi nesciunt.
      </p>
      <!-- <div class="wrapperInner">
        <input type="checkbox" id="check-menu" />
      <label for="check-menu">ТОВАРЫ</label>-->

      <!-- Гамбургер -->
      <!-- <div class="burger-line one"></div>
        <div class="burger-line two"></div>
        <div class="burger-line three"></div>
      <div class="burger-line four"></div>-->

      <!-- Выпадающий список -->
      <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      </div>-->
      <!-- <div class="main-menu">
          <a href="pages/product1.html">Озимые культуры</a>
          <a href="pages/product2.html">Яровые культуры</a>
          <a href="pages/product3.html">Удобрения</a>
          <a href="pages/product4.html">Инструменты</a>
          <a href="pages/product5.html">Механизмы</a>
        </div>
      </div>
      <div class="big-menu">
        <ul>
          <li>
            <a href="pages/product1.html">Озимые культуры</a>
          </li>
          <li>
            <a href="pages/product2.html">Яровые культуры</a>
          </li>
          <li>
            <a href="pages/product3.html">Удобрения</a>
          </li>
          <li>
            <a href="pages/product4.html">Инструменты</a>
          </li>
          <li>
            <a href="pages/product5.html">Механизмы</a>
          </li>
        </ul>
      </div>-->
    </div>
  </header>
</template>

<script>
// export default {
//   name: "HelloWorld",
//   props: {
//     msg: String
//   }
// };
//
</script>

<style scoped>
.container {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: normal;
  position: relative;
  padding-top: 15px;
}

.logo {
  position: absolute;
  left: 20px;
  top: 30px;
}

h1 {
  padding-left: 130px;
  font-size: 4em;
  font-weight: normal;
  padding-top: 4px;
  color: red;
}

.container p {
  margin-left: 130px;
  margin-right: 50px;
}
</style>
