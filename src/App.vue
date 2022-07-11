<template>
<!-- <img alt="Vue logo" src="./assets/logo.png"> -->
<HelloWorld msg="Welcome to Your Vue.js App" msg1="Woo you passed prop" />
<Home msg="Home Component!!" />
<GetInputValue />
<GetChkboxRadioValue />
<IfElseCondition />
<ForLoop />
<h3>Prop from child user is : {{childUser}}</h3>
<ChildComponent name="jignesh patel" :user="user" :getData="getData" :getUser="getUserName" />
<ul>
    <li v-for="item in users" :key="item.name">
        <UserComponent :data="item" :getAlert="getAlert" />
    </li>
</ul>
<HtmlBinding />
<ClassBinding />

<!-- Props with Example -->
<StudentComponent :name="name" />
<TeacherComponent name="peter" />

<!-- Ref in vuejs -->
<RefComponent />

<!-- Simple Form -->
<SimpleForm />

<br />

<FormModifiers />

<br />
<NonPropsData data="Some data" id="user-cmp" />

<br />
<ComputedProperty />

<br /><br /><br />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import GetInputValue from './components/GetInputValue.vue';
import GetChkboxRadioValue from './components/GetChkboxRadioValue.vue';
import IfElseCondition from './components/IfElseCondition.vue';
import ForLoop from './components/ForLoop.vue';
import ChildComponent from './components/ChildComponent.vue';
import UserComponent from './components/UserComponent.vue';
import HtmlBinding from './components/HtmlBinding.vue';
import ClassBinding from './components/ClassBinding.vue';
import StudentComponent from './components/StudentComponent.vue';
import TeacherComponent from './components/TeacherComponent.vue'
import RefComponent from './components/RefComponent.vue';
import SimpleForm from './components/SimpleForm.vue';
import FormModifiers from './components/FormModifiers.vue';
import NonPropsData from './components/NonPropsData.vue';
import ComputedProperty from './components/ComputedProperty.vue';

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
        ClassBinding,
        StudentComponent,
        TeacherComponent,
        RefComponent,
        SimpleForm,
        FormModifiers,
        NonPropsData,
        ComputedProperty
    },
    data() {
        return {
            name: 'Bruce',
            childUser: '',
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
        getAlert(data) {
            alert(`Hello ${data.name}`)
        },
        // getUserName() for getting prop from child to parent component
        getUserName(name) {
            this.childUser = name
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
