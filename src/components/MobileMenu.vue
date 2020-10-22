<template>
  <div class="box">
    <input type="checkbox" id="check-menu" />
    <label for="check-menu">ТОВАРЫ</label>

    <div class="burger-line one"></div>
    <div class="burger-line two"></div>
    <div class="burger-line three"></div>
    <div class="burger-line four"></div>

    <DropDown />
  </div>
</template>

<script>
import DropDown from "@/components/DropDown.vue";

export default {
  components: { DropDown }
};
</script>

<style scoped>
.box {
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

#check-menu {
  display: none;
}

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

@media (min-width: 600px) {
  .box {
    display: none;
  }
}
</style>
