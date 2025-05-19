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
            <FontAwesomeIcon :icon="faShareAlt" /> 去分享
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
    /* 溢出隐藏 */
    overflow: hidden;
    /* 加个动画过渡 */
    transition: 0.3s linear;
}
</style>