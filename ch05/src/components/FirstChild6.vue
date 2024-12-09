<script>
    export default {
        mounted() {
            console.log(this.$parent.parentNum);  // 5 출력
            console.log(this.$parent.numOddEven);  // 홀수 출력
            console.log(this.$parent.getParentNum());  // 5 출력
        }
    }
</script>
<template>
    <h1>ParentChild</h1>
</template>