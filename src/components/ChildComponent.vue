<template>
<h3>{{name}} from child component</h3>
<h3>{{user.email}}</h3>
<button v-on:click="getData()">call function</button>
<button v-on:click="sendUserName">Send User Name</button>
</template>

<script>
export default {
    name: 'ChildComponent',
    props: {
        name: String,
        user: Object,
        getData: Function,
        getUser: Function
    },
    data() {
        return {
            userName: 'Peter'
        }
    }, 
    methods:{
        sendUserName() {
            this.getUser(this.userName)
        }
    }
}
</script>

<style scoped>

</style>
