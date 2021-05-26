<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App">
      <p slot="name1">
        name1
      </p>
      <p slot="name2">
        name2
      </p>
    </HelloWorld>
    <div @click="ceshi">aaaaf{{ test }}</div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import { mapState } from 'vuex'
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'Home',
    components: {
      HelloWorld
    },
    computed: {
      ...mapState({ test: state => state.test })
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
