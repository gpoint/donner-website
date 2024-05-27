<template>
    <div>
        <header>
            <a href="/" class="position-fixed top-0 start-0" style="z-index: 200">
                <img src="/favicon.ico" class=" bg-white border-radius-lg p-1 m-2" style="height: 50px;">
            </a>
            <div class="page-header min-vh-100" style="align-items: start;">
                <div class="position-fixed fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                     style="background-image: url('/img/backgrounds/join-organization.jpg'); background-size:cover;">
                </div>
                <div class="position-absolute bg-primary fixed-top me-auto w-100 w-sm-50 h-100 z-index-0 d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                     style="background-size:cover;background-position: bottom left;">
                    <div class="position-absolute fixed-top me-auto w-100 h-100 z-index-0 d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                         style="background-size:cover; background-image: url('/img/shapes/waves-white.svg');background-position: bottom left;"></div>
                </div>
                <div class="container my-0 my-sm-5 p-0 ">
                    <div class="row">
                        <div class="col-lg-8 d-flex justify-content-center flex-column my-0 my-sm-5">
                            <div class="card card-body blur d-flex justify-content-top px-sm-5 shadow-lg mt-md-5 mt-sm-4 mt-0 py-5 pb-10 pb-sm-5 min-vh-75 rounded-0">

                                <h1 class="text-gradient text-dark mb-0 mt-8 mt-sm-0">{{ isLoggedIn ? `Hi, ${user.fullName}` : 'Start a successful fundraiser' }} </h1>
                                <h5 class="mb-2 text-gradient text-dark">We are going to make impact together. <span class="text-primary text-gradient">🍀</span> </h5>
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
                                                    <option value="Nigeria">Nigeria</option>
                                                </select>
                                            </div>
                                            <div class="form-group mt-3 col-sm-7">
                                                <label class="text-gradient text-sm d-none d-sm-block">
                                                    . 
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas" aria-hidden="true">₦</i></span>
                                                    <input class="form-control form-control-lg" required v-model="newFundRaiser.target" @input="formatAmount" placeholder="Your dream amount" >
                                                    <button type="button" class="bg-white px-3 mb-0 " style="border-radius: 0 .5rem .5rem 0; border: solid 1px #195706;">
                                                        <i class="badge bg-gradient-dark text-white text-bold" aria-hidden="true">{{ newFundRaiser.currency }}</i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="form-group mt-3">
                                                <label class="text-gradient text-dark text-sm">
                                                    Is your fundraiser aimed at any Sustainable Development Goals?
                                                </label>
                                                <SDGSelect :value="newFundRaiser.sdgs"></SDGSelect>
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
                                        <div class="row pt-3 h-100">
                                            <div class="p-4 col-sm-6 h-100">
                                                <button class="card card-background card-background-mask-dark move-on-hover border-white border-2" @click="newFundRaiser.type = 'TEAM'; next()">
                                                    <div class="card-body pt-3 text-start">
                                                        <h4 class="text-white">I Have A Team</h4>
                                                        <p>You are fundraising on behalf of an organization registered in {{ newFundRaiser.country }}. </p>
                                                    </div>
                                                </button>
                                            </div>
                                            <div class="p-4 col-sm-6 h-100">
                                                <button class="card card-background card-background-mask-primary move-on-hover border-white border-2" @click="newFundRaiser.type = 'PERSONAL'; next()">
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
                                                <div class="form-control me-2 p-0 bg-white" style="height: 200px; overflow: visible scroll; z-index: 30;"> 
                                                    <QuillEditor theme="bubble" contentType="html" v-model:content="newFundRaiser.story" placeholder="Hi, my name is Sina and I am fundraising for..." />
                                                </div>
                                            </div>
                                            <BaseButton class="float-end mt-4" nativeType="submit">
                                                Next
                                            </BaseButton>
                                        </div>
                                    </form>

                                    <form class="form-section" :class="{'active': currentStep == 6}" @submit.prevent="create">
                                        <h6 class="mb-2 mt-3">
                                            {{ newFundRaiser.titleMode === 'pick'  ? 'Pick an AI suggested title.' : 'Give your fundraiser an amazing title.' }}
                                        </h6>

                                        <div class="px-md-4 ps-2 pe-4 row">
                                            <div class="form-group mt-3" v-if="newFundRaiser.titleMode === 'pick'">
                                                <div class="input-group mx-2 mb-3" :class="{'bg-gradient-primary': !generatedTitle, ' border-primary bg-white': generatedTitle === newFundRaiser.title }" v-for="(generatedTitle) in generatedTitles" :key="generatedTitle" @click="newFundRaiser.title = generatedTitle">
                                                    <span v-if="generatedTitle" class="bg-transparent input-group-text px-3">
                                                        <i class="fas fa-arrow-circle-right" :class="{'text-primary': generatedTitle === newFundRaiser.title}" aria-hidden="true"> </i>
                                                    </span>

                                                    <input class="form-control form-control-lg text-lg text-dark text-gradient text-bold border-end-0" style="cursor: pointer" readonly="true" :value="generatedTitle" :class="{ 'skeleton-loader': !generatedTitle }" >

                                                    <button v-if="generatedTitle" type="button" class="bg-transparent px-3 mb-0 border-start-0" style="border-radius: 0 .5rem .5rem 0; border: solid 1px #141727;">
                                                        <span v-if="newFundRaiser.title === generatedTitle" class="badge bg-gradient-primary text-white text-bold" aria-hidden="true">
                                                            <i class="fa fa-check"></i>
                                                        </span>
                                                    </button>
                                                </div>
                                                <a href="#" @click.prevent="newFundRaiser.titleMode = 'write'" class="text-gradient text-primary text-bold text-sm mx-2 mt-2">
                                                    ... or come up with something better.
                                                </a>
                                            </div>
                                            <div class="form-group mt-3" v-if="newFundRaiser.titleMode === 'write'">
                                                <div class="input-group mx-2 my-6 bg-white">

                                                    <input class="form-control form-control-lg text-center text-lg text-dark text-gradient text-bold " v-model="newFundRaiser.title" placeholder="Your amazing title...">

                                                </div>
                                                <a href="#" @click.prevent="generateTitles" class="text-gradient text-primary text-bold text-sm mx-2 mt-2">
                                                    ... or choose an AI suggested titles.
                                                </a>
                                            </div>
                                            <div class="form-group">
                                                <BaseButton :disabled="newFundRaiser.title ? undefined : true" :loading="loading" class="btn btn-primary float-end mt-3" nativeType="submit">
                                                    Create
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
        </header>
        <!-- -------- START HEADER 5 w/ text and illustration ------- -->
    </div>
</template>

<script>
    /* external packages */
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.bubble.css';

    /* components */
    import ChipContainer from '@/components/forms/ChipContainer.vue';
    import SDGSelect from '@/components/forms/SDGSelect.vue';
    import BaseButton from "@/components/forms/BaseButton.vue"

    /* services */
    import ConfigurationService from '@/services/ConfigurationService';
    import FundRaiserService from '@/services/FundRaiserService';
    import NavigationService from "@/services/NavigationService";
    import UserService  from "@/services/UserService";
    
    /* stores */
    import { getNotificationStore } from "@/stores/NotificationStore";

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
                loading: false,
                categories: [],
                currentStep: 1,
                isLoggedIn: false,
                generatedTitles: ['', '', ''],
                newFundRaiser: {}
            };
        },
        async beforeMount() {

            this.newFundRaiser = await FundRaiserService.get("newFundRaiser");
            
            this.categories = ConfigurationService.get('fundRaiserCategories');

            this.currentStep = await FundRaiserService.get('createFundRaiserCurrentStep') || 1;
            
            this.isLoggedIn = await UserService.get("isLoggedIn");

        },
        async mounted() {

            this.user = {
                ...await UserService.get('user')
            };
            
            this.newFundRaiser.titleMode = "write";
            
        },
        computed: {

            categoryNames() {

                return this.categories.map(category => category.name);
            },

            subCategoryNames() {

                const selectedCategory = this.categories.find(category => category.name === this.newFundRaiser.category);

                if (selectedCategory) {

                    return selectedCategory.subCategories;

                } else {

                    return [];
                }
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

            async generateTitles() {

                this.newFundRaiser.titleMode = "pick";

                const generatedTitles = this.generatedTitles || ['','',''];
                
                if (generatedTitles[0]) {

                    return;
                }

                try {

                    const div = document.createElement("div");

                    div.innerHTML = new String(this.newFundRaiser.story).replaceAll(".", ". ");

                    const story = div.innerText;

                    const titles = await FundRaiserService.generateTitlesForStory(story);

                    this.generatedTitles = titles;

                } catch (e) {

                    this.generatedTitles = generatedTitles;

                    this.newFundRaiser.titleMode = "write";

                }
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

                FundRaiserService.set("newFundRaiserIsComplete", false);
                
            },

            async create() {
                
                this.loading = true;
                
                this.$Progress.start();

                await FundRaiserService.set("newFundRaiserIsComplete", true);
                
                const newFundRaiser = JSON.parse(JSON.stringify(this.newFundRaiser));
                        
                newFundRaiser.target = `${newFundRaiser.target}`.replaceAll(",", "");

                await FundRaiserService.set("newFundRaiser", {...newFundRaiser});

                if (!this.isLoggedIn) {

                    NavigationService.set("postAuthenticationPath", "/raisers/create");

                   return this.$router.push("/account/sign-up");

                }
                    
                try {

                    await FundRaiserService.commitNewFundRaiser(newFundRaiser);
                    
                    this.$router.push("/raisers/review");

                } catch (error) {

                    if(error.getToast) {

                        const notificationStore = getNotificationStore();

                        notificationStore.toast(error.getToast());

                    } else console.log(error);
                }

                this.loading = false;
                
                this.$Progress.finish();

            }

        }

    }
</script>
<style>
    div.ql-container.ql-bubble{
        overflow: scroll scroll;
        position: absolute;
        width: 90%;
        height: 195px;
    }
    
    @media(min-width: 722px) {
        
        div.ql-container.ql-bubble{
            width: 85%;
        }
    }
    @media(min-width: 570px) {
        
        div.ql-container.ql-bubble{
            width: 80%;
        }
    }

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