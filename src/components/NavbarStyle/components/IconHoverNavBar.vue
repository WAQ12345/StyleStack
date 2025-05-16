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
                    <FontAwesomeIcon :icon="faHome" class="fa" />
                    <span>Home</span>
                </a>
            </li>
            <li class="item">
                <a href="#" class="link">
                    <FontAwesomeIcon :icon="faHeart" class="fa" />
                    <span>Dynamic</span>
                </a>
            </li>
            <li class="item">
                <a href="#" class="link">
                    <FontAwesomeIcon :icon="faPlusCircle" class="fa" />
                    <span>Publish</span>
                </a>
            </li>
            <li class="item">
                <a href="#" class="link">
                    <FontAwesomeIcon :icon="faBell" class="fa" />
                    <span>Message</span>
                </a>
            </li>
            <li class="item">
                <a href="#" class="link">
                    <FontAwesomeIcon :icon="faUser" class="fa" />
                    <span>My</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
<style lang='scss' scoped>
.nav {
    display: flex;
    background-color: #b7a1eb;
    height: 70px;
    border-radius: 20px;
    overflow: hidden;
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
    transition: all 0.4s ease;
}

.nav .menu .item:hover {
    background-color: #a38bdb;
}

.nav .menu .item .link {
    display: block;
    position: relative;
    width: 100%;
    height: 70px;
    color: #fff;
    text-decoration: none;
    overflow: hidden;
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
    transition: all 0.4s ease;
}

.nav .menu .item .link span {
    position: absolute;
    width: 100%;
    bottom: -50%;
    left: 0;
    text-align: center;
    opacity: 0;
    transition: all 0.4s ease;
}

.nav .menu .item:hover .link span {
    opacity: 1;
    bottom: 0px;
}

.nav .menu .item:hover .link .fa {
    transform: translateY(-95%);
}
</style>