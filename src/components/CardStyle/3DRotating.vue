<template>
    <div class="card">
        <div class="front">
            <p>缘分让我们遇到！</p>
        </div>
        <div class="back">
            <p>求点赞~</p>
            <p>求关注~</p>
            <p>求评论~</p>
            <p>求收藏~</p>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.card {
    position: relative;
    width: var(--card-width);
    height: var(--card-height);
    border-radius: var(--radius-md);
    cursor: pointer;
    background-image: linear-gradient(200deg, #5ee7df, #b490ca);
    box-shadow: var(--shadow-md);
    transform-style: preserve-3d;
    animation: rotate-reverse 1.2s cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards;
}

.card:hover {
    animation: rotate 1.2s cubic-bezier(0.66, -0.47, 0.33, 1.5) forwards;
}

.front,
.back {
    @include flex-center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 1.2em;
    border-radius: inherit;
    backface-visibility: hidden;
    color: var(--color-surface);
}

.back {
    transform: rotateY(180deg);
}

@keyframes rotate {
    0% {
        transform: rotateY(0deg);
    }

    100% {
        transform: rotateY(180deg);
    }
}

@keyframes rotate-reverse {
    0% {
        transform: rotateY(180deg);
    }

    100% {
        transform: rotateY(0deg);
    }
}
</style>