const UserRoutes = [
    {
        path: "/me/raisers",
        name: "Manage Raisers",
        component: () => import("../views/user/raisers/Index.vue"),
        meta: {
            title: "Manage your raisers",
            authorizationRequired: true
        }
    },
    {
        path: "/me/raisers/review/:id?",
        name: "Review Raiser",
        component: () => import("@/views/user/raisers/Review.vue"),
        meta: {
            title: "Review your Raiser",
            authorizationRequired: true,
            navigationDisplay: {
                showNavigationBar: false,
                showFooter: false
            }
        }
    },
    {
        path: "/me/donations",
        name: "Manage Raiser",
        component: () => import("../views/user/donations/Index.vue"),
        meta: {
            title: "Login to manage your fundraiser",
            navigationDisplay: {
                showNavigationBar: false,
                showFooter: false
            }
        }
    }
];

export default UserRoutes;

