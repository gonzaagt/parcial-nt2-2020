<template>
  <div id="app">
    <Tareas/>
    
    <br>

    <ListaTareas/>

     <br>

     <Respuestas/>

  </div>
    
</template>

<script>

import Tareas from './components/Tareas.vue'
import ListaTareas from './components/ListaTareas.vue'
import Respuestas from './components/Respuestas.vue'


export default {
  name: 'App',
  components: {
    Tareas,
    ListaTareas,
    Respuestas
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
