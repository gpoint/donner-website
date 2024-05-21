<template>
    <div>

        <section>
            <div class="page-header min-vh-100 align-items-start" style="background-image: url('/img/backgrounds/curved19.jpg');">
                <span class="mask bg-gradient-dark opacity-4"></span>
                <div class="container px-sm-auto px-0">
                    <div class="row">
                        <div class="col-lg-6 col-md-7 mx-sm-auto mx-0 my-4 px-0 px-sm-auto py-sm-7">
                            <div class="card blur rounded-0 min-vh-80">
                                <div class="card-body px-lg-5 py-lg-5 text-start">
                                    <div class="success mb-4">
                                        <a href="/" class="icon icon-shape icon-xl rounded-circle bg-white shadow text-center p-3 mx-auto">
                                            <img src='/img/icon.png' class="w-90 h-90 mt-1">
                                        </a>
                                    </div>
                                    <h2>Welcome back</h2>
                                    <p class="mb-4">Sign in to manage fundraisers.</p>
                                    <form class="form-section active" @submit.prevent="login">
                                        <div class="px-md-4 ps-2 pe-4 row">
                                            <div class="form-group mt-3">
                                                <label class="text-gradient text-dark text-sm">
                                                    Email
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas fa-leaf" aria-hidden="true"></i></span>
                                                    <input class="form-control form-control-lg text-lg" required type="email" placeholder="email@email.com" v-model="loginModel.email" :disabled="formDisabled">
                                                </div>
                                            </div>
                                            <div class="form-group mt-3">
                                                <label class="text-gradient text-dark text-sm">
                                                    Password
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas fa-lock" aria-hidden="true"></i></span>
                                                    <input class="form-control form-control-lg text-lg" required type="password" placeholder="* * * * * * * *" v-model="loginModel.password" :disabled="formDisabled">
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 mx-2">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="rememberMe" v-model="loginModel.rememberDevice" :disabled="formDisabled">
                                                    <label class="form-check-label" for="rememberMe">
                                                        Stay logged in on this device
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 pt-4">
                                                <span class="text-lg text-gradient text-dark">
                                                    Don't have an account?
                                                    <RouterLink to="/account/sign-up" class="text-primary text-bold text-gradient">
                                                        Sign Up
                                                    </RouterLink>
                                                </span>
                                                <BaseButton class="btn btn-primary float-end" :loading="loading" nativeType="submit">
                                                    Login
                                                </BaseButton>
                                            </div>
                                            <RouterLink to="/account/password-reset" class="w-100 mb-4 text-bold text-primary">
                                                Don't remember your password?
                                            </RouterLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
    
    /* components */
    import BaseButton from "@/components/forms/BaseButton.vue";
    
    /* services */
    import AccountService from "@/services/AccountService";

    /* stores */
    import { getNavigationStore } from "@/stores/NavigationStore";
    import { getNotificationStore } from '@/stores/NotificationStore';

    export default {
        components: {
            BaseButton
        },
        data() {
            return {
                loading: false,
                loginModel: {
                    email: "",
                    password: "",
                    rememberDevice: false
                }
            };
        },
        beforeMount() {
            const navigationStore = getNavigationStore();

            navigationStore.$state.showNavigationBar = false;
            navigationStore.$state.showFooter = false;
        },
        beforeUnmount() {
            const navigationStore = getNavigationStore();

            navigationStore.$state.showNavigationBar = true;
            navigationStore.$state.showFooter = true;
        },
        computed: {
            
            formDisabled() {
                return this.loading || undefined;
            }
        },
        methods: {
            
            async login() {
                
                try {
                    
                    this.loading = true;
                    this.$Progress.start();
                    
                    const loginPayload = {
                        ...this.loginModel
                    };

                    const user = await AccountService.login(loginPayload);
                    
                    await AccountService.initiateAccountVerification({});

                    this.$router.push({
                        name: "Verification"
                    });
                    
                } catch (error) {
                    
                    console.log(error);
                    
//                    const notificationStore = getNotificationStore();
//                    
//                    notificationStore.toast(error.getToast());
                }
                    
                this.loading = false;
                this.$Progress.finish();
            }
        }
    }
</script>
