<script>
  import FirstChild from '@/components/FirstChild.vue';
  export default {
    components: {
      FirstChild,
    },
  }
</script>
<template>
  <FirstChild />
</template>

<!--
  Options API 의 속성 중 components 를 사용하여
  FirstChild Component를 지역등록을 하였다.

  지역 등록한 Component는 해당 Vue 파일에서만 사용할 수 있다.
-->