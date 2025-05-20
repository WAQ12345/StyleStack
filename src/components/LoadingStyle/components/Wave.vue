<template>
    <div class="wave"></div>
</template>
<style lang='scss' scoped>
.wave {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: #2797e7;
    border-radius: 50%;
    box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
    overflow: hidden;

    &::before {
        content: "";
        width: 300px;
        height: 300px;
        background-color: rgba(255, 255, 255, 0.8);
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -65%);
        border-radius: 40%;
        animation: wave 5s linear infinite;
    }

    &::after {
        content: "Loading...";
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, 40px);
        color: #2797e7;
    }
}

@keyframes wave {
    100% {
        transform: translate(-50%, -65%) rotate(360deg);
    }
}
</style>