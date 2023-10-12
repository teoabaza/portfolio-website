import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "HomePage",
      component: () => import('../views/HomePage.vue')
    },
    {
      path: "/",
      redirect: '/home'
    },
    {
      path: "/about",
      name: "AboutPage",
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: "/projects",
      name: "ProjectsPage",
      component: () => import('../views/ProjectsPage.vue')
    },
    {
      path: "/contact",
      name: "ContactPage",
      component: () => import('../views/ContactPage.vue')
    },
  ]
})

export default router