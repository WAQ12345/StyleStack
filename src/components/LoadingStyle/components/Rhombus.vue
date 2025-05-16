<script lang="ts" setup>
const rhombusItems = [
    { color: 'var(--color-danger)', delay: '0.4s' },
    { color: 'var(--color-info)', delay: '0.6s' },
    { color: 'var(--color-darkBlue)', delay: '0.8s' },
    { color: 'var(--color-warning)', delay: '0.2s' },
    { color: 'var(--color-success)', delay: '0.4s' },
    { color: 'var(--color-primary)', delay: '0.6s' },
    { color: 'var(--color-danger)', delay: '0s' },
    { color: 'var(--color-warning)', delay: '0.2s' },
    { color: 'var(--color-success)', delay: '0.4s' }
]
</script>

<template>
    <div class="rhombus">
        <span v-for="(item, index) in rhombusItems" :key="index" :style="{
            '--c': item.color,
            '--d': item.delay
        }"></span>
    </div>
</template>
<style lang='scss' scoped>
.rhombus {
    width: 200px;
    height: 200px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    transform: rotate(45deg);

    span {
        background-color: var(--c);
        animation: blinking 2s linear infinite var(--d);
        @extend .relative;
    }
}

@keyframes blinking {

    0%,
    100% {
        transform: scale(0);
    }

    40%,
    80% {
        transform: scale(1);
    }
}
</style>