<script>
  import FirstChild5 from './components/FirstChild5.vue';
  export default {
    components: {
      FirstChild5,
    },
    mounted() {
      console.log(this.$refs.childRef.childNum);  // 0
      console.log(this.$refs.childRef.childNumOddAdd);  // 짝수
      console.log(this.$refs.childRef.getChildNum());  // 0
    },
  }
</script>
<template>
  <FirstChild5 ref="childRef" />
</template>