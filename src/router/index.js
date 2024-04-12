import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    // {
    //   path: "/project/:id",
    //   name: "project",
    //   component: () => import("../views/ProjectView.vue"),
    // },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/careers",
      name: "careers",
      component: () => import("../views/CareersView.vue"),
    },
    // {
    //   path: "/volunteer",
    //   name: "volunteer",
    //   component: () => import("../views/VolunteerView.vue"),
    // },
    // {
    //   path: "/resources",
    //   name: "resources",
    //   component: () => import("../views/ResourcesView.vue"),
    // },
    {
      path: "/donate",
      name: "donate",
      component: () => import("../views/DonateView.vue"),
    },
    {
      path: "/faqs",
      name: "faqs",
      component: () => import("../views/FaqView.vue"),
    },
    {
      path: "/training",
      name: "training",
      component: () => import("../views/TrainingView.vue"),
    },
  ],
});

export default router;
