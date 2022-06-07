<template>
<h3>{{name}} from child component</h3>
<h3>{{user.email}}</h3>
<button v-on:click="getData()">call function</button>
</template>

<script>
export default {
    name: 'ChildComponent',
    props: {
        name: String,
        user: Object,
        getData: Function
    }
}
</script>

<style scoped>

</style>
