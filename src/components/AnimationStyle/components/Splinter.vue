<template>
    <section class="flex-center-all">
        <div class="item">
            <div class="a">Like.</div>
            <div class="a">Like.</div>
            <span>点赞了解更多</span>
        </div>
        <div class="item">
            <div class="a">Foll.</div>
            <div class="a">Foll.</div>
            <span>关注了解更多</span>
        </div>
        <div class="item">
            <div class="a">Coll.</div>
            <div class="a">Coll.</div>
            <span>收藏了解更多</span>
        </div>
    </section>
</template>
<style lang='scss' scoped>
section {
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #000;
}

section .item {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

section .item .a {
    color: #fff;
    font-style: italic;
    font-weight: bold;
    top: 0;
    opacity: 1;
    transition: top 0.5s, opacity 0.5s;
}
</style>