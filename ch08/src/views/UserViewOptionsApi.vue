<script>
    export default {
        beforeCreate() {
            // <script> 에서는 $route 속성을 this 키워드로 참조함
            const id = this.$route.params.id;
            console.log(id);
            // Options API 프로그래밍 방식 이름있는 라우터 이동 (쿼리 스트링, 파람 추가)
            this.$router.push({name:'', query: {}, params: {}});
        },
    }
</script>
<template>
    <!-- <template> 에서는 this 키워드 생략 가능 -->
    <h1>id: {{ $route.params.id }}</h1>
</template>