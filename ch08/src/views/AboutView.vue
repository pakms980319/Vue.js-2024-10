<script setup>
import { useRouter } from 'vue-router';

    const router = useRouter();
    const pushRouter = () => {
        router.push('/');
    }
</script>
<template>
    <h1>AboutView</h1>
    <button @click="router.push({ name : 'Home' })">push</button>
    <button @click="router.replace('/')">replace</button>
    <button @click="router.replace({
        name : 'Product',
        params: {id : 1},
        query: {lang: 'en'} 
    })">push</button>
</template>