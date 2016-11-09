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
        <input type="text"  v-model="storage.c">
        内容:{{storage.c}}
        <br>
        <input type="text"  v-model="storage.d">
        内容:{{storage.d}}
        <br>
    </form>
    <hr>

    <div>
        <!--<sub></sub>-->
    </div>
</template>
<script type="text/babel">
//    import sub from './sub.vue'
    export default {
        data:function(){
            return{
                form:{
                    a:'1',
                    b:'2'
                },
                storage:{
                    c:'',
                    d:''
                }

            }
        },
        computed:{

        },
        created:function(){

        }/*,
        components:{
            sub:sub
        }*/

    }
</script>