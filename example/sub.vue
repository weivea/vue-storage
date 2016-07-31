<template>
    <h1>test:component-children</h1>
    <hr>
    <h1 style="text-align: center">请在下面输入框输入内容,然后刷新看看</h1>
    <form  style="text-align: center">
        <input type="text"  v-model="session.form.a">
        内容:{{session.form.a}}
        <br>
        <input type="text"  v-model="session.form.b">
        内容:{{session.form.b}}
        <br>
    </form>
    <hr>
    主动存储:<br>
    <button @click="addOne">点我</button><br>
    <p>_<span v-for="item in session.list" track-by="$index">{{item}}_</span></p>

</template>
<script>
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
</script>