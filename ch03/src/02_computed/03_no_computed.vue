<script>
  export default {
    data() {
      return {
        numArr: [1, 2, 3, 4, 5],
      };
    },
    computed: {
      
    }
  }
</script>
<template>
  <h1>{{ numArr.filter((v) => v % 2 === 0).reduce((acc, cur) => acc + cur, 0) }}</h1>
</template>
<style>
</style>