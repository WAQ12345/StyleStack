<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

/* DOM容器引用 */
const container = ref<HTMLElement | null>(null);
/* 动画状态控制标志 */
let isIn = true;
let isOut = false;
/* 动态创建的动画元素引用 */
let spanElement: HTMLElement | null = null;
/**
 * 处理鼠标进入事件
 * 1. 创建入场动画元素
 * 2. 设置初始位置
 * 3. 添加动画类名
 */const handleEnter = (e: MouseEvent) => {
  if (!isIn || !container.value) return;
  // 清理现有动画元素
  if (spanElement) {
    container.value.removeChild(spanElement);
    spanElement = null;
  }
  // 计算相对容器坐标
  const rect = container.value.getBoundingClientRect();
  const inX = e.clientX - rect.left;
  const inY = e.clientY - rect.top;
  // 创建并配置动画元素
  spanElement = document.createElement("span");
  spanElement.style.left = `${inX}px`;
  spanElement.style.top = `${inY}px`;
  spanElement.className = "in";
  container.value.appendChild(spanElement);
  // 更新状态标志
  isIn = false;
  isOut = true;
};
/**
 * 处理鼠标离开事件
 * 1. 触发退场动画
 * 2. 设置动画结束清理逻辑
 * 3. 重置状态标志
 */
const handleLeave = (e: MouseEvent) => {
  if (!isOut || !container.value || !spanElement) return;
  // 计算离开位置坐标
  const rect = container.value.getBoundingClientRect();
  const outX = e.clientX - rect.left;
  const outY = e.clientY - rect.top;
  // 切换退场动画样式
  spanElement.className = "out";
  spanElement.style.left = `${outX}px`;
  spanElement.style.top = `${outY}px`;
  // 设置动画结束后的清理
  isOut = false;
  setTimeout(() => {
    container.value?.removeChild(spanElement!);
    spanElement = null;
    isIn = true;
  }, 500);
};
/* 组件挂载时绑定事件监听 */
onMounted(() => {
  container.value?.addEventListener("mouseenter", handleEnter);
  container.value?.addEventListener("mouseleave", handleLeave);
});
/* 组件卸载时移除事件监听 */
onUnmounted(() => {
  container.value?.removeEventListener("mouseenter", handleEnter);
  container.value?.removeEventListener("mouseleave", handleLeave);
});
</script>

<template>
  <div ref="container" class="login-container flex-center flex-column">
    <h1 class="logo">Style Stack</h1>
    <form class="login-form">
      <input type="text" class="form-input" placeholder="Account" />
      <input type="password" class="form-input" placeholder="Password" />
      <button type="submit" class="submit-btn">Login</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  position: relative;
  width: 100%; // 改为相对宽度
  max-width: 350px; // 保持最大宽度限制
  aspect-ratio: 7/9; // 保持350:450的比例（7:9）
  border-radius: 20px;
  background: var(--color-primary);
  box-shadow: var(--shadow-md);
  overflow: hidden;

  .logo {
    color: var(--color-surface);
    font-size: 50px;
    letter-spacing: 5px;
    margin-bottom: 40px;
    text-shadow: 5px 5px 5px rgba(33, 45, 58, 0.3);
    z-index: 1;
    cursor: default;
  }

  .login-form {
    width: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 1;

    .form-input {
      width: 100%;
      height: 40px;
      background: none;
      border: none;
      border-bottom: 1px solid #fff;
      color: #fff;
      font-size: 15px;
      outline: none;

      &::placeholder {
        color: #fff;
        font-size: 15px;
      }
    }

    .submit-btn {
      width: 100%;
      height: 40px;
      background: none;
      border: 1px solid #fff;
      border-radius: 20px;
      color: #fff;
      font-size: 15px;
      letter-spacing: 5px;
      cursor: pointer;
      margin-top: 20px;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    }
  }
}

:deep(.in),
:deep(.out) {
  position: absolute;
  border-radius: 50%;
  background: #cf455f;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 0;
}

:deep(.in) {
  animation: in 0.5s ease-out forwards;
}

:deep(.out) {
  animation: out 0.5s ease-out forwards;
}

@keyframes in {
  0% {
    width: 0;
    height: 0;
  }

  100% {
    width: 1200px;
    height: 1200px;
  }
}

@keyframes out {
  0% {
    width: 1200px;
    height: 1200px;
  }

  100% {
    width: 0;
    height: 0;
  }
}
</style>