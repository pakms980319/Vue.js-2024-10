<script>
  export default {
    data() {
      return {
        message: '',  // 한글을 입력할 경우 한글자씩 밀리는 문제가 발생
      };
    },
  }
</script>
<template>
  <input type="text" v-model="message" />
  {{ message }}
</template>
<style>
</style>