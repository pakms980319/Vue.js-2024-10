<!-- Options API - 프로그래밍 방식 탐색 -->
<script>
    export default {
        methods: {
            navigateToHome() {
                this.$router.push('/');
            },
            replaceWithAbout() {
                this.$router.replace('/about');
            },
            goBack() {
                this.$router.go(-1);
            },
            goForward() {
                this.$router.go(1);
            },
        }
    }
</script>

<template>
    <h1>HomeView</h1>

    <nav>
        <a href="#" @click.prevent="$router.push('/')">.push</a>
        <a href="#" @click.prevent="$router.replace('/about')">.replace</a>
        <a href="#" @click.prevent="$router.go(-1)">.go</a>
        <a href="#" @click.prevent="$router.forward">.forward</a>
        <a href="#" @click.prevent="$router.back()">.back</a>
    </nav>

    <!-- /about -->
    <RouterLink :to="{ name: 'about', query: {lang: 'ko'} }">About</RouterLink> <br />
    <!-- /user -->
    <RouterLink :to="{ name: 'user', params: {id: 'mike'} }">user</RouterLink> <br />
    <!-- /user/mike?lang=ko -->
    <RouterLink :to="{name: 'user', params: {id: 'mike'}, query: {lang: 'ko'}}">user</RouterLink>
</template>