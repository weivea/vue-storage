<template>
    <h1>test:component-parent</h1>
    <hr>
    <h1 style="text-align: center">请在下面输入框输入内容,然后刷新看看</h1>
    session:sessionStorage
    <form  style="text-align: center">
        <input type="text"  v-model="form.a">
        内容:{{form.a}}
        <br>
        <input type="text"  v-model="form.b">
        内容:{{form.b}}
        <br>
        a:{{a}}
    </form>
    storage:localStorage
    <form  style="text-align: center">
        <input type="text"  v-model="storagea.c">
        内容:{{storagea.c}}
        <br>
        <input type="text"  v-model="storagea.d">
        内容:{{storagea.d}}
        <br>
    </form>
    <hr>

    <div>
        <sub></sub>
    </div>
</template>
<script type="text/babel">
    import sub from './sub.vue'
    export default {
        data:function(){
            var self = this;
            var ar = {
                ccc:123,
                ddd:234
            };
            return{
                form:this.$session.form,
                    ...ar,
                a:(()=>{
                    var flag = false;
                    setTimeout(function(){
                        var dsp = Object.getOwnPropertyDescriptor(self.$data,'a')
                        var s1 = dsp.set;
                        dsp.set=function(x){
                            s1(x);
                            if(!flag){
                                flag = true;
                                self.$session.form.a = x;
                            }else{
                                flag = false;
                            }

                        }
                        Object.defineProperty(self.$data,'a',dsp);
                        var dsp2 = Object.getOwnPropertyDescriptor(self.$session.form,'a')
                        var s2 = dsp2.set;
                        dsp2.set=function(x){
                            s2(x);
                            if(!flag){
                                flag = true;
                                self.$data.a = x;
                            }else{
                                flag = false;
                            }
                        };
                        Object.defineProperty(self.$session.form,'a',dsp2);
                    },0)
//                    Object.defineProperty(self.$data,'a',Object.getOwnPropertyDescriptor(this.$session.form,'a'));

                    return this.$session.form.a;
                })()
            }
        },
        computed:{
//            session:function(){
//                return this.$session;
//            },
            storagea: function () {
                return this.$storage
            }
        },
        created:function(){
           // console.log(this.$session,this.$storage)
            var self = this;
            setTimeout(function(){
                self.form.a = 2000;
               // console.log(self.$data.a)

            },3000)
            setTimeout(function(){
                self.a = 5000;
                // console.log(self.$data.a)
            },5000)
        },
        components:{
            sub:sub
        }

    }
</script>