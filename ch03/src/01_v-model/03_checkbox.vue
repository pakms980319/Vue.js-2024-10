<script>
  export default {
    data() {
      return {
        fruits: true,  // true(체크), false(미체크)
      };
    },
    methods: {
      printData() {
        console.log(`id: ${this.message}`);
      },
    },
  }
</script>
<template>
  <form id="loginForm">
    <label for="banana">
      <input type="checkbox" id="banana" v-model="fruits" value="banana">banana
    </label>
  </form>
</template>
<style>
</style>