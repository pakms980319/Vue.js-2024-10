<script>
  import BasicScope from './components/BasicScope.vue';
  export default {
    components: {
      BasicScope,
    },
  }
</script>
<template>
  <BasicScope>
    <h1>범위</h1>
  </BasicScope>
</template>
<style scoped>
  h1 {
    color: blue;
  }
</style>