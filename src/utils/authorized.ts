import type { RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('@/views/**/*.vue') // 获取全部.vue文件
export const getGenerateRouter = (permissionList: any, pId: any = '0') => {
  if (!permissionList.length) {
    return []
  }
  // 定义一个 routes 数组
  const routes: any = []
  permissionList.forEach((item: any) => {
    if (item.pId === pId) {
      const component: any = Object.keys(modules).find((key: any) => {
        return key.indexOf(`${item.fileUrl}.vue`) >= 0
      })
      const route: RouteRecordRaw = {
        path: item.url,
        name: item.url,
        component: modules[component],
        meta: {
          title: item.name,
          icon: item.icon,
          hidden: item.status === 2
        },
        children: []
      }
      // 对于每个匹配的子节点，递归调用 toTree 函数，传递当前子节点的 ID 作为新的父节点 ID，以获取当前子节点的所有子节点。
      route.children = getGenerateRouter(permissionList, item.id)
      routes.push(route)
    }
  })
  return routes
}
