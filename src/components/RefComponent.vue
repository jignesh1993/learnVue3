<template>
<h2>Ref in vuejs</h2>
<input type="text" placeholder="Ref in vuejs" ref="input" /> &nbsp;
<button v-on:click="getData">Click Me</button>
</template>

<script>
export default {
    name: 'RefComponent',
    methods: {
        getData() {
            this.$refs.input.focus()
            let val = ''
            val = this.$refs.input.value
            console.log('<<-- val -->> ', val);
            this.$refs.input.style.color = 'blue'
        }
    }
}
</script>

<style scoped>

</style>
