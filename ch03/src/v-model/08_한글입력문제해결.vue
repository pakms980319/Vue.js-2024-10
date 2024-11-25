<script>
  export default {
    data() {
      return {
        message: '',  // 한글을 입력할 경우 한글자씩 밀리는 문제가 발생 해결
      };
    },
    methods: {
      onChangeHandler($event) {
        this.message = $event.target.value;
      },
    },
  }
</script>
<template>
  <input type="text" @input="onChangeHandler($event)" />
  {{ message }}
</template>
<style>
</style>