<template>
  <Taskbar @updatePage="updatePage" :home="true" />
  <HomePage ref="HomePage" />
</template>

<script>
import HomePage from './components/HomePage.vue';
import Taskbar from './components/Taskbar.vue';

export default {
  name: 'Home',
  components: {
    HomePage,
    Taskbar
  },

  methods: {
    updatePage(id) {
      this.$refs.HomePage.scrollToSection(id);
    }
  }
}
</script>

<style lang="scss">
</style>