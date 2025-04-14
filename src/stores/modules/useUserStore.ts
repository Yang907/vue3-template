/*
 * @file: 角色相关
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface userStore {
  userBaseInfo: any
  token: string
  time: number
  isErrorMessage: boolean
  isFirst: boolean
}

export const useUserStore = defineStore(
  'userStore',
  () => {
    const userBaseInfo = ref({})
    const token = ref('')
    const time = ref(0)
    const isErrorMessage = ref(false)
    const isFirst = ref(true)
    const setUserBaseInfo = (data: any) => {
      userBaseInfo.value = data || {}
    }
    const setToken = (data: any) => {
      token.value = data || ''
    }
    const clearState = () => {
      userBaseInfo.value = {}
      token.value = ''
      time.value = 0
      isErrorMessage.value = false
    }
    return {
      userBaseInfo, // 用户信息
      token, // token
      time, // token 过期时间
      isErrorMessage, // 是否有错误提示
      isFirst, // 是否首次登录
      setUserBaseInfo,
      setToken,
      clearState
    }
  },
  {
    // 持久化配置
    persist: {
      key: 'userInfo', // 自定义存储名称
      storage: sessionStorage, // 自定义存储位置
      pick: ['userBaseInfo', 'token', 'time', 'isFirst'] // 指定要持久化的字段
    }
  }
)
