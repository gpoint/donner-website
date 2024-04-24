/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */



const AccountRoutes = [
    {
        path: "/account/sign-up",
        name: "Sign Up",
        component: () => import("../views/account/SignUp.vue"),
        meta: {
            title: "Sign up to publish your fundraiser"
        }
    },
    {
        path: "/account/login",
        name: "Login",
        component: () => import("../views/account/Login.vue"),
        meta: {
            title: "Login to manage your fundraiser"
        }
    },
    {
        path: "/account/password-reset",
        name: "Password Reset",
        component: () => import("../views/account/password-reset/Index.vue"),
        meta: {
            title: "Reset your password"
        }
    },
    {
        path: "/account/password-reset/complete",
        name: "Complete Password Reset",
        component: () => import("../views/account/password-reset/Complete.vue"),
        meta: {
            title: "Secure your account"
        }
    }
];

export default AccountRoutes;

