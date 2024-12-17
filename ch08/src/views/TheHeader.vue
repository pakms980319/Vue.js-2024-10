<script setup>
    const props = defineProps({
        id: String,
    });
    console.log(`props path var id: ${props.id}`);
</script>
<template>
    <h1>TheHeader</h1>
</template>