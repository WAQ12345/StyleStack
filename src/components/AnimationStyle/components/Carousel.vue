<template>
    <div class="carousel">
        <section>
            <div><img src="@/assets/images/op/1.jpg" alt=""></div>
            <div><img src="@/assets/images/op/2.jpg" alt=""></div>
            <div><img src="@/assets/images/op/3.jpg" alt=""></div>
            <div><img src="@/assets/images/op/4.jpg" alt=""></div>
            <div><img src="@/assets/images/op/5.jpg" alt=""></div>
            <div><img src="@/assets/images/op/6.jpg" alt=""></div>
            <div><img src="@/assets/images/op/7.jpg" alt=""></div>
            <div><img src="@/assets/images/op/8.jpg" alt=""></div>
        </section>
    </div>

</template>
<style lang='scss' scoped>
.carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 800px;
}

section {
    position: relative;
    width: 150px;
    height: 200px;
    transform-style: preserve-3d;
    animation: rotate 20s linear infinite;

    &:hover {
        animation-play-state: paused;
    }

    div {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        -webkit-box-reflect: below 10px -webkit-linear-gradient(transparent 60%, rgba(255, 255, 255, 0.2));

        img {
            width: 100%;
            height: 100%;
        }
    }
}

section div:nth-child(1) {
    transform: rotateY(0deg) translateZ(250px);
}

section div:nth-child(2) {
    transform: rotateY(45deg) translateZ(250px);
}

section div:nth-child(3) {
    transform: rotateY(90deg) translateZ(250px);
}

section div:nth-child(4) {
    transform: rotateY(135deg) translateZ(250px);
}

section div:nth-child(5) {
    transform: rotateY(180deg) translateZ(250px);
}

section div:nth-child(6) {
    transform: rotateY(225deg) translateZ(250px);
}

section div:nth-child(7) {
    transform: rotateY(270deg) translateZ(250px);
}

section div:nth-child(8) {
    transform: rotateY(315deg) translateZ(250px);
}

@keyframes rotate {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(360deg);
    }
}
</style>