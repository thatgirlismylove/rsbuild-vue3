import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

import ElementPlus from 'element-plus';
import './styles/index.scss';

// unocss 基础样式
import './uno.css';
// unocss 重置浏览器预设样式 兼容版，避免与 ui 框架样式冲突
import '@unocss/reset/tailwind-compat.css';

const pinia = createPinia();
const app = createApp(App);

app.use(router).use(pinia).use(ElementPlus).mount('#root');
