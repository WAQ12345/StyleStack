<template>
    <div class="IlluminatedFont">
        <span>h</span>
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>o</span>
        <span>w</span>
        <span>o</span>
        <span>r</span>
        <span>l</span>
        <span>d</span>
    </div>
</template>
<style lang='scss' scoped>
.IlluminatedFont {
    background: var(--color-muted);
    height: 40px;
}

span {
    font-size: 20px;
    line-height: 40px;
    font-weight: bold;
    color: var(--color-text);
    text-transform: uppercase;
    letter-spacing: 5px;
    filter: blur(2px);
    animation: animate 2.5s linear infinite;
}

span:nth-child(1) {
    animation-delay: 0s;
}

span:nth-child(2) {
    animation-delay: 0.25s;
}

span:nth-child(3) {
    animation-delay: 0.5s;
}

span:nth-child(4) {
    animation-delay: 0.75s;
}

span:nth-child(5) {
    animation-delay: 1s;
}

span:nth-child(6) {
    animation-delay: 1.25s;
}

span:nth-child(7) {
    animation-delay: 1.5s;
}

span:nth-child(8) {
    animation-delay: 1.75s;
}

span:nth-child(9) {
    animation-delay: 2s;
}

span:nth-child(10) {
    animation-delay: 2.25s;
}

@keyframes animate {

    0%,
    100% {
        color: #fff;
        /* 模糊滤镜 */
        filter: blur(2px);
        /* 文字阴影 */
        text-shadow:
            0 0 10px #32ff7e,
            0 0 20px #32ff7e,
            0 0 30px #32ff7e,
            0 0 40px #32ff7e,
            0 0 100px #32ff7e,
            0 0 200px #32ff7e,
            0 0 300px #32ff7e,
            0 0 400px #32ff7e;
    }

    5%,
    95% {
        color: #111;
        filter: blur(0px);
        text-shadow: none;
    }
}
</style>