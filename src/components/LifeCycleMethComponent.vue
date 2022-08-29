<template>
<h1>Life Cycle Method {{ name }}</h1>
<h1>beforeUpdate and updated</h1>
<h1 ref="count">{{ counter }}</h1>
<button v-on:click="counter = counter + 1">Update Counter</button>

<br /><br /><br />
<button v-on:click="show=!show">toggle</button>
<UserComponent2 v-if="show" />
</template>

<script>
import UserComponent2 from "./UserComponent2";
export default {
    name: "LifeCycleMethComponent",
    components : {
        UserComponent2,
    },
    data() {
        return {
            name: "John",
            counter: 0,
            show: true,
        };
    },
    beforeCreate() {
        this.name = "Jane1";
        alert("Before Create");
    },
    created() {
        this.name = "Jane2";
        alert("After Created");
    },
    beforeMount() {
        // console.log('beforeMount ==>>', this.$el);
    },
    mounted() {
        // console.log('Mounted ==>>', this.$el);
    },
    beforeUpdate() {
        console.log("beforeUpdate ==>>", this.$refs["count"].textContent);
    },
    updated() {
        console.log("afterUpdate ==>>", this.$refs["count"].textContent);
    },
    beforeUnmount(){
        console.log('beforeUnmount ==>>');
    },
    unmounted() {
        console.log('unmounted ==>>');
    }
};
</script>

<style scoped>
h1 {
    color: orange;
}
</style>
