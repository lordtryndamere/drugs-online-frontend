import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/store'
Vue.config.productionTip = false
Vue.use(Vuex)
const localUrl ='http://localhost:8080/v1'
const  stagingUrl =  'https://drugs-online-mysql.herokuapp.com/v1'
axios.defaults.baseURL =  process.env.NODE_ENV === 'production' ? stagingUrl : localUrl  ;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
