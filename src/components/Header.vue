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
      <NavPanel />
    </div>
  </header>
</template>

<script>
import NavPanel from "@/components/NavPanel.vue";
export default {
  components: { NavPanel }
};
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
