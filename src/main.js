import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/main'
//DB
import { drawDir, docsDir, userDataFile } from './dataFiles/createAppDir'
Vue.prototype.$drawDir = drawDir;
Vue.prototype.$docsDir = docsDir;
Vue.prototype.$userDataFile = userDataFile;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
