<script>
    export default {
        emits: ['print-hello'],
        methods: {
            // emits 옵션 속성으로 print-hello 이벤트만 명시했는데
            // 명시되지 않은 이벤트 호출 시 경고가 발생한다.
            parentEventCall() {
                this.$emit('print-hello');
                this.$emit('hello');  // 경고
            },
        },
    }
</script>
<template>
    <!--
        인라인 핸들러 방식
        <button @click="$emit('print-hello')">클릭</button> 
    -->
    <!-- 메서드 핸들러 방식 -->
    <button @click="parentEventCall">클릭</button>
</template>