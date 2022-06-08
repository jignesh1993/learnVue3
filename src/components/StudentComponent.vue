<template>
<h2>Student Name is : {{name}}</h2>    
</template>

<script>
export default {
    name: 'StudentComponent',
    props:{
        name: String
    }
}
</script>

<style scoped>
h2{
    color: red;
}
</style>
