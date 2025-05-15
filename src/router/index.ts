import { createRouter, createWebHistory } from "vue-router";
import InputStyle from "@/components/InputStyle";
import CardStyle from "@/components/CardStyle";
// import LoadingStyle from '@/views/LoadingCase.vue'
import LoginStyle from "@/components/LoginStyle";
// import SliderStyle from '@/components/SliderStyle.vue'
// import AnimationStyle from '@/components/AnimationStyle.vue'
// import SwitchStyle from '@/components/SwitchStyle.vue'
// import WebStyle from '@/components/WebStyle.vue'

const routes = [
  {
    path: "/button",
    component: () => import("@/components/ButtonStyle/ButtonStyle.vue"),
  },
  { path: "/input", component: InputStyle },
  { path: "/card", component: CardStyle },
  { path: '/loading', component: ()  => import('@/components/LoadingStyle/LoadingStyle.vue') },
  { path: "/login", component: LoginStyle },
  // { path: '/slider', component: SliderStyle },
  {
    path: "/navbar",
    component: () => import("@/components/NavbarStyle/NavbarStyle.vue"),
  },
  // { path: '/animation', component: AnimationStyle },
  // { path: '/switch', component: SwitchStyle },
  // { path: '/web', component: WebStyle },
  // { path: '/', redirect: '/web' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
