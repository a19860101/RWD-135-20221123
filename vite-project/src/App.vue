<script>
  // import Todos from './components/Todos.vue'
  import Nav from './components/Nav.vue'
  export default {
    components:{
      // Todos:Todos
      // Todos
      Nav
    }
  }
</script>
<template>
  <div>
    <!-- <Todos></Todos>。 -->
    <h1 class="text-3xl font-bold bg-lime-300 p-4">My Vite</h1>
    <Nav></Nav>
    <div class="bg-slate-400 p-5">
    <router-view></router-view>
    </div>
  </div>
</template>
