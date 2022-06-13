import { createApp } from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router/index.js'
import {store} from './store/index'

createApp(App).use(Vuex).use(router).use(store).mount('#app')
