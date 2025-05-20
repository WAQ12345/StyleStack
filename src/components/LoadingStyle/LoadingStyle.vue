<script setup lang="ts">
import ColorfulLove from './components/ColorfulLove.vue';
import StickyBalls from './components/StickyBalls.vue';
import Cyclic from './components/Cyclic.vue';
import Rhombus from './components/Rhombus.vue';
import Hourglass from './components/Hourglass.vue'
import VerticalSlider from './components/VerticalSlider.vue';
import Wave from './components/Wave.vue';
import Liquid from './components/Liquid.vue';
import Rotating from './components/Rotating.vue';
</script>
<template>
  <div class="navbar-container">
    <ColorfulLove />
    <StickyBalls />
    <Cyclic />
    <Rhombus />
    <Hourglass />
    <VerticalSlider />
    <Wave />
    <Liquid />
    <Rotating />
  </div>
</template>

<style scoped lang="scss">
.navbar-container {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
}
</style>
