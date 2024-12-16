<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const afterUser = route.params.afterUser;
    console.log(afterUser);
</script>
<template>
    <h1>UserGeneric</h1>
    <h2>afterUser: {{ afterUser }}</h2>
</template>