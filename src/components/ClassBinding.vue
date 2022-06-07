<template>
<h3>Class Binding</h3>
<h3 class="otherClass" :class="{green:colorfull, err:true}">Class Binding Component</h3>
<button v-on:click="colorfull=!colorfull">Apply Style</button>
</template>

<script>
export default {
    name: 'ClassBinding',
    data() {
        return {
            colorfull: true
        }
    }
}
</script>

<style scoped>
.green {
    background-color: green;
    width: 30%;
    padding: 10px;
}
.err{
    color: red;
}
</style>
