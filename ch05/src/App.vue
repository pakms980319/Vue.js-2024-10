<script>
  export default {
    mounted() {
      const domEl = this.$refs.domEl;
      const text = domEl.innerHTML;  // this.$refs.domEl.innerText 와 같은 의미
      console.log(text);
    },
  }
</script>
<template>
  <h1 ref="domEl">h1 태그</h1>
</template>