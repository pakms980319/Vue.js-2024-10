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

<!--
    컴포넌트가 마운트되기 전에 $refs 객체를 참조할 수 있지만, 이 시점에는 DOM에 대한 참조 속성이 생성되지 않았다.
    그러므로 항상 마운트 된 후에 $refs 객체에 접근해야 한다.
-->