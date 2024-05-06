<template>
    <div>
        <header>
            <div class="page-header min-vh-85">
                <div class="position-fixed fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                     style="background-image: url('/img/backgrounds/join-organization.jpg'); background-size:cover;">
                </div>
                <div class="position-absolute bg-primary fixed-top me-auto w-50 h-100 z-index-0 d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                     style="background-size:cover;background-position: bottom left;">
                    <div class="position-absolute fixed-top me-auto w-100 h-100 z-index-0 d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                         style="background-size:cover; background-image: url('/img/shapes/waves-white.svg');background-position: bottom left;"></div>
                    <a href="/" class="position-absolute top-0 start-0">
                        <img src="/favicon.ico" class=" bg-white border-radius-lg p-1 m-2" style="height: 50px;">
                    </a>
                </div>
                <div class="container my-5 p-0 ">
                    <div class="row">
                        <div class="col-lg-8 d-flex justify-content-center flex-column my-0 my-sm-5">
                            <div class="card card-body blur d-flex justify-content-top px-sm-5 shadow-lg mt-md-5 mt-4 py-5 min-vh-75 rounded-0">

                                <h1 class="text-gradient text-dark mb-0">{{ isLoggedIn ? `Hi, ${user.name}` : 'Start a successful fundraiser' }} </h1>
                                <h5 class="mb-2 text-gradient text-dark">We are going to make impact together. <span class="text-primary text-gradient">🍀</span></h5>
                                <hr class="btn-round bg-gradient-success my-5 opacity-8" style="height: 5px; border-radius: 20px; transition: width 1s" :style="{width: `${(currentStep/7) * 100}%`}">
                                <div class="col-12" style="height: 45px">
                                    <button v-show="currentStep > 1" class="start-0 me-4 mt-1 btn btn-round btn-sm m text-white bg-gradient-dark ps-3 pb-2 pe-4" @click="back">
                                        <i class="fa fa-arrow-left" style="font-size: 20px"></i>
                                    </button>
                                </div>
                                <div>
                                    <div class="form-section " :class="{'active': currentStep == 1}">
                                        <h6 class="mb-2 mt-3">What are you raising for?</h6>
                                        <chip-container :options="categoryNames" v-model:selected="newFundRaiser.category" @update:selected="next"></chip-container>
                                    </div>

                                    <div class="form-section " :class="{'active': currentStep == 2}">
                                        <h6 class="mb-2 mt-3">What are you raising for?</h6>
                                        <chip-container :options="subCategoryNames" v-model:selected="newFundRaiser.subCategory" @update:selected="next"></chip-container>
                                    </div>

                                    <form class="form-section" :class="{'active': currentStep == 3}" @submit.prevent="next">
                                        <h6 class="mb-2 mt-3">Share your dream.</h6>
                                        <div class="px-md-4 ps-2 pe-4 row">
                                            <div class="form-group mt-3 col-sm-5">
                                                <label class="text-gradient text-dark text-sm">
                                                    Country
                                                </label>
                                                <select class="form-control form-control-lg mx-2" v-model="newFundRaiser.country">
                                                    <option selected>Nigeria</option>
                                                </select>
                                            </div>
                                            <div class="form-group mt-3 col-sm-7">
                                                <label class="text-gradient text-sm d-none d-sm-block">
                                                    . 
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas" aria-hidden="true">₦</i></span>
                                                    <input class="form-control form-control-lg" required v-model="newFundRaiser.target" @input="formatAmount" placeholder="Your dream amount" >
                                                    <button type="button" class="bg-white px-3 mb-0 " style="border-radius: 0 .5rem .5rem 0; border: solid 1px #141727;">
                                                        <i class="badge bg-gradient-dark text-white text-bold" aria-hidden="true">NGN</i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="form-group mt-3">
                                                <label class="text-gradient text-dark text-sm">
                                                    Is your fundraiser aimed at any Sustainable Development Goals?
                                                </label>
                                                <SDGSelect v-model:value="newFundRaiser.sdgs"></SDGSelect>
                                            </div>
                                            <div class="form-group">
                                                <BaseButton class="btn btn-primary float-end mt-3" nativeType="submit">
                                                    Next
                                                </BaseButton>
                                            </div>
                                        </div>
                                    </form>

                                    <div class="form-section " :class="{'active': currentStep == 4}">
                                        <h6 class="mb-2 mt-3">Are you doing this on behalf of a registered organization?</h6>
                                        <div class="row pt-3">
                                            <div class="p-4 col-sm-6">
                                                <button class="card card-background card-background-mask-dark move-on-hover border-white border-2" @click="newFundRaiser.type = 'organization'; next()">
                                                    <div class="card-body pt-3 text-start">
                                                        <h4 class="text-white">I Have A Team</h4>
                                                        <p>You are fundraising on behalf of an organization registered in {{ newFundRaiser.country }}. </p>
                                                    </div>
                                                </button>
                                            </div>
                                            <div class="p-4 col-sm-6">
                                                <button class="card card-background card-background-mask-primary move-on-hover border-white border-2" @click="newFundRaiser.type = 'personal'; next()">
                                                    <div class="card-body pt-3 text-start">
                                                        <h4 class="text-white">It's Personal</h4>
                                                        <p>You are fundraising to support your community, family, or personal dream. </p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <form class="form-section" :class="{'active': currentStep == 5}" @submit.prevent="next">
                                        <h6 class="mb-2 mt-3">Let donors know what you are raising for, why it is important, and how their donations will make things better.</h6>
                                        <div class="px-md-3 px-sm-1">
                                            <div class="form-group mt-4">
                                                <label class="text-gradient text-dark text-sm">
                                                    Share your story
                                                </label>
                                                <div class="form-control me-2 p-0 bg-white" style="height: 200px; overflow-y: scroll;"> 
                                                    <QuillEditor theme="snow" contentType="html" v-model:content="newFundRaiser.story" />
                                                </div>
                                            </div>
                                            <BaseButton class="float-end mt-4" nativeType="submit">
                                                Next
                                            </BaseButton>
                                        </div>
                                    </form>

                                    <div class="form-section" :class="{'active': currentStep == 6}" @submit.prevent="$router.push('/accounts/signup')">
                                        <h6 class="mb-2 mt-3">Pick an AI suggested title </h6>

                                        <div class="px-md-4 ps-2 pe-4 row">
                                            <div class="form-group mt-3">
                                                <div class="input-group mx-2">
                                                    <span class="bg-transparent input-group-text px-3"><i class="fas" aria-hidden="true">~ </i></span>
                                                    <input class="form-control form-control-lg text-lg text-dark text-bold text-gradient border-end-0" disabled="true" required value="Some random AI generated title" >
                                                    <button type="button" class="bg-transparent px-3 mb-0 border-start-0" style="border-radius: 0 .5rem .5rem 0; border: solid 1px #141727;">
                                                        <span v-if="true" class="badge bg-gradient-primary text-white text-bold" aria-hidden="true">
                                                            <i class="fa fa-check"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div class="input-group mx-2 mt-1">
                                                    <span class="bg-transparent input-group-text px-3"><i class="fas" aria-hidden="true">~ </i></span>
                                                    <input class="form-control form-control-lg text-lg text-dark text-bold text-gradient border-end-0" disabled="true" required value="Some random AI generated title" >
                                                    <button type="button" class="bg-transparent px-3 mb-0 border-start-0" style="border-radius: 0 .5rem .5rem 0; border: solid 1px #141727;">
                                                        <span v-if="true" class="badge bg-gradient-primary text-white text-bold" aria-hidden="true">
                                                            <i class="fa fa-check"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                                <div class="input-group mx-2 mt-1 mb-3">
                                                    <span class="bg-transparent input-group-text px-3"><i class="fas" aria-hidden="true">~ </i></span>
                                                    <input class="form-control form-control-lg text-lg text-dark text-bold text-gradient border-end-0" disabled="true" required value="Some random AI generated title" >
                                                    <button type="button" class="bg-transparent px-3 mb-0 border-start-0" style="border-radius: 0 .5rem .5rem 0; border: solid 1px #141727;">
                                                        <span v-if="true" class="badge bg-gradient-primary text-white text-bold" aria-hidden="true">
                                                            <i class="fa fa-check"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                                <label class="text-gradient text-dark text-sm mx-2">
                                                    Or write your own
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas" aria-hidden="true">Title: </i></span>
                                                    <input class="form-control form-control-lg text-lg text-dark text-bold border-end-0" required v-model="newFundRaiser.title" placeholder="" >
                                                    <button type="button" class="bg-white px-3 mb-0 border-start-0" style="border-radius: 0 .5rem .5rem 0; border: solid 1px #141727;">
                                                        <span v-if="false" class="badge bg-gradient-primary text-white text-bold" aria-hidden="true">
                                                            <i class="fa fa-check"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <BaseButton @click="$router.push('/account/sign-up')" class="btn btn-primary float-end mt-3" nativeType="submit">
                                                    Create
                                                </BaseButton>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- -------- START HEADER 5 w/ text and illustration ------- -->
    </div>
</template>

<script>
    /* packages */
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.snow.css';

    /* components */
    import ChipContainer from '@/components/forms/ChipContainer.vue';
    import SDGSelect from '@/components/forms/SDGSelect.vue';
    import BaseButton from "@/components/forms/BaseButton.vue"

    /* services */
    import ConfigurationService from '@/services/ConfigurationService';
    import FundRaiserService from '@/services/FundRaiserService';
    import NavigationService from "@/services/NavigationService";
    import UserService  from "@/services/UserService";

    export default {
        components: {
            QuillEditor,
            ChipContainer,
            SDGSelect,
            BaseButton
        },
        data() {
            return {
                user: null,
                categories: [],
                currentStep: 1,
                isLoggedIn: false,
                newFundRaiser: {}
            };
        },
        async beforeMount() {

            this.newFundRaiser = await FundRaiserService.get("newFundRaiser");

            this.categories = await ConfigurationService.get('categories');

            this.currentStep = await FundRaiserService.get('createFundRaiserCurrentStep') || 1;

            NavigationService.set('showNavigationBar', false);
            NavigationService.set('showFooter', false);

        },
        beforeUnmount() {

            NavigationService.set('showNavigationBar', true);
            NavigationService.set('showFooter', true);
        },
        async mounted() {

            this.user = {
                name: await UserService.get('name')
            };

            this.isLoggedIn = await UserService.get('authorization');
        },
        computed: {
            categoryNames() {
                return this.categories.map(category => category.name);
            },
            subCategoryNames() {
                const selectedCategory = this.categories.find(category => category.name === this.newFundRaiser.category);
                if (selectedCategory) {
                    return selectedCategory.subCategories;
                } else
                    return [];
            }
        },
        methods: {

            formatAmount(event) {
                // Remove non-numeric characters from input value
                const value = parseFloat(this.newFundRaiser.target.replace(/[^\d.]/g, ''));

                let amount;

                if (value) {
                    amount = Math.abs(value);

                    if (amount > 100000000000) {
                        amount = 100000000000;
                    }
                } else {
                    this.newFundRaiser.target = '';
                    return;
                }

                // Format the number with commas
                const formattedAmount = amount.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                // Update the input value
                this.newFundRaiser.target = `${formattedAmount}`;

            },

            next() {

                FundRaiserService.set('createFundRaiserCurrentStep', ++this.currentStep);
                
                const newFundRaiser = JSON.parse(JSON.stringify(this.newFundRaiser));
                
                FundRaiserService.set("newFundRaiser", newFundRaiser);
            },

            back() {
                this.currentStep = this.currentStep - 1 || 1;

                FundRaiserService.set('createFundRaiserCurrentStep', this.currentStep);

                FundRaiserService.set("newFundRaiser", {...this.newFundRaiser});
            }

        }

    }
</script>
<style>

    .form-section {
        opacity: 0;
        min-height: 0;
        display: none;
    }

    .form-section.active {
        opacity: 1;
        display: block;
        -webkit-animation: fadeinout 1s linear;
        animation: fadeinout 1s linear;
    }

    @-webkit-keyframes fadeinout {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes fadeinout {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>