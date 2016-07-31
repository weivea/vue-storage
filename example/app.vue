<template>
    <h1>test:component-parent</h1>
    <hr>
    <h1 style="text-align: center">请在下面输入框输入内容,然后刷新看看</h1>
    session:sessionStorage
    <form  style="text-align: center">
        <input type="text"  v-model="session.form.a">
        内容:{{session.form.a}}
        <br>
        <input type="text"  v-model="session.form.b">
        内容:{{session.form.b}}
        <br>
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
<script>
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
            this.session = this.$sessionBind(this.session);
            this.storagea = this.$storageBind(this.storagea);
        },
        components:{
            sub:sub
        }

    }
</script>