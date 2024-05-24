const AccountRoutes = [
    {
        path: "/account/sign-up",
        name: "Sign Up",
        component: () => import("../views/account/SignUp.vue"),
        meta: {
            title: "Sign up to publish your fundraiser",
            navigationDisplay: {
                showNavigationBar: false,
                showFooter: false
            }
        }
    },
    {
        path: "/account/login",
        name: "Login",
        component: () => import("../views/account/Login.vue"),
        meta: {
            title: "Login to manage your fundraiser",
            navigationDisplay: {
                showNavigationBar: false,
                showFooter: false
            }
        }
    },
    {
        path: "/account/verification",
        name: "Verification",
        component: () => import("../views/account/Verification.vue"),
        meta: {
            title: "Verify your account",
            navigationDisplay: {
                showNavigationBar: false,
                showFooter: false
            }
        }
    },
    {
        path: "/account/password-reset",
        name: "Password Reset",
        component: () => import("../views/account/password-reset/Index.vue"),
        meta: {
            title: "Reset your password",
            navigationDisplay: {
                showNavigationBar: false,
                showFooter: false
            }
        }
    },
    {
        path: "/account/password-reset/complete",
        name: "Complete Password Reset",
        component: () => import("../views/account/password-reset/Complete.vue"),
        meta: {
            title: "Secure your account",
            navigationDisplay: {
                showNavigationBar: false,
                showFooter: false
            }
        }
    }
];

export default AccountRoutes;

