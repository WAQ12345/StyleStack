<template>
    <div class="effect">
        <div class="bigBall"></div>
        <div class="smallBall"></div>
    </div>
</template>
<style lang='scss' scoped>
.effect {
    @extend .relative;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background-color: var(--color-surface);
    filter: contrast(10);
}

.bigBall,
.smallBall {
    @extend .absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: var(--space-4);
    border-radius: 50%;
    filter: blur(5px);
}

.bigBall {
    width: 100px;
    height: 100px;
    background-color: var(--color-text);
}

.smallBall {
    width: 60px;
    height: 60px;
    background-color: var(--color-danger);
    animation: ball 3s infinite;
}

@keyframes ball {

    0%,
    100% {
        left: 50px;
        width: 60px;
        height: 60px;
    }

    4%,
    54% {
        width: 60px;
        height: 60px;
    }

    10%,
    60% {
        width: 50px;
        height: 70px;
    }

    20%,
    70% {
        width: 60px;
        height: 60px;
    }

    34%,
    90% {
        width: 70px;
        height: 50px;
    }

    41% {
        width: 60px;
        height: 60px;
    }

    50% {
        left: 270px;
        width: 60px;
        height: 60px;
    }
}
</style>