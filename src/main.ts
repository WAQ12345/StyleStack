import { createApp } from 'vue'
import '@/scss/style.scss'
import App from './App.vue'
import router from '@/router/index'
import $ from 'jquery';


const app = createApp(App)

declare global {
    interface Window {
        $: typeof $;
    }
}


app.use(router)
app.mount('#app')