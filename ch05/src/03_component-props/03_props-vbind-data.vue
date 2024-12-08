<script>
  import UserProfile from '@/components/UserProfile.vue';
  export default {
    components: {
      UserProfile,
    },
    data() {
        return {
            name: '김철수',
            age: 30,
        };
    },
  }
</script>
<template>
  <UserProfile :name="name" :age="age" />
</template>

<!--
    컴포넌트의 데이터(data 옵션 속성)는 카멜 케이스에 따라 작성해야 한다.
    예를들어, userName 처럼 첫 단어의 첫 글자는 소문자로 두 번째 단어의 첫 글자는 대문자로 표기한다.
    이때 단어끼리는 붙여 쓴다.

    컴포넌트의 속성은 user.name 처럼 모든 단어를 소문자로 시작하고 단어 사이는 하이픈(-) 으로 연결하는 케밥 케이스(kebab case)에 따라 작성해야 한다.
-->