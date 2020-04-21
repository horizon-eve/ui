// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App'
import router from './router'
import EventBus from './lib/eventBus.js'
import axios from 'axios'

/** Layouts **/
import Default from './layouts/Default'
import Login from './layouts/Login'
import VueClipboard from 'vue-clipboard2'

Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios

Vue.component('default-layout', Default)
Vue.component('login-layout', Login)
Vue.use(VueClipboard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
