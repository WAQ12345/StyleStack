<template>
    <nav>
        <ul>
            <li>
                Like
                <span></span><span></span><span></span><span></span>
            </li>
        </ul>
    </nav>
</template>
<style lang='scss' scoped>
nav ul li {
    --c: #fff;
    color: var(--c);
    width: 240px;
    height: 60px;
    border: 3px solid var(--c);
    border-radius: 10px;
    text-align: center;
    line-height: 60px;
    font-weight: bold;
    cursor: pointer;
    margin: 30px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    background: linear-gradient(200deg, var(--color-primary), var(--color-darkBlue));

    span {
        position: absolute;
        width: 25%;
        height: 100%;
        background-color: var(--c);
        border-radius: 50%;
        transform: translateY(150%);
        left: calc((var(--n) - 1) * 25%);
        transition: 0.5s;
        transition-delay: calc((var(--n) - 1) * 0.1s);
        z-index: -1;
    }

    &:hover {
        color: #222;

        span {
            transform: translateY(0) scale(2);
        }
    }
}

nav ul li span:nth-child(1) {
    --n: 1;
}

nav ul li span:nth-child(2) {
    --n: 2;
}

nav ul li span:nth-child(3) {
    --n: 3;
}

nav ul li span:nth-child(4) {
    --n: 4;
}
</style>