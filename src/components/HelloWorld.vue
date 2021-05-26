<template>
  <div class="hello">
    <p>我来试试插槽</p>
    <slot name="name1">
      显示什么呢
    </slot>
    <slot name="name2">
      是这样吧
    </slot>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld'
    // props: {
    //   msg: String
    // }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
