<script>
  export default {
    data() {
      return {
        count: 0,
      };
    },
    computed: {
      doubledCount() {
        return this.count * 2;
      },
    },
    methods: {
      increment() {
        this.count++;
      },
    },
    watch: {
      count(newVal, oldVal) {
        console.log(`Count changed from ${oldVal} to ${newVal}`);
      }
    }
  }
</script>
<template>
  <h1>count: {{ count }}</h1>
  <button @click="increment">증가</button>
</template>