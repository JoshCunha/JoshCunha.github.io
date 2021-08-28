<template>
  <div class="container">
    <section>
      <WelcomePage />
    </section>
    <section>
      <AboutMe />
    </section>
    <section>
      <Music />
    </section>
  </div>
</template>

<script>
import WelcomePage from './sections/WelcomePage.vue';
import AboutMe from './sections/AboutMe.vue';
import Music from './sections/Music.vue';

export default {
  name: 'HomePage',

  components: {
    WelcomePage,
    AboutMe,
    Music
  },

  data() {
    return {
      inMove: false,
      activeSection: 0,
      offsets: [],
      touchStartY: 0
    }
  },

  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },

    scrollToSection(id) {
      if (this.inMove) return false;
      
      this.activeSection = id;
      this.inMove = true;

      document.getElementsByTagName('section')[id].scrollIntoView({
        behavior: 'smooth'
      });

      setTimeout(() => {
        this.inMove = false;
      }, 400);
    }
  },

  mounted() {
    this.calculateSectionOffsets();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  scroll-behavior: smooth;
}
section {
  min-height: 100vh;
  width: 100%;
}
</style>
