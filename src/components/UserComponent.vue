<template>
<div class="user">
    <h3>{{data.name}}</h3>
    <h3>{{data.email}}</h3>
    <button v-on:click="getAlert(data)">Alert name</button>
</div>
</template>

<script>
export default {
    name: 'UserComponent',
    props: {
        data: Object,
        getAlert: Function
    }
}
</script>

<style scoped>
.user {
    background-color: skyblue;
    padding: 10px;
    border-bottom: 5px solid;
    margin-bottom: 20px;
}
</style>
