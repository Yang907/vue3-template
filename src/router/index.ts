import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/login/index.vue'
import PageA from '../views/pageA/index.vue'
import Main from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      children: [
        {
          path: 'pageA',
          name: 'pageA',
          component: PageA
        }
      ]
    }
  ]
})

export default router
