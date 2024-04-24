import { createRouter, createWebHistory } from "vue-router";

import AccountRoutes from "./account.routes"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
            routes: [
                {
                    path: "/",
                    name: "home",
                    component: () => import("../views/Index.vue"),
                },
                {
                    path: "/raisers/create",
                    name: "Create a Donner Fundraiser",
                    component: () => import("../views/raisers/Create.vue"),
                },
                ...AccountRoutes,
                // {
                //   path: "/project/:id",
                //   name: "project",
                //   component: () => import("../views/ProjectView.vue"),
                // },
                // {
                //   path: "/contact",
                //   name: "contact",
                //   component: () => import("../views/ContactView.vue"),
                // },
                // {
                //   path: "/careers",
                //   name: "careers",
                //   component: () => import("../views/CareersView.vue"),
                // },
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
                // {
                //   path: "/donate",
                //   name: "donate",
                //   component: () => import("../views/DonateView.vue"),
                // },
                // {
                //   path: "/faqs",
                //   name: "faqs",
                //   component: () => import("../views/FaqView.vue"),
                // },
                // {
                //   path: "/training",
                //   name: "training",
                //   component: () => import("../views/TrainingView.vue"),
                // },
                {
                    path: "/:route",
                    name: "Error404",
                    component: () => import("../views/errors/NotFoundView.vue")
                }
            ]
});

//router.beforeRoute()

export default router;
