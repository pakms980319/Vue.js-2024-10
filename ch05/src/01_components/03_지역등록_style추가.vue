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
<style scoped>
  h1, p {
    color: orange !important;
  }
</style>

<!--
  Options API 의 속성 중 components 를 사용하여
  FirstChild Component를 지역등록을 하였다.

  지역 등록한 Component는 해당 Vue 파일에서만 사용할 수 있다.

  Style 추가
  해당 Vue 파일에서 설정한 Style은 하위 Component의 style에도 영향을 준다.
  (!important 사용주의)

  => 위 문제 해결방법
  style 태그에 scoped 추가 <style scoped>
  !important를 붙여도 하위 component의 style에 영향을 주지 않는다.
  (뷰에서는 대부분 컴포넌트의 <style> 태그에 scoped 속성을 붙여 사용한다.)
-->