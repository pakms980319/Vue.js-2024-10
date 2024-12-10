<script>
    export default {
        props: {
            computedTodo: {
                type: Array,
                default() {
                    return [];
                },
            },
        },
        emits: ['delete-todo', 'update-todo', 'edit-todo'],
        methods: {
            deleteTodo(id) {
                this.$emit('delete-todo', id);
            },
            updateTodo(id) {
                this.$emit('update-todo', id)
            },
            editTodo(id) {
                const newMsg = prompt('새로운 할 일을 입력하세요: ');
                if(newMsg) {
                    this.$emit('edit-todo', id, newMsg);
                }
            },
        },
    }
</script>
<template>
    <div class="todo__list">
        <!-- 할 일 목록이 있을 때 (완료 시 .todo__item--completed 클래스 추가 )-->
        <div 
            v-for="item in computedTodo"
            :key="item.id" class="todo__item"
            :class="{'todo__item--completed': item.completed}"
        >

          <input
            type="checkbox"
            :id="`chk${item.id.toString()}`"
            :checked="item.completed"
            @click="updateTodo(item.id)"/>
          <label
            :for="`chk${item.id.toString()}`"
            class="todo__checkbox-label"></label>

          <span class="todo__item-text" @dblclick="editTodo(item.id)">{{ item.msg }}</span>

          <span class="material-symbols-outlined todo__delete-icon"
                @click="deleteTodo(item.id)">
            delete
          </span>

        </div>
        <!-- 할 일 목록이 없을 때 -->
        <div v-if="computedTodo.length === 0" class="todo__item--no">
          <p>할일 목록이 없습니다.</p>
        </div>
    </div>
</template>