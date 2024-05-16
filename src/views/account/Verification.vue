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
                                    <h2>Verify your account</h2>
                                    <p class="mb-4">Complete verification to manage your fundraisers.</p>
                                    <form class="form-section active">
                                        <div class="px-md-4 ps-2 pe-4 row">
                                            <div class="form-group mt-3">
                                                <label class="text-gradient text-dark text-sm">
                                                    Email
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas fa-leaf" aria-hidden="true"></i></span>
                                                    <input class="form-control form-control-lg text-lg" required email placeholder="email@email.com" >
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 pt-4">
                                                <BaseButton class="btn btn-primary float-end" type="submit">
                                                    Login
                                                </BaseButton>
                                            </div>
                                            <span class="w-100 mb-4 text-bold text-gradient text-dark">
                                                Did not receive code? 
                                                <a class="text-gradient text-primary">
                                                    <u>
                                                        Resend Code
                                                    </u>
                                                </a>
                                            </span>
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
    import BaseButton from "@/components/forms/BaseButton.vue"

    import { getNavigationStore } from "@/stores/NavigationStore";

    export default {
        components: {
            BaseButton
        },
        data() {
            return {};
        },
        beforeMount() {
            const navigationStore = getNavigationStore();

            console.log(navigationStore);
            navigationStore.$state.showNavigationBar = false;
            navigationStore.$state.showFooter = false;
        },
        beforeUnmount() {
            const navigationStore = getNavigationStore();

            navigationStore.$state.showNavigationBar = true;
            navigationStore.$state.showFooter = true;
        }
    }
</script>
