/**
 * Created by weijianli on 16/7/23.
 */
import storage from './lib/storage'
let __Vue;
const saveType = {
  localStorage:"localStorage",
  sessionStorage:"sessionStorage"
};
class twig {
  constructor(op,co){
    this.opErrStr = '[twig] format of "option" like {"key":"xxxx",dataFun:function(data){},saveType:"xxx"} | [{"key":"xxxx",dataFun:function(data){},saveType:"xxx"},{"key":"xxxx",dataFun:function(data){},saveType:"xxx"}...]';
    this.prex = '_twig_';
    this.co = co;
    
    this.watchList = [];
    this.vm = new __Vue();
    var st = storage();
    this.sessionStorage = st.sessionStorage;
    this.localStorage = st.localStorage;


    //处理配置参数op
    let errFlag = false;
    if(Object.prototype.toString.call(op) == "[object Object]"){
      this.explainOption(op);
    }else if(Object.prototype.toString.call(op) == "[object Array]"){
      op.forEach((item)=>{
        if(Object.prototype.toString.call(item) == "[object Object]"){
          this.explainOption(item);
        }else{
          errFlag = true;
        }
      })
    }else{
      errFlag = true;
    }
    if(errFlag){
      console.error(this.opErrStr);
    }
  }

  //处理配置参数op
  explainOption(opItem){
    if(typeof opItem.key != 'string' || typeof opItem.dataFun != 'function' || typeof opItem.saveType != 'string'){
      console.error(this.opErrStr);
      return;
    }
    let tmpD;
    if(opItem.saveType == saveType.localStorage || opItem.saveType == saveType.sessionStorage){
      tmpD = this[opItem.saveType].getItem(this.prex+opItem.key);
    }
    var dataFun;
    if(Object.prototype.toString.call(opItem.dataFun) == "[object GeneratorFunction]"){
      if(this.co){
        dataFun = this.co.wrap(opItem.dataFun);
      }else{
        throw new Error("[twig] GeneratorFunction needs 'co' mobule")
      }
    }else{
      dataFun = opItem.dataFun;
    }
    var re = dataFun(tmpD);
    if(Object.prototype.toString.call(re) == "[object Promise]"){
      re.then((data) =>{
        this.initData(opItem.key,data);
      }).catch((err) => {
        console.error(err);
      })
    }else{
      console.log(re);
      this.initData(opItem.key,re);
    }
  }

  initData(key,data){

  }
}



function install(_Vue,option,co) {
  if(__Vue){
    console.error(
      '[twig] already installed. Vue.use(twig) should be called only once.'
    );
    return;
  }
  __Vue = _Vue;

  let twiger = new twig(option,co);

  Object.defineProperty( __Vue.prototype,'$twig',{
    configurable:false,
    enumerable:true,
    get(){
      return twiger.vm;
    }
  });
}


if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueStorage);
}
export default {
  install,
  saveType
}