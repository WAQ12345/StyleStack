<template>
    <section class="flex-center-all">
        <div class="item">
            <div class="a">Like.</div>
            <div class="a">Like.</div>
            <span>点赞</span>
        </div>

    </section>
</template>
<style lang='scss' scoped>
section {
    width: 150px;
    height: 100px;
    background: #000;
}

section .item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

section .item .a {
    font-size: 20px;
    color: #fff;
    font-style: italic;
    font-weight: bold;
    top: 0;
    opacity: 1;
    transition: top 0.5s, opacity 0.5s;
}

section .item .a:nth-child(1) {
    position: absolute;
    clip-path: polygon(0% 0%, 100% 0%, 100% 51%, 0% 51%);
}

section .item .a:nth-child(2) {
    position: absolute;
    clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);
}

section:hover .item {
    filter: blur(10px);
    transform: scale(0.8);
    transition: filter 0.5s, transform 0.5s;
}

section .item:hover {
    filter: blur(0px);
    transform: scale(1);
    transition: filter 0.5s, transform 0.5s;
}

section .item:hover .a:nth-child(1) {
    top: -20px;
    opacity: 0.5;
    transition: top 0.5s, opacity 0.5s;
}

section .item:hover .a:nth-child(2) {
    top: 20px;
    opacity: 0.5;
    transition: top 0.5s, opacity 0.5s;
}
</style>