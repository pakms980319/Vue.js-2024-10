// import './assets/main.css'

// 컴포넌트 전역 등록

import { createApp } from 'vue';
import App from './App.vue';
// import FirstChild from '@/components/FirstChild.vue';

const app = createApp(App);
// app.component('FirstChild', FirstChild);
// app.mount('#app);
app.mount('#app');
