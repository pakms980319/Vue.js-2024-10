<script>
  import FirstChild2 from './components/FirstChild2.vue';
  export default {
    components: {
      FirstChild2,
    },
    data() {
      return {
        visible: true,
      };
    },
    beforeCreate() {
      console.log('beforeCreate');
    },
    created() {
      setTimeout(() => {
        this.visible = false;
      }, 3000);
    },
    beforeMount() {
      console.log('beforeMount');
    },
    mounted() {
      console.log('mounted');
    },
    beforeUpdate() {
      console.log('beforeUpdate');
    },
    updated() {
      console.log('updated');
    },
    beforeUnmount() {
      console.log('beforeUnmount');
    },
    unmounted() {
      console.log('unmounted');
    },
  }
</script>
<template>
  <FirstChild2 v-if="visible" />
</template>

<!--
  setTimeout() 함수의 코드를 beforeCreate() 훅에서 사용하면 안된다.
  setTimeout() 함수 내부에서 옵션스 API의 data 옵션 속성으로 데이터에 접근하게 되기 때문이다.
  옵션스 API 는 beforeCreate() 훅 이후에 초기화 된다.
  따라서 beforeCreate() 훅에서는 옵션스 API의 어떤 속성에도 접근할 수 없다.

-->