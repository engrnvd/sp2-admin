import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { devRoutes } from './dev-routes'

// @ts-ignore
const devModeRoutes = import.meta.env.DEV ? devRoutes : []

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
// vue routes generated here. Do not remove this line.
    { path: '/', name: 'home', component: HomeView, },
    {
      path: '/users',
      component: () => import('../views/users/index.vue'),
      children: [
        { path: 'create', component: () => import('../views/users/create.vue') }
      ]
    },
    {
      path: '',
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/auth/AuthView.vue')
        }
      ],
    },
    { path: '/email-verified', component: () => import('@/views/EmailVerifiedView.vue') },
    ...devModeRoutes,
  ]
})

export default router
