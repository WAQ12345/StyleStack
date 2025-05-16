<script setup lang="ts">
import GlassesButton from './components/GlassesButton.vue';
import FlowingLightButton from './components/FlowingLightButton.vue'
import GlowingReflectionButton from './components/GlowingReflectionButton.vue';
import SimpleButton from './components/SimpleButton.vue';
</script>
<template>
  <div class="navbar-container">
    <GlassesButton />
    <FlowingLightButton />
    <GlowingReflectionButton />
    <SimpleButton />
  </div>
</template>

<style scoped lang="scss">
.navbar-container {
  display: flex;
  gap: 3rem;
  align-items: center;
}
</style>
