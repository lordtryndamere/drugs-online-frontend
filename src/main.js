import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/store'
Vue.config.productionTip = false
Vue.use(Vuex)
axios.defaults.baseURL = ' https://drugs-online-api.herokuapp.com/API'

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
