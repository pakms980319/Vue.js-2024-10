<script>
import FirstChild3 from "@/components/FirstChild3.vue";
export default {
  components: {
    FirstChild3,
  },
  mounted() {
    const childNum = this.$refs.child.num;
    const childDoubleNum = this.$refs.child.doubleNum;
    console.log(`메서드 호출 전: ${childNum}`); // 5 출력
    console.log(`메서드 호출 전: ${childDoubleNum}`); // 10 출력
    // DOM이 마운트되고 1초 뒤에 TheChild 컴포넌트의 increment() 메서드 호출
    setTimeout(() => {
      this.$refs.child.increment();
      console.log(`메서드 호출 전: ${this.$refs.child.num}`); // 6 출력
      console.log(`메서드 호출 전: ${this.$refs.child.doubleNum}`); // 12 출력
    }, 1000);
  },
};
</script>
<template>
  <FirstChild3 ref="child" />
</template>