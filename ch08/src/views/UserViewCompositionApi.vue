<script setup>
    import { useRoute } from 'vue-router';
    const route = useRoute();
    const id = route.params.id;  // 한 번에 useRoute().params.id 라고 작성해도 된다
    console.log(id);
</script>
<template>
    <h1>id: {{ id }}</h1>
</template>

<!--
    useRoute() 는 라이프사이클 훅이나 함수 안에서 사용하면 안된다.
-->