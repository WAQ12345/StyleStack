<script setup lang="ts">
import { ref } from 'vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faBars, faTimes);
const isMenuOpen = ref(false);
</script>
<template>
    <div class="full-screen flex-center-all relative">
        <input type="checkbox" id="menu_btn" v-model="isMenuOpen">
        <label class="menu-btn" for="menu_btn">
            <FontAwesomeIcon :icon="isMenuOpen ? faTimes : faBars" />
        </label>
        <div class="con text-center text-uppercase">
            <span>Full Screen</span>
        </div>
        <div class="wrapper">
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Case</a></li>
            </ul>
        </div>
    </div>
</template>
<style lang='scss' scoped>
.full-screen {
    width: 100%;
    height: var(--card-height);

    .con {
        position: absolute;
        font-size: 30px;
        letter-spacing: 15px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .wrapper {
        width: 100%;
        height: 100%;
        background: linear-gradient(200deg, #ec77ab, #7873f5);
        clip-path: circle(25px at calc(100% - 45px) 45px);
        transition: all 0.3s ease-in-out;

        ul {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            list-style: none;
            text-align: center;

            li {
                margin: 30px 0px;

                a {
                    color: #fff;
                    text-decoration: none;
                    font-size: 30px;
                    font-weight: 500;
                    padding: 5px 50px;
                    position: relative;
                    line-height: 50px;

                    &::after {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 50px;
                        background: #fff;
                        z-index: -1;
                        border-radius: 50px;
                        left: 0px;
                        transform: scaleY(0);
                        transition: transform 0.3s ease;
                    }

                    &:hover::after {
                        transform: scaleY(1);
                    }

                    &:hover {
                        color: #d576ba;
                    }
                }
            }
        }
    }

    .menu-btn {
        position: absolute;
        right: 20px;
        top: 20px;
        z-index: 2;
        background: linear-gradient(200deg, #ec77ab, #7873f5);
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border-radius: 50%;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
}

#menu_btn {
    display: none;
}

#menu_btn:checked~.wrapper {
    clip-path: circle(75%);
}

#menu_btn:checked~.menu-btn {
    color: #d576ba;
    background: #fff;
}
</style>