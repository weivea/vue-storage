/**
 * Created by weijianli on 16/7/23.
 */

import Vue from 'vue'
import vueStorage from'../index'
import app from './app.vue'

Vue.use(vueStorage,{
  session:{
    form:{
      a:1,
      b:2
    }
  },
  storage:{
    c:3,
    d:5
  }
});

window.appVue =  new Vue({
  el: '#container',
  components: { app }
});




