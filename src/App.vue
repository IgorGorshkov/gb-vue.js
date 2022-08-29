<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CalcComponent/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CalcComponent from "@/components/CalcComponent";

export default {
  name: 'App',
  components: {
    HelloWorld,
    CalcComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
