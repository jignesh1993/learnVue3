<template>
<h3>For Loop on Array</h3>
<ul>
    <li v-for="item in technology" :key="item">{{item}}</li>
</ul>
<h3>For Loop on Array with Objects</h3>
<ul>
    <li v-for="item in user" :key="item.email">
        Name is : {{item.name}} and Email is : {{item.email}}.
    </li>
</ul>
</template>

<script>
export default {
    name: "ForLoop",
    data() {
        return {
            technology: ['java', 'php', 'node', 'html'],
            user: [{
                    name: 'jignesh',
                    email: 'jignesh@test.com'
                }, {
                    name: 'john',
                    email: 'john@test.com'
                },
                {
                    name: 'russel',
                    email: 'russel@test.com'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
