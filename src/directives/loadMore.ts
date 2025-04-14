// 滚动加载更多
import { type Directive } from 'vue'

export const loadMore: Directive = {
  updated(el: any, binding: any) {
    // 获取element-ui定义好的scroll盒子
    const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
    if (SELECTWRAP_DOM) {
      SELECTWRAP_DOM.addEventListener('scroll', function (e: any) {
        const CONDITION = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 50
        if (CONDITION) {
          binding.value()
        }
      })
    }
  }
}
