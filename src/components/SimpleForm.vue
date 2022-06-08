<template>
<div class="center">
    <h2>Simple Form</h2>
    <p>{{form}}</p>
    <form>
        <label>Email:</label>
        <input type="text" placeholder="Enter Email" v-model="form.email" /> <br /><br />

        <label>Password:</label>
        <input type="password" placeholder="Enter Password" v-model="form.password" /> <br /><br />

        <select v-model="form.country">
            <option disabled value="" selected="selected">Please select country</option>
            <option>India</option>
            <option>China</option>
            <option>USA</option>
        </select> <br /> <br />

        <h3>Technology :</h3>
        <label for="django">Django</label>
        <input type="checkbox" value="django" id="django" v-model="form.technology" />

        <label for="python">python</label>
        <input type="checkbox" value="python" id="python" v-model="form.technology" />
        <br /><br />

        <h3>Gender :</h3>
        <label for="male">Male</label>
        <input type="radio" value="male" id="male" name="gender" v-model="form.gender" />

        <label for="female">Female</label>
        <input type="radio" value="female" id="female" name="gender" v-model="form.gender" />
        <br /><br />

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
                password: '',
                country: '',
                technology: [],
                gender: ''
            }
        }
    },
    methods: {
        login() {
            console.log('<<-- this.form-->> ', this.form);
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
