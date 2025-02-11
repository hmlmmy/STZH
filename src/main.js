import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'; // 导入默认样式

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')