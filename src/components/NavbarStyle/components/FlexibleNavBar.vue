<script lang="ts" setup>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faComment,
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faHome, faComment, faEnvelope, faHeart, faUser);
</script>

<template>
  <div class="wrapper">
    <nav>
      <input type="radio" name="tab" id="home" checked />
      <input type="radio" name="tab" id="comment" />
      <input type="radio" name="tab" id="envelope" />
      <input type="radio" name="tab" id="heart" />
      <input type="radio" name="tab" id="user" />
      <label for="home" class="home">
        <a href="javascript:;">
          <FontAwesomeIcon :icon="faHome" />
          <span>HOME</span>
        </a>
      </label>
      <label for="comment" class="comment">
        <a href="javascript:;">
          <FontAwesomeIcon :icon="faComment" />
          <span>COMMENT</span>
        </a>
      </label>
      <label for="envelope" class="envelope">
        <a href="javascript:;">
          <FontAwesomeIcon :icon="faEnvelope" />
          <span>ENVELOPE</span>
        </a>
      </label>
      <label for="heart" class="heart">
        <a href="javascript:;">
          <FontAwesomeIcon :icon="faHeart" />
          <span>HEART</span>
        </a>
      </label>
      <label for="user" class="user">
        <a href="javascript:;">
          <FontAwesomeIcon :icon="faUser" />
          <span>USER</span>
        </a>
      </label>
      <div class="tab"></div>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  width: 42vw;
  height: 40px;
  line-height: 40px;
  border-radius: var(--radius-lg);
}

.wrapper nav {
  @extend .flex;
  position: relative;
  height: 100%;
}

.wrapper nav label {
  position: relative;
  z-index: 1;
  @extend .flex;
  @extend .flex-center;
  flex: 1 0 20%;
  min-width: 0;
  @extend .cursor-pointer;
}

.wrapper nav label a {
  @extend .flex-center-all;
  position: relative;
  z-index: -1;
  color: var(--color-text);
  font-size: var(--text-sm);
  font-weight: 500;

  svg {
    margin-bottom: 0;
    margin-right: var(--space-2);
    font-size: var(--text-lg);
  }
}

.wrapper nav label a i {
  font-size: 25px;
  margin: 0px 7px;
}

.wrapper nav input {
  display: none;
}

.wrapper nav .tab {
  position: absolute;
  height: 100%;
  width: 20%;
  left: 0px;
  bottom: 0px;
  background: linear-gradient(to right, #f09819, #ff5858);
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &::after {
    content: '';
    @extend .absolute;
    bottom: calc(-1 * var(--space-3));
    left: 50%;
    width: 60%;
    height: 3px;
    background: var(--color-surface);
    border-radius: var(--radius-sm);
    transform: translateX(-50%);
    opacity: 0.2;
  }
}

.wrapper nav #home:checked~label.home a,
.wrapper nav #comment:checked~label.comment a,
.wrapper nav #envelope:checked~label.envelope a,
.wrapper nav #heart:checked~label.heart a,
.wrapper nav #user:checked~label.user a {
  color: var(--color-surface) !important;
  transition: all 0.6s;
}

.wrapper nav #comment:checked~.tab {
  left: 20%;
}

.wrapper nav #envelope:checked~.tab {
  left: 40%;
}

.wrapper nav #heart:checked~.tab {
  left: 60%;
}

.wrapper nav #user:checked~.tab {
  left: 80%;
}
</style>
