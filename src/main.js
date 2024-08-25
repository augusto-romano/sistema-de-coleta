//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// importanto recursos necessarios
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue3-toastify/dist/index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
