import { useAuthStore } from 'src/stores/auth.store'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { devRoutes } from './dev-routes'

// @ts-ignore
const devModeRoutes = import.meta.env.DEV ? devRoutes : []

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sitemaps',
      component: () => import('../views/sitemaps/index.vue'),
      children: [
        { path: 'create', component: () => import('../views/sitemaps/create.vue') }
      ]
    },

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
    {
      path: '/profile',
      name: 'profile',
      meta: { auth: true },
      component: () => import('../views/profile/Profile.page.vue'),
      children: [
        {
          name: 'change-password',
          path: 'change-password',
          component: () => import('../views/profile/ChangePassword.page.vue'),
        },
        {
          path: 'delete-account',
          name: 'delete-account',
          component: () => import('../views/profile/DeleteAccount.page.vue'),
        },
      ]
    },
    { path: '/email-verified', component: () => import('@/views/EmailVerifiedView.vue') },
    ...devModeRoutes,
  ]
})

router.beforeEach(async (to, from) => {
  const auth = useAuthStore()
  if (!auth.isLoggedIn && to.meta.auth || (to.name === 'sitemap' && to.params.id !== 'new')) {
    auth.showLoginModal()
    return '/'
  }
})

export default router
