<template>
<h2>Get Checkbox & Radio Button values</h2>
<h3>Technology</h3>
<label for="java">Java</label>
<input type="checkbox" value="java" id="java" v-model="technology" />

<label for="php">Php</label>
<input type="checkbox" value="php" id="php" v-model="technology" />

<label for="node">Node</label>
<input type="checkbox" value="node" id="node" v-model="technology" />

<br /><br />

<h3>Who I am?</h3>

<label for="student">Student</label>
<input type="radio" value="student" id="student" name="who" v-model="who" />

<label for="developer">Developer</label>
<input type="radio" value="developer" id="developer" name="who" v-model="who" />

<br /><br />
<p>Selected Technology : {{technology}}</p>
<p>Who I am : {{who}}</p>
</template>

<script>
export default {
    name: "GetCheckboxRadioValue",
    data() {
        return {
            technology: [],
            who: null
        }
    }
}
</script>

<style scoped>
h2 {
    color: red;
}
</style>
