<template>
  <div id="page-wrapper">
    <nav-bar />
    <router-view id="main"></router-view>
  </div>
</template>

<script>
import NavBar from './components/UI/NavBar.vue';
//import FooterBar from './components/UI/FooterBar.vue';

export default {
  components: {
    NavBar,
    //FooterBar
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  background-image: url('../public/images/main-image.jpg');
  background-size: cover;
  height: 100vh;
  font-family: 'Roboto Slab', serif;
  
}
</style>