<script setup lang="ts">
import ShrinkNavBar from "./components/ShrinkNavBar.vue";
import FlexibleNavBar from "./components/FlexibleNavBar.vue";
import ElasticrRotation from "./components/ElasticrRotation.vue";
import FullScreen from './components/Full-screenNavBar.vue'
import HoverBlurNavBar from './components/HoverBlurNavBar.vue'
</script>
<template>
  <div class="navbar-container">
    <ShrinkNavBar />
    <FlexibleNavBar />
    <ElasticrRotation />
    <FullScreen />
    <HoverBlurNavBar />
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
