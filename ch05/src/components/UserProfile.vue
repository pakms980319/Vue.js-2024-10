<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
                validator: function (value) {
                    return value.length > 1;  // 이름이 최소 2글자 이상이어야 함
                }
            },
            age: {
                type: Number,
                default: function() {
                    return 10;
                },
            },
        },
    }
</script>
<template>
    <p>이름: {{ name }}</p>
    <p>나이: {{ age }}</p>
</template>