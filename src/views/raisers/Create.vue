<template>
    <div>
        <header>
            <div class="page-header min-vh-85">
                <div class="position-absolute fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                     style="background-image: url('/img/backgrounds/join-organization.jpg'); background-size:cover;">
                </div>
                <div class="position-absolute bg-primary fixed-top me-auto w-50 h-100 z-index-0 d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                     style="background-size:cover;background-position: bottom left;">
                    <div class="position-absolute fixed-top me-auto w-100 h-100 z-index-0 d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                         style="background-size:cover; background-image: url('/img/shapes/waves-white.svg');background-position: bottom left;"></div>
                </div>
                <div class="container my-5 p-0 ">
                    <div class="row">
                        <div class="col-lg-8 d-flex justify-content-center flex-column my-0 my-sm-5">
                            <div class="card card-body blur d-flex justify-content-top px-sm-5 shadow-lg mt-md-5 mt-4 py-5 min-vh-75 rounded-0">

                                <h1 class="text-gradient text-dark mb-0">Start a successful raiser</h1>
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
                                        <chip-container :options="categoryNames" v-model:selected="createModel.category" @update:selected="next"></chip-container>
                                    </div>

                                    <div class="form-section " :class="{'active': currentStep == 2}">
                                        <h6 class="mb-2 mt-3">What are you raising for?</h6>
                                        <chip-container :options="subCategoryNames" v-model:selected="createModel.subCategory" @update:selected="next"></chip-container>
                                    </div>

                                    <form class="form-section" :class="{'active': currentStep == 3}" @submit.prevent="next">
                                        <h6 class="mb-2 mt-3">Share your dream.</h6>
                                        <div class="px-md-4 ps-2 pe-4 row">
                                            <div class="form-group mt-3 col-sm-5">
                                                <label class="text-gradient text-dark text-sm">
                                                    Country
                                                </label>
                                                <select class="form-control form-control-lg mx-2" v-model="createModel.country">
                                                    <option selected>Nigeria</option>
                                                </select>
                                            </div>
                                            <div class="form-group mt-3 col-sm-7">
                                                <label class="text-gradient text-sm d-none d-sm-block">
                                                    . 
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas" aria-hidden="true">₦</i></span>
                                                    <input class="form-control form-control-lg" required v-model="createModel.target" @input="formatAmount" placeholder="Your dream amount" >
                                                    <button type="button" class="bg-white px-3 mb-0 " style="border-radius: 0 .5rem .5rem 0; border: solid 1px #141727;">
                                                        <i class="badge bg-gradient-dark text-white text-bold" aria-hidden="true">NGN</i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="form-group mt-3">
                                                <label class="text-gradient text-dark text-sm">
                                                    Is your fundraiser aimed at any Sustainable Development Goals?
                                                </label>
                                                <SDGSelect v-model:value="createModel.sdgs"></SDGSelect>
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
                                                <button class="card card-background card-background-mask-dark move-on-hover border-white border-2" @click="createModel.type = 'organization'; next()">
                                                    <div class="card-body pt-3 text-start">
                                                        <h4 class="text-white">I Have A Team</h4>
                                                        <p>You are fundraising on behalf or an organization registered in {{ createModel.country }}. </p>
                                                    </div>
                                                </button>
                                            </div>
                                            <div class="p-4 col-sm-6">
                                                <button class="card card-background card-background-mask-primary move-on-hover border-white border-2" @click="createModel.type = 'personal'; next()">
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
                                                <div class="form-control me-2 p-0"> 
                                                    <Editor api-key='5sdijamp3cqt1ppqdvt09ru3r6nfsyy5ye80wy4ynp851pxx' :init="editorOptions" />
                                                </div>
                                            </div>
                                            <BaseButton class="float-end mt-4" nativeType="submit">
                                                Next
                                            </BaseButton>
                                        </div>
                                    </form>

                                    <div class="form-section " :class="{'active': currentStep == 6}" @submit.prevent="$router.push('/accounts/signup')">
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
                                                    <input class="form-control form-control-lg text-lg text-dark text-bold border-end-0" required v-model="createModel.title" placeholder="" >
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
    import Editor from '@tinymce/tinymce-vue';
    import ChipContainer from '@/components/forms/ChipContainer.vue';
    import SDGSelect from '@/components/forms/SDGSelect.vue';
    import BaseButton from "@/components/forms/BaseButton.vue"
    import ConfigurationService from '@/services/ConfigurationService';

    const categories = ConfigurationService.get('categories');

    export default {
        components: {
            Editor,
            ChipContainer,
            SDGSelect,
            BaseButton
        },
        data() {
            return {
                categories,
                currentStep: 1,
                editorOptions: {
                    menubar: '',
                    height: 200,
                    max_height: 250,
                    toolbar: 'undo redo | blocks | bold italic underline',
                    placeholder: 'Hello, my name is Sina and I am raising funds for...'
                },
                createModel: {
                    category: '',
                    subCategory: '',
                    title: '',
                    description: '',
                    country: 'Nigeria',
                    goal: '',
                    image: '',
                    target: '',
                    sdgs: []
                }
            };
        },
        mounted() {

        },
        computed: {
            categoryNames() {
                return this.categories.map(category => category.name);
            },
            subCategoryNames() {
                const selectedCategory = this.categories.find(category => category.name === this.createModel.category);
                if (selectedCategory) {
                    return selectedCategory.subCategories;
                } else
                    return [];
            }
        },
        methods: {

            formatAmount(event) {
                // Remove non-numeric characters from input value
                const value = parseFloat(this.createModel.target.replace(/[^\d.]/g, ''));

                let amount;

                if (value) {
                    amount = Math.abs(value);

                    if (amount > 100000000000) {
                        amount = 100000000000;
                    }
                } else {
                    this.createModel.target = '';
                    return;
                }

                // Format the number with commas
                const formattedAmount = amount.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

                // Update the input value
                this.createModel.target = `${formattedAmount}`;

            },

            next() {
                this.currentStep++;
            },

            back() {
                this.currentStep = this.currentStep - 1 || 1;
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