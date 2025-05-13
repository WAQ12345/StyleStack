import { createRouter, createWebHistory } from 'vue-router'
// import ButtonStyle from '@/components/ButtonStyle'
// import InputStyle from '@/views/InputCase.vue'
import CardStyle from '@/components/CardStyle'
// import CardDetail from '@/components/CardDetail.vue'
// import LoadingStyle from '@/views/LoadingCase.vue'
import LoginStyle from '@/components/LoginStyle'
// import SliderStyle from '@/components/SliderStyle.vue'
import NavbarStyle from '@/components/NavbarStyle'
// import AnimationStyle from '@/components/AnimationStyle.vue'
// import SwitchStyle from '@/components/SwitchStyle.vue'
// import WebStyle from '@/components/WebStyle.vue'

const routes = [
  // { path: '/button', component: ButtonStyle },
  // { path: '/input', component: InputStyle },
  { path: '/card', component: CardStyle },
  // { path: '/loading', component: LoadingStyle },
  { path: '/login', component: LoginStyle },
  // { path: '/slider', component: SliderStyle },
  { path: '/navbar', component: NavbarStyle },
  // { path: '/animation', component: AnimationStyle },
  // { path: '/switch', component: SwitchStyle },
  // { path: '/web', component: WebStyle },
  // { path: '/', redirect: '/web' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router