<template>
    <div class="box">
        <div class="chars">A</div>
        <div class="chars">N</div>
        <div class="chars">I</div>
        <div class="chars">P</div>
        <div class="chars">L</div>
        <div class="chars">E</div>
        <div class="chars">X</div>
        <div class="ll a"></div>
        <div class="ll n"></div>
        <div class="ll i"></div>
        <div class="ll p"></div>
        <div class="ll l"></div>
        <div class="ll e"></div>
        <div class="ll x"></div>
        <div class="pcov"></div>
    </div>
</template>
<style lang='scss' scoped>
.box {
    background-color: #000;
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    perspective: 300;
    -webkit-perspective: 300;
    overflow: hidden;
}

.chars {
    color: #fff;
    position: relative;
    width: 40px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    font-size: 20px;
    font-weight: 900;
    font-style: italic;
    opacity: 0;
}

.ll {
    /* 绝对定位 */
    position: absolute;
    margin-left: -480px;
    width: 60px;
    height: 60px;
    border-radius: 3px;
    opacity: 0;
}

.x {
    border: 4px solid #f5b5fc;
    /* 执行动画：动画名称 时长 线性的 停留在最后一帧 */
    animation: xmove 2s linear forwards;
}

.e {
    border: 4px solid #96f7d2;
    animation: emove 2s linear forwards;
    /* 设置动画延迟 */
    animation-delay: 0.1s;
}

.l {
    border: 4px solid #f0f696;
    animation: lmove 2s linear forwards;
    animation-delay: 0.2s;
}

.p {
    border: 4px solid #fcb1b1;
    animation: pmove 2s linear forwards;
    animation-delay: 0.3s;
}

.i {
    border: 4px solid #f0f696;
    animation: imove 2s linear forwards;
    animation-delay: 0.4s;
}

.n {
    border: 4px solid #96f7d2;
    animation: nmove 2s linear forwards;
    animation-delay: 0.5s;
}

.a {
    border: 4px solid #f5b5fc;
    animation: amove 2s linear forwards;
    animation-delay: 0.6s;
}

.pcov {
    position: absolute;
    width: 4px;
    height: 60px;
    background-color: #fcb1b1;
    opacity: 0;
    animation: showp forwards;
    animation-delay: 2.3s;
}

/* 定义动画 */
/* 显示正中间的那条线 */
@keyframes showp {
    from {
        opacity: 0;
    }

    to {
        transform: scale(1, 2);
        opacity: 1;
    }
}

/* A字符外方框的动画 */
@keyframes amove {
    0% {
        opacity: 1;
        transform: rotateY(0deg);
    }

    50% {
        transform: rotateY(180deg);
    }

    100% {
        opacity: 1;
        transform: rotateY(360deg);
    }
}

/* N字符外方框的动画 */
@keyframes nmove {
    30% {
        opacity: 1;
        transform: translate(30px) rotateY(135deg) scale(1.1, 1.1);
    }

    60% {
        transform: translate(50px) rotateY(45deg) scale(1.1, 1.1);
    }

    85% {
        transform: translate(80px) rotateY(103deg) scale(1.2, 1.2);
    }

    100% {
        opacity: 1;
        z-index: -99;
        transform: translate(80px) rotateY(77deg) scale(1.2, 1.2);
    }
}

/* I字符外方框的动画 */
@keyframes imove {
    30% {
        opacity: 1;
        transform: translate(60px) rotateY(135deg) scale(1.2, 1.2);
    }

    60% {
        transform: translate(120px) rotateY(45deg) scale(1.3, 1.3);
    }

    85% {
        transform: translate(160px) rotateY(103deg) scale(1.3, 1.3);
    }

    100% {
        opacity: 1;
        transform: translate(164px) rotateY(77deg) scale(1.3, 1.3);
    }
}

/* P字符外方框的动画 */
@keyframes pmove {
    30% {
        opacity: 1;
        transform: translate(60px) rotateY(135deg) scale(1.2, 1.2);
    }

    60% {
        transform: translate(120px) rotateY(45deg) scale(1.4, 1.4);
    }

    85% {
        transform: translate(240px) rotateY(135deg) scale(1.6, 1.6);
    }

    100% {
        opacity: 1;
        transform: translate(240px) rotateY(90deg) scale(1.6, 1.6);
    }
}

/* L字符外方框的动画 */
@keyframes lmove {
    33% {
        opacity: 1;
        transform: translate(80px) rotateY(135deg) scale(1.2, 1.2);
    }

    66% {
        transform: translate(240px) rotateY(45deg) scale(1.6, 1.6);
    }

    95% {
        transform: translate(320px) rotateY(100deg) scale(1.4, 1.4);
    }

    100% {
        opacity: 1;
        transform: translate(320px) rotateY(103deg) scale(1.3, 1.3);
    }
}

/* E字符外方框的动画 */
@keyframes emove {
    33% {
        opacity: 1;
        transform: translate(80px) rotateY(135deg) scale(1.2, 1.2);
    }

    66% {
        transform: translate(240px) rotateY(45deg) scale(1.6, 1.6);
    }

    95% {
        transform: translate(390px) rotateY(135deg) scale(1.2, 1.2);
    }

    100% {
        opacity: 1;
        transform: translate(402px) rotateY(103deg) scale(1.2, 1.2);
    }
}

/* X字符外方框的动画 */
@keyframes xmove {
    25% {
        opacity: 1;
        transform: translate(100px) rotateY(135deg) scale(1.2, 1.2);
    }

    50% {
        transform: translate(260px) rotateY(45deg) scale(1.6, 1.6);
    }

    85% {
        transform: translate(400px) rotateY(135deg) scale(1.2, 1.2);
    }

    100% {
        opacity: 1;
        transform: translate(484px) rotateY(0deg) scale(1, 1);
    }
}

/* 前两个字符的动画 */
@keyframes show12 {
    0% {
        opacity: 1;
        transform: rotateY(0deg);
    }

    100% {
        opacity: 1;
        transform: rotateY(360deg);
    }
}

/* 第3个及之后的字符的动画 */
@keyframes show3 {
    0% {
        opacity: 1;
        transform: rotateY(90deg);
    }

    100% {
        opacity: 1;
        transform: rotateY(360deg);
    }
}

.box div:nth-child(1) {
    animation: show12 1.2s linear forwards;
    animation-iteration-count: 2;
    animation-delay: 0.2s;
}

.box div:nth-child(2) {
    animation: show12 1.2s linear forwards;
    animation-iteration-count: 2;
    animation-delay: 0.4s;
}

.box div:nth-child(3) {
    animation: show3 1s linear 1 forwards;
    animation-delay: 0.7s;
}

.box div:nth-child(4) {
    animation: show3 1s linear 1 forwards;
    animation-delay: 0.9s;
}

.box div:nth-child(5) {
    animation: show3 1s linear 1 forwards;
    animation-delay: 1.1s;
}

.box div:nth-child(6) {
    animation: show3 1.2s linear 1 forwards;
    animation-delay: 1.3s;
}

.box div:nth-child(7) {
    animation: show3 1.2s linear 1 forwards;
    animation-delay: 1.6s;
}
</style>