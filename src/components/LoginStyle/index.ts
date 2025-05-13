import { defineAsyncComponent } from "vue";

export default defineAsyncComponent(() => import("./SimpleLogin.vue"));