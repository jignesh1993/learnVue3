<template>
    <h1>Life Cycle Method {{name}}</h1>
</template>

<script>
export default {
    name: 'LifeCycleMethComponent',
    data(){
        return{
            name: 'John'
        }
    },
    beforeCreate() {
        this.name = 'Jane1'
        alert('Before Create')
    },
    created(){
        this.name = 'Jane2'
        alert('After Created')
    }
}
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
