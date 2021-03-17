import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import './assets/styles/conf.scss'
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
