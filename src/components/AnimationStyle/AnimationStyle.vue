<script setup lang="ts">
import Spotlights from './components/Spotlights.vue';
import Splinter from './components/Splinter.vue'
</script>
<template>
    <div class="navbar-container">
        <Spotlights />
        <Splinter />
    </div>
</template>

<style scoped lang="scss">
.navbar-container {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 20px;
}
</style>
