<script setup lang="ts">
import GlassesButton from './components/GlassesButton.vue';
import FlowingLightButton from './components/FlowingLightButton.vue'
</script>
<template>
  <div class="navbar-container">
    <GlassesButton />
    <FlowingLightButton />
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
