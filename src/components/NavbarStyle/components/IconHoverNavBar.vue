<script lang="ts" setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faHome,
    faHeart,
    faPlusCircle,
    faBell,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faHome, faHeart, faPlusCircle, faBell, faUser);
</script>
<template>
    <nav class="nav">
        <ul class="menu">
            <li class="item">
                <a href="#" class="link">
                    <FontAwesomeIcon :icon="faHome" />
                    <span>首页</span>
                </a>
            </li>
            <li class="item">
                <a href="#" class="link">
                    <FontAwesomeIcon :icon="faHeart" />
                    <span>动态</span>
                </a>
            </li>
            <li class="item">
                <a href="#" class="link">
                    <FontAwesomeIcon :icon="faPlusCircle" />
                    <span>发布</span>
                </a>
            </li>
            <li class="item">
                <a href="#" class="link">
                    <FontAwesomeIcon :icon="faBell" />
                    <span>消息</span>
                </a>
            </li>
            <li class="item">
                <a href="#" class="link">
                    <FontAwesomeIcon :icon="faUser" />
                    <span>我的</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
<style lang='scss' scoped>
.nav {
    display: flex;
    background-color: #b7a1eb;
    height: 100px;
    /* 圆角 */
    border-radius: 20px;
    /* 溢出隐藏 */
    overflow: hidden;
    /* 阴影 */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.nav .menu {
    display: flex;
    justify-content: center;
}

.nav .menu .item {
    position: relative;
    cursor: pointer;
    padding: 0 10px;
    width: 150px;
    height: 100%;
    /* 加个动画过渡 */
    transition: all 0.4s ease;
}

.nav .menu .item:hover {
    background-color: #a38bdb;
}

.nav .menu .item .link {
    display: block;
    position: relative;
    width: 100%;
    height: 100px;
    color: #fff;
    text-decoration: none;
    overflow: hidden;
    /* 加个动画过渡 */
    transition: all 0.4s ease;
}

.nav .menu .item .link .fa {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    text-align: center;
    font-size: 32px;
    /* 加个动画过渡 */
    transition: all 0.4s ease;
}

.nav .menu .item .link span {
    position: absolute;
    width: 100%;
    bottom: -50%;
    left: 0;
    text-align: center;
    opacity: 0;
    /* 加个动画过渡 */
    transition: all 0.4s ease;
}

.nav .menu .item:hover .link span {
    /* 鼠标移入文本出现、上移 */
    opacity: 1;
    bottom: 18px;
}

.nav .menu .item:hover .link .fa {
    /* 鼠标移入图标上移 */
    transform: translateY(-95%);
}
</style>