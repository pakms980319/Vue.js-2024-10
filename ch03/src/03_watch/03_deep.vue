<script>
  export default {
  data() {
    return {
      arr: [0, 1, 2],
      obj: { name: 'chulsu' },
      prevArr: null,
      prevObj: null,
    };
  },
  watch: {
    // 객체의 값이 바뀌어도 주소 참조값이 같아 oldValue, newValue의 값이 같은 문제가 발생
    // 변경되기 이전의 값을 깊은 복사로 따로 저장시켜두어 oldValue 값을 prevArr, prevObj에 저장 시켜두도록 하여 해결
    arr: {
      handler(newValue) {
        console.log(`old value: ${this.prevArr}`);
        console.log(`new value: ${newValue}`);
        this.prevArr = [...newValue]; // 깊은 복사
      },
      deep: true,
    },
    obj: {
      handler(newValue) {
        console.log(`old value: ${JSON.stringify(this.prevObj)}`);
        console.log(`new value: ${JSON.stringify(newValue)}`);
        this.prevObj = { ...newValue }; // 깊은 복사
      },
      deep: true,
    },
  },
  created() {
    this.prevArr = [...this.arr];
    this.prevObj = { ...this.obj };
  },
};

</script>
<template>
  <h1>{{ arr }}</h1>
  <h1>{{ obj }}</h1>
  <button @click="arr.push(3)">배열 변경</button>
  <button @click="obj.age = 20">객체 변경</button>
</template>
<style>
</style>