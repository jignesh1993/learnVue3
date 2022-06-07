<template>
<!-- <h1>{{msg}}</h1> -->
<h3 v-on:mousemove="getConsole()">Name1 : {{getName("John Doe")}}</h3>
<h3>Name2 : {{getName("Jane Doe")}}</h3>
<h3>Name3 : {{getData().name}}</h3>
<h3>Email1 : {{getData().email}}</h3>
<h3>Email2 : {{email}}</h3>
<button v-on:click="test()">Click Me</button>
<button v-on:dblclick="test1('Button double clicked')">Click Me</button><br/><br/>
<input type="text" v-model="count"/>
<h3>{{count}}</h3>
</template>

<script>
export default {
    name: "HomeComponent",
    data() {
        return {
            email: "my12@test.com",
            count: 111
        }
    },
    methods: {
        getName(name) {
            return name
        },
        getData() {
            return {
                name: 'Rocky',
                email: this.email
            }
        },
        test() {
            this.count = this.count+1
        },
        test1(data) {
            alert(data)
        },
        getConsole() {
            console.log('mouse hover');
        }
    },
    props: {
        msg: String,
    },
};
</script>

<style scoped>
h1 {
    color: orange
}
</style>
