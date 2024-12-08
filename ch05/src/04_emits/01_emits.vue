<script>
  import UserProfile2 from '@/components/UserProfile2.vue';
  export default {
    components: {
      UserProfile2,
    },
    methods: {
      printHello() {
        alert('안녕하세요!');
      },
    },
  }
</script>
<template>
  <UserProfile2 @print-hello="printHello" />
</template>