// import './assets/main.css' 삭제
// import './assets/main.css'

import { createApp, h } from 'vue'

// import App from './App.vue' 삭제
// import App from './App.vue'

createApp({
    data() {
        return {
            message: 'Hello, Vue!',
        };
    },
    methods: {
        reverse() {
            this.message = this.message.split('').reverse().join('');
        },
    },
    render() {  // data와 methods에 정의한 속성 사용
        return h('div', [
            h('p', this.message),
            h('button', { onClick: this.reverse }, 'Reverse'),
        ]);
    },
}).mount('#app')
