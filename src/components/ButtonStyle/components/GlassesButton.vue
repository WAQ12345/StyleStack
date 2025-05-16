<script lang="ts" setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faQq,
  faWeixin,
  faWeibo,
  faTencentWeibo,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faQq, faWeixin, faWeibo, faTencentWeibo, faTelegram);
</script>

<template>
  <div class="container">
    <ul flex-center-all>
      <li>
        <a href="#">
          <FontAwesomeIcon :icon="['fab', 'qq']" />
        </a>
      </li>

      <li>
        <a href="#">
          <FontAwesomeIcon :icon="['fab', 'weixin']" />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon :icon="['fab', 'weibo']" />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon :icon="['fab', 'tencent-weibo']" />
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon :icon="['fab', 'telegram']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.container {
  // 使用通用定位类
  @extend .relative;

  // 尺寸约束
  width: var(--card-width);

  &::before {
    // 使用颜色变量
    border-top: 1px solid rgba(var(--color-surface), 0.2);
    // 使用阴影变量
    box-shadow: var(--shadow-md);
  }
}

ul {
  @extend .flex; // 启用flex布局
  gap: var(--space-4); // 添加间距系统变量
  z-index: 2;
  position: relative;

  li {
    position: relative;
    margin: var(--space-2); // 使用间距变量
  }
}

ul li a {
  position: relative;
  width: 50px;
  height: 50px;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-surface);
  font-size: 32px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 5px 45px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  transition: all 0.5s;
  overflow: hidden;
  // 使用主色渐变
  background: linear-gradient(45deg,
      var(--color-primary),
      var(--color-success));
}

ul li a:hover {
  transform: translateY(-20px);
}

ul li a::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 100%;
  background-color: #fff;
  transform: skewX(45deg) translateX(150px);
  transition: all 0.8s;
}

ul li a:hover::before {
  transform: skewX(45deg) translateX(-150px);
}
</style>
