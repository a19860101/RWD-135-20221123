<script>
  export default {
    data(){
      return {
        title: 'Hello VIte'
      }
    },
    methods:{
      test(){
        alert('hello vite');
      }
    },
    computed:{
      hello(){
        return 'hello';
      }
    }
  }
</script>
<template>
  <div>
    <h1 class="text-4xl mb-3">{{title}}</h1>
    <h2 class="text-5xl p-4 mb-3 bg-purple-600">{{hello}}</h2>
    <a href="#" @click="test()" class="btn">click</a>
  </div>
</template>
