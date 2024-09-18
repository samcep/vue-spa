import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';
import HomePage from '@/modules/landing/pages/HomePage.vue';
import NotFound from '@/shared/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layout/LadingLayout.vue'),
      children: [
        {
          path: '/',
          component: HomePage,
          name: 'home',
        },
        {
          path: '/features',
          component: () => import('@/modules/landing/pages/FeaturesPage.vue'),
          name: 'features',
        },
        {
          path: '/contact',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
          name: 'contact',
        },
        {
          path: '/pricing',
          component: () => import('@/modules/landing/pages/PricingPage.vue'),
          name: 'pricing',
        },
        {
          path: '/pokemon/:id',
          beforeEnter: [isAuthenticatedGuard],
          props: (route) => {
            const id = Number(route.params.id);
            return isNaN(id) ? { id: 1 } : { id };
          },
          component: () => import('@/modules/pokemon/pages/PokemonPage.vue'),
          name: 'pokemon',
        },
      ],
    },
    {
      path: '/auth',
      component: () => import('@/modules/auth/layout/AuthLayout.vue'),
      redirect: { name: 'login' },
      name: 'auth',
      children: [
        {
          path: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
          name: 'login',
        },
        {
          path: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
          name: 'register',
        },
      ],
    },

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },

    //Auth Lay
  ],
});

export default router;
