import axios from 'axios'
import { useUserStore } from '@/stores/modules/useUserStore'
import { ElMessage, ElMessageBox } from 'element-plus'
import router from '@/router/index'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000
})

request.interceptors.request.use(
  (config: any) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = `${userStore.token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response: any) => {
    const userStore = useUserStore()
    const res = response.data
    if (res.code && res.code !== '200') {
      if (res.code === '101') {
        if (!userStore.isErrorMessage) {
          userStore.isErrorMessage = true
          ElMessageBox.confirm('您的权限发生变更，正在为您重新登录', '注意', {
            confirmButtonText: '确认',
            type: 'warning',
            showClose: false,
            showCancelButton: false
          }).then(() => {
            userStore.clearState()
            router.push('/login')
          })
        }
      } else if (res.code === '401') {
        if (!userStore.isErrorMessage) {
          userStore.isErrorMessage = true
          ElMessageBox.confirm('会话失效，请重新登录', '注意', {
            confirmButtonText: '确认',
            type: 'warning',
            showClose: false,
            showCancelButton: false
          }).then(() => {
            userStore.clearState()
            router.push('/login')
          })
        }
      } else {
        ElMessage({
          message: res.msg || 'Error',
          showClose: true,
          type: 'error',
          duration: 5 * 1000
        })
      }
      return Promise.reject(res || 'Error')
    }
    return res
  },
  (error: any) => {
    const res = error.response.data
    const userStore = useUserStore()
    if (res.code && res.code === '300') {
      userStore.clearState()
      router.push('/login')
    } else if (res.status && res.status === 404) {
      if (!userStore.isErrorMessage) {
        userStore.isErrorMessage = true
        ElMessage({
          message: '找不到该请求404',
          showClose: true,
          type: 'error',
          duration: 5 * 1000
        })
      }
    }

    return Promise.reject(error)
  }
)

export default request
