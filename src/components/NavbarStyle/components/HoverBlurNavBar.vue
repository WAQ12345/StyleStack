<template>
    <div>
        <ul class="flex">
            <li v-for="item in ['Home', 'About', 'Serve', 'Case']" :key="item">
                <a href="#" class="nav-link text-md">{{ item }}</a>
            </li>
        </ul>
    </div>
</template>
<style lang='scss' scoped>
ul li {
    transition: 0.5s;
}

ul li a {
    display: block;
    text-align: center;
    margin: 0 30px;
    font-size: 16px;
}

ul:hover li {
    opacity: 0.2;
    filter: blur(2px);
}

ul li:hover {
    opacity: 1;
    filter: blur(0px);
}
</style>