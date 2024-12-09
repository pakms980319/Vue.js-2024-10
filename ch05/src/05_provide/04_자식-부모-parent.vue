<script>
  import FirstChild6 from '@/components/FirstChild6.vue'
  export default {
    components: {
      FirstChild6,
    },
    data() {
      return {
        parentNum: 5,
      };
    },
    computed: {
      numOddEven() {
        return this.parentNum % 2 === 0 ? '짝수' : '홀수';
      },
    },
    methods: {
      getParentNum() {
        return this.parentNum;
      },
    },
  }
</script>
<template>
  <FirstChild6 />
</template>
