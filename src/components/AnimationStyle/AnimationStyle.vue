<script setup lang="ts">
import Spotlights from './components/Spotlights.vue';
</script>
<template>
    <div class="navbar-container">
        <Spotlights />
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
