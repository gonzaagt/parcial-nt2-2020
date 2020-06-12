<template >
    <section class="src-components-ListaTareas">
    <div class="jumbotron mt-3">
      <table class="table">
        <tr class="bg-success text-white">
          <th>Id</th>
          <th>Fecha creacion</th>
          <th>Nombre</th>
          <th>Mail</th>
          <th>Fecha creacion</th>
        </tr>

        <tr
          class="bg-info text-white"
          v-for="(tarea,index) in tareas"
          :key="index"
        >
          <td>{{tarea.id}}</td>
          <td>{{ tarea.tarea }}</td>
          <td>{{ tarea.nombre |pasarMinuscula | pasarPrimerLetraMayus }}</td>
          <td>{{ tarea.email }}</td>
           <td>{{ tarea.createdAt | formatDaytime }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script lang="js">
import { urlPosts } from '../urls'

  export default  {
    name: 'src-components-lista-tareas',
    props: [],
    mounted () {
        this.getTareas()
    },
    data () {
      return {
          tareas: []

      }
    },
    methods: {
     getTareas() {
        this.axios(urlPosts)
        .then( res => {
          console.log(res.data)
          this.tareas = res.data
        })
        .catch(error => {
          console.log('ERROR GET HTTP', error)
        })
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-lista-tareas {

  }
</style>
