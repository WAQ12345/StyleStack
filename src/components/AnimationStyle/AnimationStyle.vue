<script setup lang="ts">
import Spotlights from './components/Spotlights.vue';
import Splinter from './components/Splinter.vue'
import ANIPLEX from './components/ANIPLEX.vue'
import Carousel from './components/Carousel.vue';
import Radar from './components/Radar.vue';
import Battery from './components/Battery.vue';
import IlluminatedFont from './components/IlluminatedFont.vue';
</script>
<template>
    <div class="navbar-container">
        <Spotlights />
        <Splinter />
        <ANIPLEX />
        <Carousel class="carousel-wrapper" />
        <Radar />
        <Battery />
        <IlluminatedFont />
    </div>
</template>

<style scoped lang="scss">
.navbar-container {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 20px;
}

.carousel-wrapper {
    margin-left: 150px;
    margin-right: 150px;
    width: 180px;
    height: 260px;
    display: flex;
    align-items: center;
}
</style>
