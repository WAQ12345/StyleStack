<template>
    <div class="vertical-slider">
        <div style="--x:0"></div>
        <div style="--x:1"></div>
        <div style="--x:2"></div>
        <div style="--x:3"></div>
        <div style="--x:4"></div>
        <div style="--x:5"></div>
    </div>
</template>
<style lang='scss' scoped>
.vertical-slider {
    display: flex;
    flex-direction: row;
}

.vertical-slider div {
    position: relative;
    width: 40px;
    height: 150px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), #eef1f5);
    margin: 10px;
    border-radius: 20px;
    border: 2px solid #eef1f5;
    box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), -6px 0px 25px #fff, inset -5px -5px 5px rgba(255, 255, 255, 0.5), inset 5px 5px 5px rgba(0, 0, 0, 0.05);
    overflow: hidden;
}

.vertical-slider div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    box-shadow: inset -5px -5px 5px rgba(0, 0, 0, 0.1),
        0 420px 0 400px lightskyblue;
    animation: animate 2s ease-in-out infinite;
    animation-delay: calc(var(--x) * -0.3s);
    transform: translateY(160px);
}

@keyframes animate {
    0% {
        transform: translateY(160px);
        filter: hue-rotate(0deg);
    }

    50% {
        transform: translateY(0px);
        filter: hue-rotate(180deg);
    }

    100% {
        transform: translateY(160px);
        filter: hue-rotate(360deg);
    }
}
</style>