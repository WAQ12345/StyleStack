<script lang="ts" setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faQq, faWeixin, faWeibo, faRenren } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faQq, faWeixin, faWeibo, faRenren)
</script>

<template>
    <div class="simple">
        <a href="#">
            <FontAwesomeIcon :icon="faQq" />
        </a>
        <a href="#">
            <FontAwesomeIcon :icon="faWeixin" />
        </a>
        <a href="#">
            <FontAwesomeIcon :icon="faWeibo" />
        </a>
        <a href="#">
            <FontAwesomeIcon :icon="faRenren" />
        </a>
    </div>
</template>
<style lang='scss' scoped>
.simple a {
    font-size: 40px;
    color: #88bef5;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    margin: 0 16px;
    display: inline-block;
    position: relative;
    transition: 0.5s linear;
}

.simple a::before,
.simple a::after {
    content: "";
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: 0.5s linear;
}

.simple a:hover {
    transform: scale(0.8);
}

.simple a:hover::before {
    border-left: 4px solid;
    border-right: 4px solid;
    transform: skewX(20deg);
}

.simple a:hover::after {
    border-top: 4px solid;
    border-bottom: 4px solid;
    transform: skewY(-20deg);
}
</style>