import { createApp } from 'vue'

// Import Tailwind CSS and Custome CSS file
import './tailwind/app.css'
import './tailwind/custom.css'

// Import Root Component
import App from './App.vue'

// Import Router
import router from './router/index'

// Import Pinia
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')

