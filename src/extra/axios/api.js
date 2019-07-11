import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'

var apiRequest = axios.create({
  baseURL: process.env.VUE_APP_API_SERVER,
  timeout: 10000,
  headers: {'X-Requested-With': 'XMLHttpRequest'}
});

const token = VueCookie.get('token');
if (token) {
  apiRequest.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export default apiRequest
