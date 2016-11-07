<template>
    <h1>test:component-children</h1>
    <hr>
    <h1 style="text-align: center">请在下面输入框输入内容,然后刷新看看</h1>
    <form  style="text-align: center">
        <input type="text"  v-model="form.a">
        内容:{{form.a}}
        <br>
        <input type="text"  v-model="form.b">
        内容:{{form.b}}
        <br>
    </form>
    <hr>

</template>
<script type="text/babel">
    export default {
        data:function(){
            return{
                form:this.$session.form
            }
        },
        methods:{
            addOne:function() {

            }
        }
    }
</script>