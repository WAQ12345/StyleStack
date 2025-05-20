<template>
    <div class="loading">
        <!-- --i是CSS的自定义属性，通过var函数可以调用 -->
        <span style="--i:1;"></span>
        <span style="--i:2;"></span>
        <span style="--i:3;"></span>
        <span style="--i:4;"></span>
        <span style="--i:5;"></span>
        <span style="--i:6;"></span>
        <span style="--i:7;"></span>
    </div>
    <!-- 接下来我们来自定义一个滤镜 -->
    <svg>
        <!-- <filter>标签是用来定义SVG滤镜，通过id进行调用使用 -->
        <filter id="gooey">
            <!-- <feGaussianBlur>元素是用于创建模糊滤镜 -->
            <feGaussianBlur in="SourceGraphic" stdDeviation="10"></feGaussianBlur>
            <!-- <feColorMatrix>是过滤中的一种类型，使用矩阵来影响颜色的每个通道(基于RGBA)，可以将其想象成Photoshop中的通道编辑一样 -->
            <feColorMatrix values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10
            "></feColorMatrix>
        </filter>
        <!-- 到这里自定义滤镜就写好了，接下来我们对它进行调用 -->
    </svg>
</template>

<style lang='scss' scoped>
.loading {
    position: relative;
    width: 200px;
    height: 200px;
    filter: url(#gooey);

    span {
        /* 绝对定位 */
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        animation: animate 4s ease-in-out infinite;
        animation-delay: calc(0.2s * var(--i));

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: calc(50% - 20px);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(#d1f5ff, #1683ff);
            box-shadow: 0 0 30px #1683ff;
        }
    }
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }

    50%,
    100% {
        transform: rotate(360deg);
    }
}

svg {
    width: 0;
    height: 0;
}
</style>