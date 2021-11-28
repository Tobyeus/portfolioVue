<template>
  <nav-bar />
  <router-view></router-view>
  <footer-bar />
</template>

<script>
import NavBar from './components/UI/NavBar.vue';
import FooterBar from './components/UI/FooterBar.vue';

export default {
  components: {
    NavBar,
    FooterBar
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>