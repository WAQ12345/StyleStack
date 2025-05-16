<template>
    <div class="spotlight flex-center-all">
        <span class="text-uppercase ">helloworld</span>
    </div>
</template>
<style lang='scss' scoped>
.spotlight {
    background-color: #222;
}

span {
    font-size: 30px;
    position: relative;
}

span::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "helloworld";
    color: transparent;
    background: linear-gradient(to right, #ff69b3, #fe0000, #ffa401, #ffff01, #008102, #40e1d2, #410098, #9400d4);
    background-clip: text;
    -webkit-background-clip: text;
    clip-path: circle(100px at 0% 50%);
    animation: light 5s infinite;
}

@keyframes light {
    0% {
        clip-path: circle(100px at 0% 50%);
    }

    50% {
        clip-path: circle(100px at 100% 50%);
    }

    100% {
        clip-path: circle(100px at 0% 50%);
    }
}
</style>