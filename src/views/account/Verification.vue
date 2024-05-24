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
                                    <form class="form-section active" @submit.prevent="completeVerification">
                                        <div class="px-md-4 ps-2 pe-4 row">
                                            <div class="form-group mt-3">

                                                <div class="row">
                                                    <div class="col" v-for="n in 6" :key="n">
                                                        <div class="form-group">
                                                            <input type="text" 
                                                                   class="form-control form-control-lg text-center" 
                                                                   maxlength="1" 
                                                                   v-model="token[n]"
                                                                   autocomplete="off" 
                                                                   :disabled="formDisabled"
                                                                   autocapitalize="none" 
                                                                   :ref="'otpInput' + n"
                                                                   @paste.prevent="paste"
                                                                   @input="focusNext($event, n)">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 pt-4">
                                                <BaseButton class="btn btn-primary float-end" :loading="loading" nativeType="submit">
                                                    Proceed
                                                </BaseButton>
                                            </div>
                                            <span class="w-100 mb-4 text-bold text-gradient text-dark" v-if="resendWaitTime == 0">
                                                Did not receive code? 
                                                <span @click="reInitiateVerification" style="cursor: pointer" class="text-gradient text-primary">
                                                    <u>
                                                        Resend Code
                                                    </u>
                                                </span>
                                            </span>
                                            <span class="w-100 mb-4 text-gradient text-dark" v-else>
                                                Please wait for the verification code in {{ formattedResendWaitTime }}
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
    /* components */
    import BaseButton from "@/components/forms/BaseButton.vue";

    /* services */
    import AccountService from "@/services/AccountService";

    /* stores */
    import { getNavigationStore } from "@/stores/NavigationStore";
    import { getNotificationStore } from "@/stores/NotificationStore";
    
    /* utilities */
    import CookieUtility from "@/utilities/CookieUtility";

    export default {
        components: {
            BaseButton
        },
        data() {
            return {
                loading: false,
                resendCount: 0,
                resendWaitTime: 0,
                token: []
            };
        },
        beforeMount() {
            
            const preAuthorized = CookieUtility.nibble("preAuthorization");
            
            if(!preAuthorized) {
                
                this.$router.push("/account/login");
            }

        },
        computed: {
            formDisabled() {
                return this.loading || undefined;
            },

            formattedResendWaitTime() {

                return this.resendWaitTime;
            }
        },
        methods: {

            paste(event, n) {

                const value = (event.clipboardData || window.clipboardData).getData("text").trim();

                this.token = ["", ...value.split("")];

                if (value.length === 6) {
                    this.completeVerification();
                }
            },

            focusNext(event, n) {

                const value = `${event.target.value}`.trim();

                if (n == 6 && value) {

                    return this.completeVerification();
                }

                if (value.length === 1 && n < 6) {

                    const nextNodeKey = 'otpInput' + (n + 1);

                    this.$refs[nextNodeKey][0].focus();
                }
                if (value.length === 0 && n > 1) {

                    this.$refs['otpInput' + (n - 1)][0].focus();
                }
            },

            async completeVerification() {

                this.loading = true;

                try {

                    const code = this.token.reduce((prev, next) => `${prev}${next}`);

                    const passwordResetId = this.passwordResetId;

                    const data = await AccountService.completeAccountVerification({ code });

                    if (data) {
                        
                        // if any,
                        // save complete raiser
                        this.$router.push("/raisers/review");
                        
                        // else
                        // go to /account/me
                    }
                } catch (error) {

                    const notificationStore = getNotificationStore();
                    
                    notificationStore.toast(error.getToast());
                }

                this.loading = false;
            },

            async reInitiateVerification() {

                try {
                    const verification = await AccountService.initiateAccountVerification({});

                    this.resendCount = this.resendCount + 1;
                } catch (error) {
                    console.log(error);
                }
            }
        }
    }
</script>
