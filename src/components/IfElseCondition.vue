<template>
<h3 v-if="show">If conditions</h3>
<h3 v-else>Else conditions</h3>
<button v-on:click="show=!show">toggle</button>
</template>

<script>
export default {
    name: "IfElseCondition",
    data() {
        return {
            show: false
        }
    }
}
</script>

<style scoped>

</style>
