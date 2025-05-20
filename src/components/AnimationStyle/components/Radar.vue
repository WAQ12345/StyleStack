<template>
    <div class="radar"></div>
</template>
<style lang='scss' scoped>
.radar {
    width: calc(256px + 48px);
    height: calc(256px + 48px);
    border: 1px solid;
    background:
        /* 重复的径向渐变 圈圈 */
        repeating-radial-gradient(transparent 0,
            transparent 30px,
            darkcyan 30px,
            darkcyan 32px),
        /* 线性渐变 中间横线 */
        linear-gradient(transparent 49.75%,
            darkcyan 49.75%,
            darkcyan 50.25%,
            transparent 50.25%),
        linear-gradient(90deg,
            transparent 49.75%,
            darkcyan 49.75%,
            darkcyan 50.25%,
            transparent 50.25%),
        linear-gradient(#000, #000);
    border-radius: 50%;
    position: relative;
}

.radar::before {
    content: "";
    position: absolute;
    width: calc(256px / 2);
    height: calc(256px / 2);
    background: linear-gradient(45deg,
            rgba(0, 0, 0, 0) 50%,
            rgba(0, 255, 255, 1) 100%);
    border-radius: 100% 0 0 0;
    top: calc(48px / 2);
    left: calc(48px / 2);
    animation: scanning 5s linear infinite;
    transform-origin: 100% 100%;
}

/* 定义动画 */
@keyframes scanning {
    to {
        transform: rotate(360deg);
    }
}
</style>