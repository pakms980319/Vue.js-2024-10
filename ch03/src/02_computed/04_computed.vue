<script>
  export default {
    data() {
      return {
        numArr: [1, 2, 3, 4, 5],
      };
    },
    computed: {
      evenSum() {
        return this.numArr
                .filter((v) => v % 2 === 0)
                .reduce((acc, cur) => acc + cur, 0);
      } 
    }
  }
</script>
<template>
  <h1>{{ evenSum }}</h1>
</template>
<style>
</style>