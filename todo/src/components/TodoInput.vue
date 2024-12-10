<script>
    export default {
        data() {
            return {
                inputMsg: '',  // 데이터 정의
            };
        },
        emits: ["addTodo"],
        methods: {
            addTodo() {
                // console.log(this.inputMsg);  // 할 일 출력
                this.$emit('addTodo', this.inputMsg);  // 부모 컴포넌트 이벤트 호출
                this.inputMsg = "";  // 입력 데이터 초기화
            },
        },
    }
</script>
<template>
    <div class="todo__input">
        <!-- 정의한 데이터를 양방향 바인딩 -->

        <input
          v-model="inputMsg"
          type="text"
          class="todo__input-text"
          placeholder="할 일을 입력하세요."
          @keydown.enter="addTodo"
        />
        <button class="todo__input-btn" @click="addTodo">등록</button>
    </div>
</template>