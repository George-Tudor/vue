import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

Vue.use(VueRouter)

import App from './App.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})
