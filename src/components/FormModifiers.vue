<template>
<h1>Form Modifiers</h1>
<input type="number" v-model.number="data" />
<h2>Data is: {{typeof(data)}} </h2>
</template>

<script>
export default {
    name: "FormModifiers",
    data() {
        return {
            data: ''
        }
    }
}
</script>

<style scoped>
h1 {
    color: orange;
}
</style>
