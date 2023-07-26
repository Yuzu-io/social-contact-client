import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'

// 初始化样式
import '../../../resources/reset.css'
// 引入TDesign少量全局样式变量
import 'tdesign-vue-next/es/style/index.css'
//  @mdi/font mdi-vue/v3 @mdi/js
import MDIcon, { config as MDIconConfig } from './plugins/md-icon'

const app = createApp(App)

//  @mdi/font mdi-vue/v3 @mdi/js
app.use(MDIcon, { icons: MDIconConfig })

app.use(router)
app.mount('#app')
