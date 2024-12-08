<script>
  import UserProfile3 from './components/UserProfile3.vue';
  export default {
    components: {
      UserProfile3,
    },
    methods: {
      printHello(name, age) {
        alert(`안녕하세요! 저는 ${name}이고, 나이는 ${age}살 입니다.`);
      },
    },
  }
</script>
<template>
  <!--
    <UserProfile3 @print-hello="(name, age) => printHello(name, age)" />
  -->
  <!-- 비구조화 할당으로 인자의 값을 받아 처리 - 객체 -->
   <UserProfile3 @print-hello="({name, age}) => printHello(name, age)" />
</template>