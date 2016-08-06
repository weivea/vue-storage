# vue-storage
***

##不知道为什么从20160805号开始,Proxy在chrome上,不以json对象的形式表现了,所以,Proxy在交由vue的data处理是报错,该插件,暂时不能使用了~~~

***


基于sessionStorage,localStorage的vue插件,让本地存储与$data数据关联,
目的是让大家在vue上更方便的使用本地存储.

## usage

### expample

运行:`npm install; npm run build`

[在线预览](https://weivea.github.io/vue-storage/)

### install
```
npm install vue-storage-weivea

```
话说现npm也需要namespace了呢

### use

root.js

```
import Vue from 'vue'
import vueStorage from'./vue-storage/index'
import app from './app.vue'

Vue.use(vueStorage);

window.appVue =  new Vue({
  el: '#container',
  components: { app }
});
```

app.vue

```
import sub from './sub.vue'
export default {
        data(){
            return{
                session:{
                    form:{
                        a:1,
                        b:2
                    }
                },
                storagea:{
                    c:3,
                    d:5
                }
            }
        },
        created(){
            //sessionStorage
            this.session = this.$sessionBind(this.session);
            //localStorage
            this.storagea = this.$storageBind(this.storagea);
        },
        components:{
            sub:sub
        }
    }
```

sub.vue

```
export default {
        data(){
            return{
                session:{
                    form:{
                        a:null,
                        b:null
                    },

                    list:[]
                }
            }
        },
        created(){
            this.session = this.$sessionBind(this.session);
        },
        methods:{
            addOne:function () {
                this.session.list.push(1);
                this.session.$saveData();//主动save
            }
        }
    }
````

## desc

- `this.$sessionBind(this.session)`入参必须是json风格的对象;
- 每个component只能bind一个对象;
- 这是一把双刃剑,滥用会影响应用性能,所以请用在必要数据上边,最好一个应用只在$root层面使用.