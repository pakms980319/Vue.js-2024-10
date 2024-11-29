<template>
  <FirstChild />
</template>
<!--
  index.html 에서 호출하는 main.js 에서
  import FirstChild from '@/components/FirstChild.vue';
  ...
  app.component('FirstChild', FirstChild);
  app.mount('#app')
  를 할 시 전역으로 등록 ( 별다른 추가 문법 없이 바로 컴포넌트로 사용가능 )

  연속해서 component를 등록할 수 있다.

  등록한 component는 <template> 영역에서 <FirstChild /> 와 같이 사용할 수 있다.
-->