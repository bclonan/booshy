import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { installStoreBridge } from './storeBridge'
import { drawDir, docsDir, userDataFile } from './dataFiles/createAppDir'

const app = createApp(App)
app.config.globalProperties.$drawDir = drawDir
app.config.globalProperties.$docsDir = docsDir
app.config.globalProperties.$userDataFile = userDataFile

const pinia = createPinia()
app.use(router)
app.use(pinia)
installStoreBridge(app)
app.mount('#app')
