<template>
  <div class="main-layout">
    <aside class="sidebar">
      <ul>
        <li class="nav-item" :class="{active: $route.path === '/button'}" @click="$router.push('/button')">按钮样式</li>
        <li class="nav-item" :class="{active: $route.path === '/input'}" @click="$router.push('/input')">输入框样式</li>
        <li class="nav-item" :class="{active: $route.path === '/card'}" @click="$router.push('/card')">卡片样式</li>
        <li class="nav-item" :class="{active: $route.path === '/loading'}" @click="$router.push('/loading')">加载样式</li>
        <li class="nav-item" :class="{active: $route.path === '/login'}" @click="$router.push('/login')">登录样式</li>
        <li class="nav-item" :class="{active: $route.path === '/slider'}" @click="$router.push('/slider')">滑块样式</li>
        <li class="nav-item" :class="{active: $route.path === '/navbar'}" @click="$router.push('/navbar')">导航栏样式</li>
        <li class="nav-item" :class="{active: $route.path === '/animation'}" @click="$router.push('/animation')">动画样式</li>
        <li class="nav-item" :class="{active: $route.path === '/switch'}" @click="$router.push('/switch')">切换样式</li>
        <li class="nav-item" :class="{active: $route.path === '/card'}" @click="$router.push('/card')">网页样式</li>
      </ul>
    </aside>
    <main class="content-area">
      <slot />
    </main>
  </div>
</template>