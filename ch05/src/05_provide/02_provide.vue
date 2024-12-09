<script>
  import FirstChild4 from './components/FirstChild4.vue';
  import { message, reversedMessage } from '@/keys.js';
  export default {
    components: {
      FirstChild4,
    },
    provide() {
      return {
        [message]: this.message,
        [reversedMessage]: this.reversedMessage
      };
    },
    data() {
      return {
        message: 'Hello, Vue JS!',
      };
    },
    computed: {
      reversedMessage() {
        return this.message.split('').reverse().join('');
      }
    },
  }
</script>
<template>
  <FirstChild4 />
</template>