<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faQq,
  faWeixin,
  faWeibo,
  faTencentWeibo,
  faTelegram,
  faRenren,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faQq, faWeixin, faWeibo, faTencentWeibo, faTelegram, faRenren);
</script>

<template>
  <nav class="menu">
    <input type="checkbox" class="menu-toggler" id="menu_toggle" checked />
    <label for="menu_toggle"> </label>
    <ul>
      <li class="menu-item">
        <a href="#">
          <FontAwesomeIcon :icon="faQq" style="color: var(--color-primary)" />
        </a>
      </li>
      <li class="menu-item">
        <a href="#">
          <FontAwesomeIcon
            :icon="faWeixin"
            style="color: var(--color-success)"
          />
        </a>
      </li>
      <li class="menu-item">
        <a href="#">
          <FontAwesomeIcon :icon="faWeibo" style="color: var(--color-danger)" />
        </a>
      </li>
      <li class="menu-item">
        <a href="#">
          <FontAwesomeIcon
            :icon="faTencentWeibo"
            style="color: var(--color-info)"
          />
        </a>
      </li>
      <li class="menu-item">
        <a href="#">
          <FontAwesomeIcon
            :icon="faTelegram"
            style="color: var(--color-primary)"
          />
        </a>
      </li>
      <li class="menu-item">
        <a href="#">
          <FontAwesomeIcon
            :icon="faRenren"
            style="color: var(--color-darkBlue)"
          />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.menu {
  position: relative;
  width: 260px;
  height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  .menu-toggler {
    display: none;
  }

  label {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 56px;
    height: 56px;
    background: rgba(255,255,255,0.25);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    cursor: pointer;
    &::before {
      content: "×";
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.5rem;
      color: #000;
      width: 100%;
      height: 100%;
      font-weight: bold;
      transition: transform 0.4s cubic-bezier(.68,-0.55,.27,1.55);
    }
  }

  ul {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .menu-item {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 64px;
    height: 64px;
    margin: -32px;
    opacity: 0;
    transform: rotate(0deg) translate(0, 0) scale(0.5);
    transition:
      transform 0.6s cubic-bezier(.68,-0.55,.27,1.55),
      opacity 0.3s 0.1s;
    z-index: 1;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: rgba(255,255,255,0.25);
      border-radius: 50%;
      font-size: 2rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      transition: background 0.2s;
      &:hover {
        background: rgba(255,255,255,0.5);
      }
    }
  }

  // 通过checkbox控制展开
  .menu-toggler:checked ~ label::before {
    transform: rotate(135deg);
  }

  .menu-toggler:checked ~ ul .menu-item {
    opacity: 1;
    transform: scale(1)
      rotate(var(--angle))
      translate(100px)
      rotate(calc(-1 * var(--angle)));
    // 让icon正向
  }

  // 环形分布
  .menu-item:nth-child(1) { --angle: 0deg; }
  .menu-item:nth-child(2) { --angle: 60deg; }
  .menu-item:nth-child(3) { --angle: 120deg; }
  .menu-item:nth-child(4) { --angle: 180deg; }
  .menu-item:nth-child(5) { --angle: 240deg; }
  .menu-item:nth-child(6) { --angle: 300deg; }
}
</style>
