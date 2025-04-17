import {createApp} from 'vue'
import "normalize.css"
import '@assets/style.scss'
import App from './pages/App.vue'
import {createPinia} from "pinia";


createApp(App).use(createPinia()).mount('#app')