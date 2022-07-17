<template>
<h1>SlotHome Component</h1>
<SlotChild><h2>Code Step By Step</h2></SlotChild>
<SlotChild><a href="#">Code Step By Step</a></SlotChild>
</template>
<script>
import SlotChild from "./SlotChild.vue";
export default {
    name: 'SlotHome',
    components: {
        SlotChild
    }
}
</script>
<style scoped>
h1 {
  color: orange;
}
</style>
