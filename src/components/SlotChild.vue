<template>
<h1>Slot Child Component</h1>
<slot></slot>
</template>
<script>
export default {
    name: 'SlotChild',
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
