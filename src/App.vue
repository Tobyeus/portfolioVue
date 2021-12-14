<template>
  <div id="page-wrapper">
    <nav-bar />
    <router-view></router-view>
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
#page-wrapper {
    background-image: url('../public/images/main-image.jpg');
    background-position: top center;
    background-size: auto 100%;
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    font-family: 'Roboto Slab', serif;
}
.main-content {
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid #fff;
      width: 70%;
  } 

@media (min-width: 650px) {
  #page-wrapper {
    background-image: url('../public/images/main-image.jpg');
    background-size: cover;
    height: 100vh;
    font-family: 'Roboto Slab', serif;
  }
  .main-content {
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid #fff;
      width: auto;
  } 
}
</style>