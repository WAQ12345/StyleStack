<template>
  <div class="navbar flex">
    <input type="checkbox" />
    <span></span>
    <span></span>
    <ul class="flex">
      <li><a href="javascript:void(0)">点赞</a></li>
      <li><a href="javascript:void(0)">关注</a></li>
      <li><a href="javascript:void(0)">收藏</a></li>
      <li><a href="javascript:void(0)">评论</a></li>
      <li><a href="javascript:void(0)">分享</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: 40px;
  line-height: 40px;
  position: relative;
  padding: 0 var(--space-5);
  border-radius: 50px;
}
.navbar input {
  width: 40px;
  opacity: 0;
  cursor: pointer;
}
.navbar span {
  position: absolute;
  left: 18px;
  width: 30px;
  height: 4px;
  top: calc(50% - 10px);
  border-radius: 15px;
  background-color: var(--color-muted);
  pointer-events: none;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
}
.navbar span:nth-child(3) {
  top: calc(50% + 6px);
}
.navbar ul {
  width: 0;
  overflow: hidden;
  transition: all 0.5s;
  white-space: nowrap;
}

.navbar ul li {
  margin: 0px 15px;
}
.navbar ul li a {
  font-size: 20px;
  font-weight: 700;
  &:hover {
    color: #fb7299;
  }
}

.navbar input:checked ~ ul {
  width: 350px;
}

.navbar input:checked ~ span:nth-child(2) {
  top: calc(50% - 2px);
  transform: rotate(-45deg);
  background-color: #fb7299;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}

.navbar input:checked ~ span:nth-child(3) {
  top: calc(50% - 2px);
  transform: rotate(45deg);
  background-color: #fb7299;
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
</style>
