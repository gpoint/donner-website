const FundRaiserRoutes = [
    {
        path: "/raisers/create",
        name: "Create Fundraiser",
        component: () => import("@/views/raisers/Create.vue"),
        meta: {
            title: "Create a Donner Raiser",
            authorizationRequired: false,
            navigationDisplay: {
                showNavigationBar: false,
                showFooter: false
            }
        }
    },
    {
        path: "/raisers/:urlPath",
        name: "View Fundraiser",
        component: () => import("@/views/raisers/View.vue"),
        meta: {
            title: "Donate to this raiser",
            authorizationRequired: false,
        }
    }
];

export default FundRaiserRoutes;

