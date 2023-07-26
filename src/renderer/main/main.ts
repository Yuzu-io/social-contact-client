import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'

// 初始化样式
import '../../../resources/reset.css'
// 引入TDesign少量全局样式变量
import 'tdesign-vue-next/es/style/index.css'

const app = createApp(App)

app.use(router)
app.mount('#app')
