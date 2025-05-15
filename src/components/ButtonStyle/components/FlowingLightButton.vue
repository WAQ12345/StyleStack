<template>
    <a href="#" class="flowing-btn">
        <span class="text-uppercase">Flowing</span>
    </a>
</template>
<style lang='scss' scoped>
.flowing-btn {
    @extend .relative, .flex-center-all, .cursor-pointer;
    width: 200px;
    height: 50px;
    line-height: 50px;
    padding: var(--space-4) var(--space-8);
    background: linear-gradient(to right,
            var(--color-primary),
            var(--color-danger),
            var(--color-warning),
            var(--color-primary));
    background-size: 400%;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease-in-out;

    font-size: var(--text-xl);
    color: var(--color-surface) !important;

    &::before {
        @extend .absolute;
        content: "";
        top: calc(-1 * var(--space-2));
        left: calc(-1 * var(--space-2));
        right: calc(-1 * var(--space-2));
        bottom: calc(-1 * var(--space-2));
        background: inherit;
        background-size: 400%;
        border-radius: var(--radius-lg);
        filter: blur(var(--space-8));
        opacity: 0.7;
        z-index: -1;
        transition: inherit;
    }

    &:hover {
        animation: streamer 8s infinite;
        box-shadow: 0 0 40px 16px #6dd5edcc, 0 2px 12px #2193b088;

        &::before {
            opacity: 0.9;
        }
    }
}

@keyframes streamer {
    100% {
        background-position: -400% 0;
    }
}
</style>