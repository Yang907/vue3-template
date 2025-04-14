/* eslint-disable import/prefer-default-export */
/*
 * npm install vite-plugin-svg-icons -D
 * vite.config.ts 配置svg
 * main.ts 引入setupSvg
 */
import { type App } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue' // Svg Component
import 'virtual:svg-icons-register'

export const setupSvg = (app: App<Element>) => {
  app.component('svg-icon', SvgIcon)
}
