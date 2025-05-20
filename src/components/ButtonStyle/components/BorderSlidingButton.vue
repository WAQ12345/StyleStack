<template>
    <div class="borderSliding">
        <button class="btn relative">Like</button>
    </div>
</template>
<style lang='scss' scoped>
.borderSliding {
    --bgc: #353b48;
    background-color: var(--bgc);
}

.borderSliding .btn {
    width: 200px;
    height: 60px;
    background: none;
    border: 4px solid;
    color: var(--c);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    margin: 20px;
}

.borderSliding .btn::before,
.borderSliding .btn::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 4px;
    background-color: var(--bgc);
    transform: skewX(30deg);
    transition: 0.4s linear;
}

.borderSliding .btn::before {
    top: -4px;
    left: 10%;
}

.borderSliding .btn::after {
    bottom: -4px;
    right: 10%;
}

.borderSliding .btn:hover::before {
    left: 80%;
}

.borderSliding .btn:hover::after {
    right: 80%;
}

.borderSliding .btn:nth-child(1) {
    --c: #4ad3e2;
}
</style>