<script>
  import TodoHeader from './components/TodoHeader.vue';
  import TodoList from './components/TodoList.vue';
  import TodoInput from './components/TodoInput.vue';

  export default {
    components: {
      TodoHeader,
      TodoList,
      TodoInput,
    },
    data() {
      return {
        todo: [],
        current: 'all',
      };
    },
    methods: {
      // LocalStorage 에서 할일 목록
      localTodo() {
        const savedTodo = localStorage.getItem('todo');
        if (savedTodo) {
          this.todo = JSON.parse(savedTodo);
        }
      },
      // LocalStorage 할 일 목록 저장
      saveTodo() {
        localStorage.setItem('todo', JSON.stringify(this.todo));
      },
      // 할 일 수정
      editTodo(id, newMsg) {
        this.todo = this.todo.map((v) => v.id === id ? {...v, msg: newMsg} : v);
        this.saveTodo();
      },
      addTodo(inputMsg) {
        const item = {
          id: Math.random(),  // 고유한 값
          msg: inputMsg,  // 할 일 텍스트
          computed: false,  // 할 일 완료 여부
        };
        this.todo.push(item);
        this.saveTodo();  // localStorage 저장
      },
      updateTab(tab) {
        this.current = tab;
      },
      deleteTodo(id) {
        this.todo = this.todo.filter((v) => v.id !== id);
        this.saveTodo();
      },
      updateTodo(id) {
        this.todo = this.todo.map((v) => v.id === id ? { ...v, completed: !v.completed } : v);
        this.saveTodo();
      }
    },
    computed: {
      computedTodo() {
        if (this.current === 'all') {
          return this.todo;
        } else {
          return this.todo.filter((v) => v.completed);
        }
      },
    },
    mounted() {
      this.localTodo();
    }
  }
</script>

<template>
  <div class="todo">
    <TodoHeader :current="current" @update-tab="updateTab" />
    <TodoList 
        :computed-todo="computedTodo"
        @delete-todo="deleteTodo"
        @update-todo="updateTodo"
        @edit-todo="editTodo"/>
    <TodoInput @add-todo="addTodo" />
  </div>
</template>