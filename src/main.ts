import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import '@/style/index.less'
// 全局注册svg组件
import { setupSvg } from './icons'
// 引入状态管理
import { setupStore } from './stores'
import { permission } from '@/directives/permission'
import { loadMore } from '@/directives/loadMore'

const app = createApp(App)

setupSvg(app)
setupStore(app)
app.use(router)
app.directive('permission', permission)
app.directive('loadMore', loadMore)

app.mount('#app')
