<script>
  import UserProfile from '@/components/UserProfile.vue';
  export default {
    components: {
      UserProfile,
    },
    data() {
      return {
        userName: '김철수',
      };
    },
  }
</script>
<template>
  <UserProfile :name="userName" />
</template>