/**
 * Created by weijianli on 16/7/23.
 */

import Vue from 'vue'
import vueStorage from'../index'
import app from './app.vue'

Vue.use(vueStorage);

window.appVue =  new Vue({
  el: '#container',
  components: { app }
});




