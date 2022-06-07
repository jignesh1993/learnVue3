<template>
<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<HelloWorld msg="Welcome to Your Vue.js App" msg1="Woo you passed prop" />
<Home msg="Home Component!!" />
<GetInputValue />
<GetChkboxRadioValue />
<IfElseCondition />
<ForLoop />
<ChildComponent name="jignesh patel" :user="user" :getData="getData" />
<ul>
    <li v-for="item in users" :key="item.name">
        <UserComponent :data="item" :getAlert="getAlert" />
    </li>
</ul>
<HtmlBinding />
<ClassBinding />
<br /><br /><br />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import GetInputValue from './components/GetInputValue.vue';
import GetChkboxRadioValue from './components/GetChkboxRadioValue.vue';
'';
import IfElseCondition from './components/IfElseCondition.vue';
import ForLoop from './components/ForLoop.vue';
import ChildComponent from './components/ChildComponent.vue';
import UserComponent from './components/UserComponent.vue';
import HtmlBinding from './components/HtmlBinding.vue';
import ClassBinding from './components/ClassBinding.vue';


export default {
    name: 'App',
    components: {
        HelloWorld,
        Home,
        GetInputValue,
        GetChkboxRadioValue,
        IfElseCondition,
        ForLoop,
        ChildComponent,
        UserComponent,
        HtmlBinding,
        ClassBinding
    },
    data() {
        return {
            user: {
                name: 'peter',
                email: 'peter@test.com'
            },
            users: [{
                name: 'anil',
                email: 'anil@test.com'
            }, {
                name: 'sam',
                email: 'sam@test.com'
            }, {
                name: 'bruce',
                email: 'bruce@test.com'
            }, {
                name: 'najee',
                email: 'najee@test.com'
            }]
        }
    },
    methods: {
        getData() {
            console.log('<<-- Parent function called -->>');
        },
        getAlert(data){
            alert(`Hello ${data.name}` )
        }
    }
}
</script>

<!-- 

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style> -->
