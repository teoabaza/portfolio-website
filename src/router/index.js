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
    {
      path: "/not-found",
      name: "NotFound",
      component: () => import('../views/NotFound.vue')
    },
    // Catch-all route for non-existing paths
    {
      path: "/:catchAll(.*)",
      redirect: '/not-found'
    }
  ]
});

export default router;