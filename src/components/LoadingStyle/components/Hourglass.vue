<template>
    <div class="hourglass">
        <span class="top"></span>
        <span class="bottom"></span>
    </div>
</template>
<style lang='scss' scoped>
.hourglass {
    width: 86px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    animation: rotating 2s linear infinite;
    gap: 20px;
}

.top,
.bottom {
    width: 70px;
    height: 70px;
    border-style: solid;
    border-color: #dcdcdc;
    border-width: 4px 4px 12px 12px;
    border-radius: 50% 100% 50% 30%;
    position: relative;
    overflow: hidden;
}

.top {
    transform: rotate(-45deg);
}

.bottom {
    transform: rotate(135deg);
}

.top::before,
.bottom::before {
    content: "";
    /* 绝对定位 */
    position: absolute;
    /* inherit表示继承父元素（这里指宽高） */
    width: inherit;
    height: inherit;
    background-color: #cabbe9;
    /* 执行动画，先设置动画的参数，暂时不指定动画名称，我们在下面再来指定 */
    animation: 2s linear infinite;
}

.top::before {
    /* 通过设置圆角来改变沙的形状 */
    border-radius: 0 100% 0 0;
    /* 执行指定的动画 */
    animation-name: drop-sand;
}

.bottom::before {
    /* 通过设置圆角来改变沙的形状 */
    border-radius: 0 0 0 25%;
    /* 这里我们将下面的沙移出可视范围 */
    transform: translate(50px, -50px);
    /* 执行指定的动画 */
    animation-name: fill-sand;
}

.hourglass::after {
    content: "";
    width: 2px;
    height: 66px;
    background-color: #cabbe9;
    /* 绝对定位 */
    position: absolute;
    top: 15px;
    /* 执行动画：动画 时长 线性的 无限次播放 */
    animation: flow 2s linear infinite;
    z-index: -1;
}

@keyframes drop-sand {
    to {
        transform: translate(-50px, 50px);
    }
}

/* 填沙动画 */
@keyframes fill-sand {
    to {
        transform: translate(0, 0);
    }
}

/* 沙流下动画 */
@keyframes flow {

    10%,
    100% {
        transform: translateY(64px);
    }
}

/* 最后再来一个沙漏旋转的动画 */
@keyframes rotating {

    0%,
    90% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(180deg);
    }
}
</style>