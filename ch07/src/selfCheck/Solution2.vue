<script setup>
    import { ref } from 'vue';
    import Solution2Child from './Solution2Child.vue';
    const childName = ref('Alice');
    const handGreeting = (message) => {
        console.log(message);
    };
</script>
<template>
    <div>
        <Solution2Child :name="childName" @greet="handGreeting" />
    </div>
</template>