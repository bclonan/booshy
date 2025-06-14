import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/main'
// import { drawDir, docsDir, userDataFile } from './dataFiles/createAppDir' // Commented out - use electron API

const app = createApp(App)
// Commented out global properties - will be handled via electron API
// app.config.globalProperties.$drawDir = drawDir
// app.config.globalProperties.$docsDir = docsDir
// app.config.globalProperties.$userDataFile = userDataFile

app.use(router)
app.use(store)
app.mount('#app')
