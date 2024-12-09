<script>
  import BasicScope from './components/BasicScope.vue';
  import BasicScope3 from './components/BasicScope3.vue';
  export default {
    components: {
      BasicScope,
      BasicScope3,
    },
    data() {
      return {
        message: 'parent',
        count: 0,
      };
    },
  }
</script>
<template>
  <BasicScope3 v-slot="slotProps">
    <h1>범위: {{ slotProps.message }} / {{ slotProps.count }}</h1>
  </BasicScope3>
</template>