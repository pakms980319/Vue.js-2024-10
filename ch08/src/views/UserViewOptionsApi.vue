<script>
    export default {
        beforeCreate() {
            // <script> 에서는 $route 속성을 this 키워드로 참조함
            const id = this.$route.params.id;
            console.log(id);
        },
    }
</script>
<template>
    <!-- <template> 에서는 this 키워드 생략 가능 -->
    <h1>id: {{ $route.params.id }}</h1>
</template>