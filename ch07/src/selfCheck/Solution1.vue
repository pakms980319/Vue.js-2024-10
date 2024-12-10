<script setup>
    import { ref, computed, watch } from 'vue';
    const count = ref(0);
    const doubleCount = computed(() => count.value * 2);
    const increment = () => {
        count.value++;
    }
    watch(count, (newVal, oldVal) => {
        console.log(`Count changed from ${oldVal} to ${newVal}`)
    });
</script>
<template>
    <h1>Count: {{ count }}</h1>
    <button @click="increment">증가</button>
</template>