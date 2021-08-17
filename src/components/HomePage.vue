<template>
  <div class="section style1">
  </div>
  <div class="section style2">
  </div>
  <div class="section style1">
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.section {
  height: 100vh;
  width: 100%;
  
  &.style1 {
    background-color: #faf3dd;
  }
  &.style2 {
    background-color: #cef9f2;
  }
}
</style>
