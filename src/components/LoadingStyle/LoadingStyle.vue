<script setup lang="ts">
import ColorfulLove from './components/ColorfulLove.vue';
import StickyBalls from './components/StickyBalls.vue';
</script>
<template>
  <div class="navbar-container">
    <ColorfulLove />
    <StickyBalls />
  </div>
</template>

<style scoped lang="scss">
.navbar-container {
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
}
</style>
