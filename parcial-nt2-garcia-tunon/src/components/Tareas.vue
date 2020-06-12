<template >

  <section class="src-components-tareas">
 

  <div class="jumbotron mt-3">
    <h2> Lista de tareas </h2>


    <vue-form :state="formState"  @submit.prevent="enviar()"> 
      <validate tag="div">
          <label for="tarea">Tarea</label>
          <input
            type="text"
            id="tarea"
            class="form-control"
            autocomplete="off"
            name="tarea"
            v-model.trim="formData.tarea"
            required
            :minlength="tareaChrMin"
            :maxlength="tareaChrMax"
          >
           <field-messages name="tarea" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo tarea requerido</div>
            <div
              slot="minlength"
              class="alert alert-danger my-1"
            >Se deben ingresar como mínimo {{tareaChrMin}} caracteres</div>
            <div
              v-if="formData.tarea.length == tareaChrMax"
              class="alert alert-danger my-1"
            >Máximo de caracteres alcanzados ({{tareaChrMax}})</div>
          </field-messages>
        </validate>
        <br>

       <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            class="form-control"
            autocomplete="off"
            name="nombre"
            v-model.trim="formData.nombre"
            required
            :minlength="nombreChrMin"
            :maxlength="nombreChrMax"
          >
           <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo nombre requerido</div>
            <div
              slot="minlength"
              class="alert alert-danger my-1"
            >Se deben ingresar como mínimo {{nombreChrMin}} caracteres en el destinatario de la tarea</div>
            <div
              v-if="formData.nombre.length == nombreChrMax"
              class="alert alert-danger my-1"
            >El nombre no puede contener mas de  ({{nombreChrMax}}) caracteres</div>
          </field-messages>
        </validate>
      
    
        <br>

          <validate tag="div">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            autocomplete="off"
            name="email"
            v-model.trim="formData.email"
            required
          >
           <field-messages name="email" show="$dirty">
            <!-- <div class="alert alert-success my-1">Campo correcto</div> -->
            <div slot="required" class="alert alert-danger my-1">Campo email requerido</div>
            <div
              slot="email"
              class="alert alert-danger my-1"
            >El email  {{formData.email}} no es valido.</div>
            </field-messages>
        </validate>
      

        
      <button class="btn btn-success my-4" :disabled="formState.$invalid || enviando" type="submit">Enviar</button>


    </vue-form>  

  </div>
  </section>

  

</template>

<script lang="js">

import { urlPosts } from '../urls'

  export default  {
    name: 'src-components-tareas',
    props: [],
    mounted () {

    },
    data () {
      return {
         formState : {},
           formData : this.getInitialData(),
            enviando: false,
            tareaChrMin: 10,
            tareaChrMax: 50,
            nombreChrMin: 5,
            nombreChrMax: 15,

      }
    },
     methods: {

      getInitialData() {
      return {
        tarea: '',
        nombre: '',
        email: '',
        
      }
    },
    enviar() {
      this.enviando = true
      console.log(this.formData)

           this.axios.post(urlPosts, this.formData, {
        'content-type' : 'application/json'
      })
      .then( res => {
        console.log(res.data)
        this.formData = this.getInitialData()
        this.formState._reset()
        this.enviando = false
      })
      .catch(error => {
        console.log('ERROR POST', error)
        this.enviando = false
      })

      setTimeout(() => {
        this.enviando = false
      },10000)
    }

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-tareas {

  }
</style>
