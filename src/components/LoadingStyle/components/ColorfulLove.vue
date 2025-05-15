<template>
    <div class="heart">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
</template>
<style lang='scss' scoped>
.heart {
    width: var(--card-width);
    height: var(--card-height);
    display: flex;
    justify-content: space-between;
}

.heart span {
    --c: var(--color-danger);
    --h: 50%;
    --t: 25%;
    background-color: var(--c);
    width: 20px;
    border-radius: 10px;
    position: relative;
    height: var(--h);
    top: var(--t);
    animation: beating 1s infinite;
}

.heart span:nth-child(1),
.heart span:nth-child(9) {
    --c: var(--color-danger);
    --h: 60px;
    --t: 44px;
}

.heart span:nth-child(2),
.heart span:nth-child(8) {
    --c: var(--color-primary);
    --h: 120px;
    --t: 12px;
}

.heart span:nth-child(3),
.heart span:nth-child(7) {
    --c: var(--color-success);
    --h: 160px;
    --t: 0;
}

.heart span:nth-child(4),
.heart span:nth-child(6) {
    --c: var(--color-warning);
    --h: 180px;
    --t: 16px;
}

.heart span:nth-child(5) {
    --c: pink;
    --h: 188px;
    --t: 32px;
}

@keyframes beating {

    0%,
    30% {
        height: var(--h);
        top: var(--t);
        background-color: var(--c);
        filter: blur(0);
    }

    60%,
    70% {
        height: 50%;
        top: 25%;
        background-color: plum;
        filter: blur(5px);
    }
}
</style>