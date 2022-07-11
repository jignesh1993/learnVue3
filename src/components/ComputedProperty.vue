<template>
<h1>Computed Property</h1>
<h2>{{getResult}}</h2>
<h2>{{getResultMethod()}}</h2>
</template>

<script>
export default {
    name: 'ComputedProperty',
    data() {
        return {
            dollar: 100,
            rupeeVal: 70,
            discount: 10,
        }
    },
    methods: {
        getResultMethod() {
            return (this.dollar * this.rupeeVal) - this.discount;
        }
    },
    computed: {
        getResult() {
            return (this.dollar * this.rupeeVal) - this.discount;
        }
    },
}
</script>

<style scoped>
h1 {
    color: orange;
}
</style>
