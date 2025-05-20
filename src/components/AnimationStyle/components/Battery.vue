<template>
    <div class="battery">
        <div class="cover"></div>
    </div>
</template>
<style lang='scss' scoped>
.battery {
    width: 200px;
    height: 320px;
    background-color: #fff;
    position: relative;

    &::before {
        content: "";
        width: 50px;
        height: 20px;
        background-color: #fff;
        position: absolute;
        top: -20px;
        left: 50%;
        margin-left: -25px;
        border-radius: 5px 5px 0 0;
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 90%;
        bottom: 0;
        border-radius: 10px 10px 5px 5px;
        background: linear-gradient(to bottom, #04e963 0%, #0bdf9f 44%, #0bdfc3 100%);
        animation: charge 15s linear infinite;
    }

    .cover {
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 5px 5px;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
        overflow: hidden;

        &::before {
            content: "";
            width: 400px;
            height: 400px;
            background: rgba(255, 255, 255, 0.8);
            position: absolute;
            border-radius: 40% 30%;
            left: -50%;
            animation: coverBefore 15s linear infinite;
        }

        &::after {
            content: "";
            width: 400px;
            height: 400px;
            background: rgba(255, 255, 255, 0.7);
            position: absolute;
            border-radius: 42% 40%;
            left: -50%;
            animation: coverAfter 15s linear infinite;
        }
    }
}

@keyframes charge {
    0% {
        top: 100%;
        border-radius: 0 0 5px 5px;
        filter: hue-rotate(90deg);
    }

    95% {
        top: 5%;
        border-radius: 0 0 5px 5px;
    }

    100% {
        top: 0%;
        filter: hue-rotate(0deg);
    }
}

/* 波浪1动画 */
@keyframes coverBefore {
    0% {
        transform: rotate(0deg);
        bottom: 0%;
    }

    100% {
        transform: rotate(360deg);
        bottom: 100%;
    }
}

/* 波浪2动画 */
@keyframes coverAfter {
    0% {
        transform: rotate(30deg);
        bottom: 2%;
    }

    100% {
        transform: rotate(360deg);
        bottom: 95%;
    }
}
</style>