import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import router from './router'
import axios from 'axios'
import './assets/styles/conf.scss'
import VueAxios from 'vue-axios'
import VueRellax from 'vue-rellax'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueAxios, axios)
Vue.use(VueRellax)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
