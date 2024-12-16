<!--
    매개변수 가져오기 (Options API 방식)
    <script>
        export default {
            beforeMount() {
                const name = this.$route.query.name;
                const age = this.$route.query.age;
                console.log(name);
                console.log(age);
            }
        }
    </script>
-->
<script setup>
    // 매개변수 가져오기 (Composition API 방식)
    import { onBeforeMount } from 'vue';
    import { useRoute } from 'vue-router';
    const route = useRoute();
    onBeforeMount(() => {
        const name = route.query.name;
        const age = route.query.age;
        console.log(name);
        console.log(age);
    });
</script>
<template>
    <h1>UserView</h1>
</template>