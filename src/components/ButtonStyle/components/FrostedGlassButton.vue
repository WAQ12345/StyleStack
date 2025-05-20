<template>
    <div class="container">
        <div class="btn"><a href="javascript:;" class="absolute flex-center-all">我要点赞</a></div>
    </div>
</template>
<style lang='scss' scoped>
.container .btn {
    position: relative;
    width: 200px;
    height: 60px;
    margin: 30px;

    &:hover a {
        letter-spacing: 5px;

        &::before {
            transform: skewX(45deg) translateX(200%);
        }
    }

    a {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.05);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 30px;
        color: #fff;
        z-index: 1;
        font-weight: 400;
        letter-spacing: 1px;
        transition: 0.5s;
        overflow: hidden;
        backdrop-filter: blur(15px);

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.15));
            transform: skewX(45deg) translateX(0);
            transition: 0.5s;
        }
    }
}

.container .btn::before,
.container .btn::after {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 10px;
    background: var(--c);
    border-radius: 5px;
    box-shadow:
        0 0 5px var(--c),
        0 0 15px var(--c),
        0 0 30px var(--c),
        0 0 60px var(--c);
    transition: 0.5s;
}

.container .btn::before {
    bottom: 0px;
}

.container .btn::after {
    top: 0px;
}

.container .btn:hover::before,
.container .btn:hover::after {
    height: 50%;
    width: 80%;
    border-radius: 15px;
    transition-delay: 0.3s;
}

.container .btn:hover::before {
    bottom: 0;
}

.container .btn:hover::after {
    top: 0;
}

.container .btn::before,
.container .btn::after {
    --c: #12c2e9;
}
</style>