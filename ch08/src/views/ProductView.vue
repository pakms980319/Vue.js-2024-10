<script setup>
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const props = defineProps({
        id: String,
    });
    console.log(route);
</script>
<template>
    <h1>Product {{ route.params.id }}</h1>
    <h2> lang : {{ route.query.lang }}</h2>
    <h3> props : {{ props.id }} </h3>
</template>