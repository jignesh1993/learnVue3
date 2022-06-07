<template>
<h2>Get Input Value</h2>
<input type="text" placeholder="enter email" v-model="email" /> <br> <br>
<input type="password" placeholder="enter password" v-model="password" /> <br> <br>
<button v-on:click="getData()" type="button">get values</button>
</template>

<script>
export default {
    name: "GetInputValue",
    data() {
        return {
            email: null,
            password: null,
        }
    },
    methods: {
        getData() {
            console.log('<<-- this.email -->>', this.email);
            console.log('<<-- this.password) -->>', this.password);
        }
    }
}
</script>

<style scoped>
h2 {
    color: red;
}
</style>
