import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { devRoutes } from './dev-routes'

// @ts-ignore
const devModeRoutes = import.meta.env.DEV ? devRoutes : []

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    ...devModeRoutes,
  ]
})

export default router
