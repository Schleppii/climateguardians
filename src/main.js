// Plugins
import { registerPlugins } from '@/plugins'
import router from '@/router/index.js'

// Components
import App from './Main.vue'

// Composables
import { createApp } from 'vue'

// CSS
import "@/assets/custom.css"

const app = createApp(App)
app.use(router)

registerPlugins(app)

app.mount('#app')
