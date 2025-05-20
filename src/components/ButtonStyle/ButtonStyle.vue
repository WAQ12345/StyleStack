<script setup lang="ts">
import GlassesButton from './components/GlassesButton.vue';
import FlowingLightButton from './components/FlowingLightButton.vue'
import GlowingReflectionButton from './components/GlowingReflectionButton.vue';
import SimpleButton from './components/SimpleButton.vue';
import ShareChangeButton from './components/ShareChangeButton.vue';
import CloudsButton from './components/CloudsButton.vue';
import BorderSlidingButton from './components/BorderSlidingButton.vue';
import FrostedGlassButton from './components/FrostedGlassButton.vue';
</script>
<template>
  <div class="navbar-container">
    <GlassesButton />
    <FlowingLightButton />
    <GlowingReflectionButton />
    <SimpleButton />
    <ShareChangeButton />
    <CloudsButton />
    <BorderSlidingButton />
    <FrostedGlassButton />
  </div>
</template>

<style scoped lang="scss">
.navbar-container {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
}
</style>
