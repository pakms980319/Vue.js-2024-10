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
      console.log(`메서드 호출 후: ${this.$refs.child.num}`); // 6 출력
      console.log(`메서드 호출 후: ${this.$refs.child.doubleNum}`); // 12 출력
    }, 1000);
  },
};
</script>
<template>
  <FirstChild3 ref="child" />
</template>

<!--
  뷰에서는 이런 방식으로 자식 컴포넌트의 데이터에 접근하거나 직접 조작하는 방식을 권장하지 않으므로 해당 방식은 자제해야한다.

  변경부분
  책에서는 setTimeout 에서 function() {} 을 넣었으나 this 에서 객체를 못읽어 와서 화살표 함수로 수정,
  increment() 메서드가 호출된 후 변화된 값을 보기 위해서 기존 변수에 저장된 값이 아닌 새롭게 호출하여 증가된 값 조회
-->