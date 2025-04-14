/*
 * @file: 按钮权限自定义指令
 * @author: DontK
 * @LastEditTime: 2023-10-07 15:06:58
 */
import type { Directive, DirectiveBinding } from 'vue'
import useUserStore from '@/stores/modules/useUserStore'

function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  const userStore = useUserStore()
  // value 获取用户使用自定义指令绑定的内容
  const { value: permissionFlag } = binding
  // 所有按钮数据
  // const permissionBtn: any = ['按钮权限数据'];
  const permissionBtn = userStore.userBaseInfo.permissionList
    .filter((item: any) => item.menuBtns && item.menuBtns.length)
    .map((item: any) => item.menuBtns)
    .flat()
    .map((item: any) => item.htmlModuleCode)
  // 判断用户使用自定义指令，是否使用正确了
  if (permissionFlag && permissionFlag instanceof Array && permissionFlag.length > 0) {
    const hasPermission = permissionBtn.some((role: any) => {
      return permissionFlag.includes(role)
    })
    // 当用户没有这个按钮权限时，设置隐藏这个按钮
    if (!hasPermission && el.parentNode) el.parentNode?.removeChild(el)
  } else {
    throw new Error("need roles! Like v-permission=\"['admin','editor']\"")
  }
}

export const permission: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding)
  }
}
