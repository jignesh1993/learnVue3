<template>
<h1>{{name}}'s Profile Page</h1>
</template>

    
    
<script>
    import { useRoute } from 'vue-router'
export default {
    name: 'ProfileComponent',
    data() {
        return {
            name: '',
        }
    },
    mounted() {
        const route = useRoute();
        this.name = route.params.name;
    },
}
</script>
    
    
<style scoped>
    </style>
