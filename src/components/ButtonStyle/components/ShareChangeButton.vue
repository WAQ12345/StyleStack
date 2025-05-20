<script lang='ts' setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQq, faWeixin, faWeibo, faRenren } from '@fortawesome/free-brands-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faQq, faWeixin, faWeibo, faRenren, faShareAlt)
</script>
<template>
    <div class="share-button">
        <span>
            <FontAwesomeIcon :icon="faShareAlt" /> Share
        </span>
        <a href="javascript:;">
            <FontAwesomeIcon :icon="faQq" />
        </a>
        <a href="javascript:;">
            <FontAwesomeIcon :icon="faWeixin" />
        </a>
        <a href="javascript:;">
            <FontAwesomeIcon :icon="faWeibo" />
        </a>
        <a href="javascript:;">
            <FontAwesomeIcon :icon="faRenren" />
        </a>
    </div>
</template>
<style lang='scss' scoped>
.share-button {
    width: 300px;
    height: 80px;
    background-color: #fff;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    transition: 0.3s linear;

    &:hover {
        transform: scale(1.1);

        span {
            transform: translateX(-100%);
            transition-delay: 0.3s;
        }

        a {
            opacity: 1;
            transform: translateX(0);
        }
    }

    & span {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #333;
        color: #fff;
        font-size: 18px;
        text-align: center;
        line-height: 80px;
        border-radius: 40px;
        z-index: 1;
        transition: 0.6s linear;
    }

    & a {
        flex: 1;
        font-size: 26px;
        color: #333;
        text-align: center;
        transform: translateX(-100%);
        opacity: 0;
        transition: 0.3s linear;
    }
}

.share-button a:nth-of-type(1) {
    transition-delay: 1s;
}

.share-button a:nth-of-type(2) {
    transition-delay: 0.8s;
}

.share-button a:nth-of-type(3) {
    transition-delay: 0.6s;
}

.share-button a:nth-of-type(4) {
    transition-delay: 0.4s;
}
</style>