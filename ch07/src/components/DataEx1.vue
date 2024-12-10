<script setup>
    import { ref } from 'vue';
    const count = ref(0);  // 기본 자료형 사용
    const state = ref({
        count: 0,
    });
    console.log(count.value);  // 0
    console.log(state.value.count);  // 0

    setTimeout(() => {
        count.value++;  // count 값 1 증가
    }, 1000);
    setTimeout(() => {
        state.count++;
    }, 1000)
</script>
<template>
    <h1>count: {{ count }}</h1>
    <h1>state: {{ state.count }}</h1>
</template>