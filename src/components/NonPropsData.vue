<template>
<div>
    <h1>Non Props Data</h1>
    <h2>Clayton</h2>
    <h2>Damien</h2>
    <h2 v-bind="$attrs">Najee</h2>
    <h2>{{data}}</h2>
</div>
</template>

<script>
export default {
    name: "NonPropsData",
    inheritAttrs: false,
    props: {
        data: String
    }
}
</script>

<style scoped>
h1 {
    color: orange;
}
</style>
