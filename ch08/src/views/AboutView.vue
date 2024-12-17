<!-- Compsition API - 프로그래밍 방식 탐색 -->
<script setup>
    import { RouterLink, RouterView } from 'vue-router';
    import { useRouter } from 'vue-router';
    const router = useRouter();
    const navigateToHome = () => {
        router.push(6);
    };
    const replaceWithAbout = () => {
        router.replace('/about');
    };
    const go = () => {
        router.go(1);
    };
    const goForward = () => {
        router.forward();
    };
    const goBack = () => {
        router.back();
    };
    const lang = router.query.lang;
    console.log(`lang query value: ${lang}`);
</script>
<template>
    <h1>AboutView</h1>

    <nav>
        <a href="#" @click.prevent="router.push('/')">.push</a>
        <a href="#" @click.prevent="router.replace('/about')">.replace</a>
        <a href="#" @click.prevent="router.go(-1)">.go</a>
        <a href="#" @click.prevent="router.forward">.forward</a>
        <a href="#" @click.prevent="router.back()">.back</a>
    </nav>

    <!-- 이름이 있는 경로의 라우트 전환 -->
    <RouterLink :to="{name: 'about', query: {lang: 'ko'}, params: {id: 'mike'}}">About</RouterLink>
</template>