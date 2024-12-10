<script setup>
    import { ref, computed, provide } from 'vue';
    import Solution3Child from './selfCheck/Solution3Child.vue';
    const number = ref(10);
    const doubleNumber = computed((()=>number.value*2));
    provide('number', number.value);
    provide('doubleNumber', doubleNumber.value);
</script>
<template>
    <Solution3Child />
</template>