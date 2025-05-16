<template>
    <div class="cyclic flex-center-all relative">
        <span class="text-muted">Loading...</span>
    </div>
</template>
<style lang='scss' scoped>
.cyclic {
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 10px solid var(--color-primary);
    animation: a1 2s linear infinite;

    span {
        position: absolute;
        width: 200px;
        height: 200px;
        line-height: 200px;
        text-align: center;
        animation: a2 2s linear infinite;
    }
}

.cyclic::before,
.cyclic::after {
    content: "";
    width: 200px;
    height: 200px;
    position: absolute;
    left: 0;
    top: -10px;
    box-sizing: border-box;
    border-radius: 50%;
}

.cyclic::before {
    border-top: 10px solid #f2e1ac;
    transform: rotate(120deg);
}

.cyclic::after {
    border-top: 10px solid #f2836b;
    transform: rotate(240deg);
}


@keyframes a1 {
    to {
        transform: rotate(360deg);
    }
}

@keyframes a2 {
    to {
        transform: rotate(-360deg);
    }
}
</style>