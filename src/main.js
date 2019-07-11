// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'

import '@/extra/axios'


import Vue from 'vue'
import Notify from 'vue2-notify'
import VueCookie from 'vue-cookie'
import BootstrapVue from 'bootstrap-vue'


import App from './App'
import router from './router'


// cssVars()

Vue.use(Notify)
Vue.use(BootstrapVue)
Vue.use(VueCookie)

// use lodash
window._ = require('lodash');
// use jquery
window.$ = window.jQuery = require('jquery');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
