<template>
<div class="center">
    <h2>Simple Form</h2>
    <form>
        <label>Email:</label>
        <input type="text" placeholder="Enter Email" v-model="form.email" /> <br /><br />

        <label>Password:</label>
        <input type="password" placeholder="Enter Password" v-model="form.password" /> <br /><br />

        <button type="button" v-on:click="login">Login</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'SimpleForm',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            console.log('<<-- this.form.email -->> ', this.form.email);
            console.log('<<-- this.form.password -->>', this.form.password);
        }
    }
}
</script>

<style scoped>
div {
    background-color: lightblue;
}

.center {
    text-align: center;
}
</style>
