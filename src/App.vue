<template>
  <Taskbar />
  <HomePage />
</template>

<script>
import HomePage from './components/HomePage.vue';
import Taskbar from './components/Taskbar.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    Taskbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
