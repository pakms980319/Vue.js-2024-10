<script>
  export default {
    data() {
      return {
        number: 0,
      };
    },
    methods: {
      increase() {
        if (this.number < 10)
          this.number++;
      },
      decrease() {
        if (this.number > 0)
          this.number--;
      },
    }
  }
</script>
<template>
  <div class="container">
    <h2>{{ number }}</h2>
    <button @click="increase">증가</button>
    <button @click="decrease">감소</button>
  </div>
</template>
<style>
</style>