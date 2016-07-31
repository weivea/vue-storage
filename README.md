# vue-storage
***

基于sessionStorage,localStorage的vue插件,让本地存储与$data数据关联,
目的是让大家在vue上更方便的使用本地存储.

## usage

### install
```
npm install vue-storage

```

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