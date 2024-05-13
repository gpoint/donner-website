const FundRaiserRoutes = [
    {
        path: "/raisers/create",
        name: "Create Fundraiser",
        component: () => import("@/views/raisers/Create.vue"),
        meta: {
            title: "Create a Donner Raiser"
        }
    },
    {
        path: "/raisers/review",
        name: "Review Fundraiser",
        component: () => import("@/views/raisers/Review.vue"),
        meta: {
            title: "Review your Raiser",
            authorizationRequired: true
        }
    }
];

export default FundRaiserRoutes;

