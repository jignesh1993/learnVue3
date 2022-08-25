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
    },
    beforeMount() {
        console.log('beforeMount ==>>', this.$el);
    },
    mounted() {
        console.log('Mounted ==>>', this.$el);
    }
}
</script>

<style scoped>
h1 {
  color: orange;
}
</style>
