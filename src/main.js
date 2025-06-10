import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/main'
import { drawDir, docsDir, userDataFile } from './dataFiles/createAppDir'

const app = createApp(App)
app.config.globalProperties.$drawDir = drawDir
app.config.globalProperties.$docsDir = docsDir
app.config.globalProperties.$userDataFile = userDataFile

app.use(router)
app.use(store)
app.mount('#app')
