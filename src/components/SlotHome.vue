<template>
<h1>SlotHome Component</h1>
<SlotChild>
    <template v-slot:header>
        <h2>Code Step By Step</h2>
    </template>
    <template v-slot:main>
      <p>A vue js product</p>
    </template>
    <template v-slot:footer>
      <h2>Footer</h2>
    </template>
    <button>Buy Now</button>
</SlotChild>
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
