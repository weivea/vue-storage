/**
 * Created by weijianli on 16/7/23.
 */
import {storage,session} from './lib/src';
function vueStorage(Vue) {
  Object.defineProperties(Vue.prototype, {
    $storageBind: {
      get() {
        var property = 'vue'+this._uid;
        return function (data) {
          if(!data){
            storage[property] = {};return;
          }
          if(Object.prototype.toString.call(data) != "[object Object]"){
            throw new Error('vue-storage:$storageBind(data) needs data as like as [object Object]!!');
          }
          if(!storage[property]){
            storage[property] = {};
          }
          data = Object.assign(data,storage[property]);
          data = Object.assign(storage[property],data);
          data.$saveData = storage.$saveData;
          return data;
        };
      }
    },
    $sessionBind: {
      get() {
        var property = 'vue'+this._uid;
        return function (data) {
          if(!data){
            session[property] = {};return;
          }
          if(Object.prototype.toString.call(data) != "[object Object]"){
            throw new Error('vue-storage:$sessionBind(data) needs data as like as [object Object]!!');
          }
          if(!session[property]){
            session[property] = {};
          }
          data = Object.assign(data,session[property]);
          data = Object.assign(session[property],data);
          data.$saveData = session.$saveData;
          return data;
        };
      }
    }
  });
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueStorage);
}
export default vueStorage