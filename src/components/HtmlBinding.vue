<template>
<h3>Html Binding</h3>
<h4>{{text}}</h4>
<div v-html="tag"></div>
<div v-html="tag1"></div>
</template>

<script>
export default {
    name: 'HtmlBinding',
    data() {
        return {
            text: 'Hello World',
            tag: '<p>Vue tutorial</p>',
            tag1: '<p>video no 17</p>'
        }
    }
}
</script>

<style scoped>

</style>
