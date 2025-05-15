<template>
  <div class="wrapper">
    <div class="input-data">
      <input type="text" required />
      <div class="undeline"></div>
      <label>Your Name</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  outline: none;
  box-sizing: border-box;
}

.wrapper {
  outline: none;
  box-sizing: border-box;
  width: 450px;
  background-color: var(--color-surface);
  padding: 40px;
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-md);
}

.wrapper .input-data {
  position: relative;
  width: 100%;
  height: 40px;
}

.wrapper .input-data input {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid #c0c0c0;
}

/* 输入框获得焦点时 */
.wrapper .input-data input:focus~label,
/* 输入框的值合法时 */
.wrapper .input-data input:valid~label {
  transform: translateY(-25px);
  font-size: 15px;
  color: var(--color-primary);
}

.wrapper .input-data label {
  position: absolute;
  bottom: 10px;
  left: 0px;
  color: #808080;
  pointer-events: none;
  transition: all 0.3s ease;
}

.wrapper .input-data .undeline {
  position: absolute;
  bottom: 0px;
  height: 2px;
  width: 100%;
  background-color: var(--color-primary);
  /* 沿X轴缩小 */
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.wrapper .input-data input:focus ~ .undeline,
.wrapper .input-data input:valid ~ .undeline {
  /* 沿X轴放大 */
  transform: scaleX(1);
}
</style>
