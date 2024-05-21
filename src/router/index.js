import { createRouter, createWebHistory } from "vue-router";

/* routes */
import AccountRoutes from "./AccountRoutes";
import FundRaiserRoutes from "./FundRaiserRoutes";

/* utilities */
import CookieUtility from "@/utilities/CookieUtility"

//import.meta.env.BASE_URL;
const history = createWebHistory();

const router = createRouter({
    history,
    routes: [
        
        {
            path: "/",
            name: "home",
            component: () => import("../views/Index.vue"),
            meta: {
                title: 'Giving Future'
            }
        },
        
        ...AccountRoutes,
        
        ...FundRaiserRoutes,
        
        { path: '/:pathMatch(.*)*', name: 'not-found', component: import("../views/errors/NotFoundView.vue") }
    ]
});


router.beforeEach((to, from, next) => {
    
    if (to.path.includes("logout")) {

        AccountService.logUserOut();

        next("/login");
    }
    
    const {title} = to.meta;
    
    if(title) {
        document.title = `Donner | ${title}`;
    }

    const authorizationRequired = to.meta.authorizationRequired;
    
    const authorization = CookieUtility.nibble("authorization");
    
    if(authorizationRequired){
        if(!authorization) {
            
            const {
                host, protocol
            } = window.location;

            
            window.location = `${protocol || 'http:'}//${host}/account/login`;
            
            return;
        }
    }
    
    next();
});

export default router;
