import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Programs from '../components/Programs.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/overview',
      name: 'overview',
      component: () => import('../views/OverviewView.vue'),
    },
    {
      path: '/programs',
      component: () => import('../views/ProgramsView.vue'),
      children: [
        {
          path: ':slug',
          name: 'detail',
          component: Programs,
          props: true,
        },
      ],
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
  ],
});

export default router;

