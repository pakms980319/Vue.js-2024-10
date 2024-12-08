<script>
  import UserProfile from '@/components/UserProfile.vue';
  export default {
    components: {
      UserProfile,
    },
  }
</script>
<template>
  <UserProfile :name="`김철수`" :age="30" />
</template>

<!--
  사용자 정의 속성 v-bind 디렉티브(축약형)
  문자열: "`문자열`", 템플릿 문자열로 감싸야 한다.
  number: "숫자"
-->