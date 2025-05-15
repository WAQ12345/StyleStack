<script setup lang="ts">
const buttonLabels = ['Likes', 'Follow', 'Comments', 'Favorite', 'Share']
</script>
<template>
    <div class="glowing-reflection flex-center-all">
        <a v-for="i in 5" :key="i" href="#" :style="{ '--i': i }" class="text-center">
            {{ buttonLabels[i - 1] }}
        </a>
    </div>
</template>
<style lang='scss' scoped>
.glowing-reflection {
    width: 100%;
    height: 100%;

    a {
        min-width: 80px;
        height: 40px;
        position: relative;
        display: block;
        margin: 5px;
        padding: 5px;
        color: plum;
        font-size: 20px;
        transition: all 0.3s ease-in-out;
        filter: hue-rotate(calc(var(--i)*60deg));
    }

}



.glowing-reflection a::before,
.glowing-reflection a::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid plum;
    transition: all 0.3s ease-in-out 0.3s;
}

.glowing-reflection a::before {
    top: 0;
    left: 0;
    border-right: 0;
    border-bottom: 0;
}

.glowing-reflection a::after {
    right: 0;
    bottom: 0;
    border-top: 0;
    border-left: 0;
}

.glowing-reflection a:hover {
    background-color: plum;
    color: #fff;
    box-shadow: 0 0 50px plum;
    -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0, 0, 0, 0.3));
    transition-delay: 0.4s;
}

.glowing-reflection a:hover::before,
.glowing-reflection a:hover::after {
    width: 80px;
    height: 40px;
    transition-delay: 0s;
}
</style>