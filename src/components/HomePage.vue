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
    },

    handleMouseWheel(event) {
      if (event.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (event.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }

      event.preventDefault();
      return false;
    },

    touchStart(event) {
      event.preventDefault();

      this.touchStartY = event.touches[0].clientY;
    },

    touchMove(event) {
      if (this.inMove) return false;
      event.preventDefault();

      const currentY = event.touches[0].clientY;

      if (this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }

      this.touchStartY = 0;
      return false;
    },

    moveDown() {
      this.activeSection--;
      if (this.activeSection < 0) this.activeSection = 0;

      this.scrollToSection(this.activeSection);
    },

    moveUp() {
      this.activeSection++;

      if (this.activeSection > this.offsets.length - 1) this.activeSection = this.offsets.length - 1;

      this.scrollToSection(this.activeSection);
    }
  },

  mounted() {
    this.calculateSectionOffsets();
    // window.addEventListener('mousewheel', this.handleMouseWheel, {
    //   passive: false
    // });
    // window.addEventListener('DOMMouseScroll', this.handleMouseWheel);
    // window.addEventListener('touchstart', this.touchStart, {
    //   passive: false
    // });
    // window.addEventListener('touchmove', this.touchMove, {
    //   passive: false
    // });
  },

  unmounted() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, {
      passive: false
    });
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheel);
    window.removeEventListener('touchstart', this.touchStart);
    window.removeEventListener('touchmove', this.touchMove);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  scroll-behavior: smooth;
}
section {
  height: 100vh;
  width: 100%;
}
</style>
