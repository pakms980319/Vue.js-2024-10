<script>
  import FirstChild4 from './components/FirstChild4.vue';
  export default {
    components: {
      FirstChild4,
    },
    provide() {
      return {
        message: this.message,
      };
    },
    data() {
      return {
        message: 'Hello, Vue JS!',
      };
    },
  }
</script>
<template>
  <FirstChild4 />
</template>