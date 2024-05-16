import { createRouter, createWebHistory } from "vue-router";

/* services */
import AccountService from "@/services/AccountService";

/* routes */
import AccountRoutes from "./AccountRoutes";
import FundRaiserRoutes from "./FundRaiserRoutes";

//import.meta.env.BASE_URL;
const history = createWebHistory();

const router = createRouter({
    history,
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/Index.vue")
        },
        ...AccountRoutes,
        ...FundRaiserRoutes,
        {
            path: "/:route",
            name: "Error404",
            component: () => import("../views/errors/NotFoundView.vue")
        }
    ]
});


router.beforeEach((to, from, next) => {
    if (to.path.includes("logout")) {

        AccountService.logUserOut();

        next("/login");
    }

    const authorizationRequired = to.meta.authorizationRequired;
    
    const title = to.meta.title;
    
    if(title) {
        document.title = `Donner | ${title}`;
    }

//    let loggedIn = localStorage.getItem("user");

    // trying to access a restricted page + not logged in
    // redirect to login page
//    if (authorizationRequired) {
//        if (!loggedIn) {
//            next("/login");
//        }
//
//        loggedIn = JSON.parse(loggedIn);
//
//        if (loggedIn.tokenType !== "Bearer") {
//            next("/login");
//        }
//
//        if (
//                !pages[loggedIn.user.role].includes(to.name) &&
//                !pages.PROTECTED.includes(to.name)
//                ) {
//            next(pages[loggedIn.user.role][0]);
//            return;
//        }
//    }

    next();
});

export default router;
