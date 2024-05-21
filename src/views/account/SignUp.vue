<template>
    <div>

        <section>
            <div class="page-header min-vh-100 align-items-start" style="background-image: url('/img/backgrounds/curved19.jpg');">
                <span class="mask bg-gradient-dark opacity-4"></span>
                <div class="container px-sm-auto px-0">
                    <div class="row">
                        <div class="col-lg-7 col-md-9 mx-sm-auto mx-0 my-4 px-0 px-sm-auto py-sm-7">
                            <div class="card blur rounded-0 min-vh-80">
                                <div class="card-body px-lg-5 py-lg-5 text-start">
                                    <div class="success mb-4">
                                        <a href="/" class="icon icon-shape icon-xl rounded-circle bg-white shadow text-center p-3 mx-auto">
                                            <img src='/img/icon.png' class="w-90 h-90 mt-1">
                                        </a>
                                    </div>
                                    <h2>Create an account</h2>
                                    <p class="mb-4">Sign up to publish and share your fundraiser.</p>
                                    <form class="form-section active" @submit.prevent="signUp">
                                        <div class="px-md-4 ps-2 pe-4 row">
                                            <div class="col-12">
                                                <FormMessage v-model:type="responseMessage.type" v-model:html="responseMessage.html"></FormMessage>
                                            </div>
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm">
                                                    First name
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3">
                                                        <i class="fas fa-user" aria-hidden="true"></i>
                                                    </span>
                                                    <input class="form-control form-control-lg text-lg" v-model="signUpModel.firstName" required placeholder="Hau'wa" :disabled="formDisabled" >
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm">
                                                    Last name
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3">
                                                        <i class="fas fa-user" aria-hidden="true"></i>
                                                    </span>
                                                    <input class="form-control form-control-lg text-lg" v-model="signUpModel.lastName" required placeholder="John" :disabled="formDisabled" >
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm">
                                                    Email
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3">
                                                        <i class="fas fa-envelope" aria-hidden="true"></i>
                                                    </span>
                                                    <input class="form-control form-control-lg text-lg" required v-model="signUpModel.email" type="email" placeholder="first.last@donner.africa" :disabled="formDisabled" >
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm">
                                                    Phone
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text ps-3 pe-1 py-0">
                                                        <span class="" aria-hidden="true">
                                                            <i class="fas fa-phone"></i>
                                                        </span>
                                                        <select class="form-control form-control-lg text-lg border-0 ms-2" v-model="signUpModel.countryCode" :disabled="formDisabled" >
                                                            <option>+234</option>
                                                        </select>

                                                    </span>
                                                    <input class="form-control form-control-lg text-lg" v-model="signUpModel.phone" required type="tel" max-length="12" placeholder="8107758090" :disabled="formDisabled" >
                                                    <button class="bg-white px-3 mb-0 " type="button" style="border-radius: 0 .5rem .5rem 0; border: solid 1px #141727;">
                                                        🇳🇬
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm">
                                                    Password
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3">
                                                        <i class="fas fa-lock" aria-hidden="true"></i>
                                                    </span>
                                                    <input class="form-control form-control-lg text-lg" v-model="signUpModel.password" required type="password" placeholder="********" :disabled="formDisabled" >
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm w-100">
                                                    Confirm Password
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3">
                                                        <i class="fas fa-lock" aria-hidden="true"></i>
                                                    </span>
                                                    <input class="form-control form-control-lg text-lg" v-model="signUpModel.confirmPassword" required type="password" placeholder="********" :disabled="formDisabled" >
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 mx-2">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" checked="true" id="receiveUpdates" v-model="signUpModel.receiveUpdates" :disabled="formDisabled" >
                                                    <label class="form-check-label" for="receiveUpdates">
                                                        Receive raising tips and updates on noteworthy fundraising events from <span class="text-bold text-gradient text-primary">your favorite philanthropy team</span>.
                                                        You can unsubscribe at any time.
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="form-group mt-3">
                                                <span class="text-lg text-gradient text-dark">
                                                    Have an account?
                                                    <RouterLink to="/account/login" class="text-primary text-bold text-gradient">
                                                        Login
                                                    </RouterLink>
                                                </span>
                                                <BaseButton type="primary" nativeType="submit" class="float-end" :loading="loading">
                                                    Sign Up
                                                </BaseButton>
                                            </div>
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
    import BaseButton from "@/components/forms/BaseButton.vue"
    import FormMessage from "@/components/forms/FormMessage.vue";

    /* services */
    import AccountService from "@/services/AccountService";
    
    /* stores */
    import { getNavigationStore } from "@/stores/NavigationStore";

    export default {
        components: {
            BaseButton,
            FormMessage
        },
        data() {
            return {
                loading: false,
                signUpModel: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    countryCode: '+234',
                    phone: '',
                    password: '',
                    confirmPassword: ''
                },
                responseMessage: {
                    text: null,
                    type: 'danger'
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

            async signUp() {
                
                if(this.signUpModel.password !== this.signUpModel.confirmPassword) {
                    
                    this.responseMessage = {
                        html: 'Your passwords do not match. <br/>Confirm your password.',
                        type: 'danger'
                    };
                    
                    return;
                }

                this.loading = true;
                this.$Progress.start();
                
                try {
                    const payload = {
                        firstName: this.signUpModel.firstName,
                        lastName: this.signUpModel.lastName,
                        email: this.signUpModel.email,
                        countryCode: this.signUpModel.countryCode,
                        phone: this.signUpModel.phone,
                        password: this.signUpModel.password
                    };

                    const user = await AccountService.registerUser(payload);
                    
                    const { verified } = user;
                    
                    await AccountService.initiateAccountVerification({ });
                    
                    this.$router.push({
                        name: "Verification"
                    });
                    
                } catch (error) {

                    this.responseMessage = {
                        html: `<strong>${error.message}</strong>`,
                        type: 'danger'
                    };
                }

                this.loading = false;
                this.$Progress.finish();
            }
        }
    }
</script>
