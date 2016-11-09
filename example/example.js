/**
 * Created by weijianli on 16/7/23.
 */

import Vue from 'vue'
import twig from'../index'
import app from './app.vue'
import co from 'co'

Vue.use(twig,{
  key:'dataTree',
  saveType:twig.saveType.sessionStorage,
  dataFun: function (data) {

    // var re = yield thunk();
    // return re;
    return  {
      aa:'1',
      bb:'2',
      cc:'2'
    }
  }
},co);

function thunk() {
  return function (cb) {
    setTimeout(function () {
      cb(null,{
        aa:'1',
        bb:'2',
        cc:'2'
      });
    },500)
  }
}

function PromiseFun() {
  return new Promise(function (rs,rj) {
    setTimeout(function () {
      rs({
        aa:'1',
        bb:'2',
        cc:'2'
      });
    },500)
  })
}

window.appVue =  new Vue({
  el: '#container',
  components: { app }
});




