<template>
    <div class="rotating flex-center-all relative">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<style lang='scss' scoped>
.rotating {
    width: 300px;
    height: 300px;
    /* 自定义属性--h 即色相 */
    --h: calc(var(--percent) / 100 * 360);
    /* hsl函数使用色相,饱和度,亮度来定义颜色 */
    color: hsl(var(--h), 100%, 75%);
    /* 执行动画:动画名称 时长 线性的 无限次播放 */
    animation: changecolor 5s linear infinite;

    span {
        position: absolute;
        --diameter: calc(50px + (var(--n) - 1) * 30px);
        width: var(--diameter);
        height: var(--diameter);
        border-style: solid;
        /* currentColor代表当前元素被应用上的color颜色值,如果当前元素没有在css里指定一个color值,那它的颜色值就从父级元素继承而来(这里父级元素还没有设置color,所以暂时看不到) */
        border-color: currentColor transparent;
        border-width: 10px 10px 0 0;
        border-radius: 50%;
        /* 执行动画: 动画名称 时长(暂时不设置) 线性的 无限次播放 */
        animation: rotating linear infinite;
        /* 计算并设置动画时长 */
        animation-duration: calc(5s / (9 - var(--n) + 1));
    }
}

/* 为每一个span元素设置自定义属性--n */
.rotating span:nth-child(1) {
    --n: 1;
}

.rotating span:nth-child(2) {
    --n: 2;
}

.rotating span:nth-child(3) {
    --n: 3;
}

.rotating span:nth-child(4) {
    --n: 4;
}

.rotating span:nth-child(5) {
    --n: 5;
}

.rotating span:nth-child(6) {
    --n: 6;
}

.rotating span:nth-child(7) {
    --n: 7;
}

.rotating span:nth-child(8) {
    --n: 8;
}

.rotating span:nth-child(9) {
    --n: 9;
}

@keyframes rotating {
    to {
        /* 1turn表示一圈 */
        transform: rotate(1turn);
    }
}

/* 通过改变自定义属性--percent来改变颜色 */
@keyframes changecolor {

    0%,
    100% {
        --percent: 0;
    }

    10% {
        --percent: 10;
    }

    20% {
        --percent: 20;
    }

    30% {
        --percent: 30;
    }

    40% {
        --percent: 40;
    }

    50% {
        --percent: 50;
    }

    60% {
        --percent: 60;
    }

    70% {
        --percent: 70;
    }

    80% {
        --percent: 80;
    }

    90% {
        --percent: 90;
    }
}
</style>