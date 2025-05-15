<script setup lang="ts">
import ShrinkNavBar from "./components/ShrinkNavBar.vue";
import FlexibleNavBar from "./components/FlexibleNavBar.vue";
import ElasticrRotation from "./components/ElasticrRotationNavBar.vue";
import FullScreen from './components/Full-screenNavBar.vue'
import HoverBlurNavBar from './components/HoverBlurNavBar.vue'
import IconHoverNavBar from "./components/IconHoverNavBar.vue";
</script>
<template>
  <div class="navbar-container">
    <ShrinkNavBar />
    <FlexibleNavBar />
    <ElasticrRotation />
    <FullScreen />
    <HoverBlurNavBar />
    <IconHoverNavBar />
  </div>
</template>

<style scoped lang="scss">
.navbar-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  max-width: 1200px;
  padding: 20px;
}
</style>
