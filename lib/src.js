/**
 * Created by weijianli on 16/7/24.
 */
var timer1,timer2;
var session = proxyObj({},1);
var storage = proxyObj({},2);
if(sessionStorage.__vue_session){
  session = Object.assign(session,JSON.parse(sessionStorage.__vue_session));
}
if(localStorage.__vue_storage) {
  storage = Object.assign(storage,JSON.parse(localStorage.__vue_storage));
}
session.$saveData=()=>{
  saveDate(1);
};
storage.$saveData=()=>{
  saveDate(2);
};
function proxyObj(obj,type) {
  return new Proxy(obj, {
    set (target, key, value, receiver) {
      if(Object.prototype.toString.call(value) == "[object Object]"){
        value =  Object.assign(proxyObj({},type),value);
      }
      var re = Reflect.set(target, key, value, receiver);
      saveDate(type);
      return re;
    }
  })
}
function saveDate(type) {
  if(type == 1){
    if(!timer1){
      timer1 = setTimeout(function () {
        sessionStorage.__vue_session = JSON.stringify(session);
        timer1 = undefined;
      },0);
    }
  }else if(type == 2){
    if(!timer2){
      timer2 = setTimeout(function () {
        localStorage.__vue_storage = JSON.stringify(storage);
        timer2 = undefined;
      },0);
    }
  }
}
export {session,storage}


