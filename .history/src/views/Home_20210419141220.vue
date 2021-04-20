<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div @click="ceshi">
      aaaaffffddd
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld
    },
    methods: {
      ceshi() {
        console.log('11')
      }
    }
  }
</script>
<style lang="less" scoped>
  .home {
    div {
      width: 200px;
      height: 200px;
      border: 1px solid #ccc;
    }
  }
</style>
