<script setup>
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from 'vue-router';

    const router = useRouter();
    const pushRouter = () => {
        router.push('/');
    }

    onBeforeRouteUpdate((to, from) => {
        console.log('onBeforeRouteUpdate');
        console.log(to, from);
    });
    onBeforeRouteLeave((to, from) => {
        console.log('onBeforeRouteLeave');
        console.log(to, from);
    });
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