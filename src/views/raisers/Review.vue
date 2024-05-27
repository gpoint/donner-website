<template>
    <div>
        <header>
            <a href="/" class="position-fixed top-0 start-0" style="z-index: 200">
                <img src="/favicon.ico" class=" bg-white border-radius-lg p-1 m-2" style="height: 50px;">
            </a>
            <div class="page-header min-vh-100" style="align-items: start;">
<!--                <div class="position-fixed fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                     style="background-image: url('/img/shapes/waves-green.png'); background-size:cover;">
                </div>-->
<!--                <div class="position-absolute bg-primary fixed-top me-auto w-100 h-100 z-index-0 d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                     style="background-size:cover;background-position: bottom left;">
                    <div class="position-absolute fixed-top me-auto w-100 h-100 z-index-0 d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                         style="background-size:cover; background-image: url('/img/shapes/waves-white.svg');background-position: bottom left;"></div>
                </div>-->
                <div class="ps-0 pe-0 w-100 my-0 p-0 ">
                    <div class="row">
                        <div class="col-lg-12 d-flex justify-content-center flex-column my-0">
                            <div id="reviewPane" class="card card-body blur d-flex justify-content-top px-sm-5 shadow-lg mt-0 pt-5 pb-4 min-vh-100 rounded-0 position-relative" style="">
                                
                                <div class="h-100 position-relative" style="display: contents;">
                                    <h1 class="text-gradient text-dark mb-0 mt-8 mt-sm-0 ms-auto me-auto text-center">Your fundraiser is almost ready.</h1>
                                    <h5 class="mb-2 text-gradient text-dark ps-3 ms-auto me-auto">We're one click away from impact. <span class="text-primary text-gradient">🍀</span> </h5>
                                    <!--<hr class="btn-round bg-gradient-success my-5 opacity-8" style="height: 5px; border-radius: 20px; transition: width 1s" :style="{width: '98%'}">-->
                                    <div class="row">
                                        <div class="col-lg-7 col-md-10 col-sm-10 px-sm-5 px-4 pt-6 ms-auto me-auto">
                                            <div class="row position-relative">
<!--                                                    <div style="height: 50px; background: linear-gradient(90deg, #ffff, #fff); bottom: 0; position: fixed;"></div>-->
                                                <div class="col-12">
                                                    <div @click="openImageSelectionDialog" class="position-relative w-100 border border-light border-3 rounded-3 bg-gradient-light text-center align-items-center" style="height:300px; cursor: pointer;">
                                                        <div ref="fundRaiserBannerImage" class="position-absolute opacity-2 w-100 h-100 d-none d-sm-none d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                                                             style="background-image: url('/img/shapes/waves-green.png'); background-size:cover;"></div>

                                                        <span class="rounded-3 border bg-light opacity-8 d-inline-block p-3 mt-7 border-white">
                                                            Click here to add a picture.
                                                            <br>
                                                            <span class="text-sm"> ... it will be worth a thousand words.</span>
                                                        </span>

                                                        <input @change="openImageCropper" class="d-none" type="file" accept="image/*" ref="imageFileUploadInput" @click="openImageCropper">
                                                    </div>
                                                    <div>
                                                        <VuePictureCropper
                                                            :boxStyle="{
                                                              width: '100%',
                                                              height: '100%',
                                                              backgroundColor: '#f8f8f8',
                                                              margin: 'auto',
                                                            }"
                                                            :img="bannerImage"
                                                            :options="{
                                                              viewMode: 1,
                                                              dragMode: 'crop',
                                                              aspectRatio: 16 / 9,
                                                            }"
                                                            @ready="ready"
                                                          />
                                                    </div>
                                                </div>

                                                <div class="col-12 mt-5 px-5">
                                                    <div class="row mb-5 ps-1 border border-1 border-radius-lg border-secondary">
                                                        <div class="col-10 pt-1">
                                                            <b class="mb-0 text-dark">Title</b>
                                                            <hr class="w-80 border m-0 p-0 border-1 border-secondary">
                                                            <h5 class="mt-1 text-gradient text-dark">
                                                                {{ fundRaiser.title }}
                                                            </h5>
                                                        </div>
                                                        <div class="col-2">
                                                            <button class="mt-3 btn btn-sm btn-rounded border-2 btn-outline-dark text-bold text-dark px-3 float-end">
                                                                <i class="fa fa-pen" style="font-size: 12px"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-5 ps-1 border border-1 border-radius-lg border-secondary">
                                                        <div class="col-10 pt-1">
                                                            <b class="mb-0 text-dark">Target</b>
                                                            <hr class="w-80 border m-0 p-0 border-1 border-secondary">
                                                            <h6 class="mt-1 text-gradient text-dark">
                                                                ₦ {{ formatAmount(fundRaiser.target) }}
                                                            </h6>
                                                        </div>
                                                        <div class="col-2">
                                                            <button class="mt-3 btn btn-sm btn-rounded border-2 btn-outline-dark text-bold text-dark px-3 float-end">
                                                                <i class="fa fa-pen" style="font-size: 12px"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-5 ps-1 border border-1 border-radius-lg border-secondary">
                                                        <div class="col-10 pt-1">
                                                            <b class="mb-0 text-dark">Category</b>
                                                            <hr class="w-80 border m-0 p-0 border-1 border-secondary">
                                                            <h6 class="mt-1 text-gradient text-dark">
                                                                {{ fundRaiser.category }}
                                                                <i class="fa fa-arrow-right px-3" style="font-size: 11px;"></i>
                                                                {{ fundRaiser.subCategory }}
                                                            </h6>
                                                        </div>
                                                        <div class="col-2">
                                                            <button class="mt-3 btn btn-sm btn-rounded border-2 btn-outline-dark text-bold text-dark px-3 float-end">
                                                                <i class="fa fa-pen" style="font-size: 12px"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-5 ps-1 border border-1 border-radius-lg border-secondary">
                                                        <div class="col-10 pt-1">
                                                            <b class="mb-0 text-dark">Sustainable Development Goals</b>
                                                            <hr class="w-80 border m-0 p-0 border-1 border-secondary">
                                                            <div v-if="fundRaiser.sdgs">
                                                                <span v-for="(tag, index) in fundRaiser.sdgs" :key="index" class="badge me-1 mb-1"
                                                                    :style="{ backgroundColor: '#' + sdgColors[tag] }">
                                                                    {{ sdgs[tag - 1] }}
                                                                    <button type="button" class="close bg-transparent border-radius-lg border border-light text-white"
                                                                        @click="removeTag(index)" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </span>
                                                            </div>
                                                            <h6 class="mt-1" v-else>
                                                                None
                                                            </h6>
                                                        </div>
                                                        <div class="col-2">
                                                            <button class="mt-3 btn btn-sm btn-rounded border-2 btn-outline-dark text-bold text-dark px-3 float-end">
                                                                <i class="fa fa-plus" style="font-size: 12px"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div class="row mb-5 ps-1 border border-1 border-radius-lg border-secondary">
                                                        <div class="col-10 pt-1">
                                                            <b class="mb-0 text-dark">Story</b>
                                                            <hr class="w-80 border m-0 p-0 border-1 border-secondary">
                                                            <div id="storyReviewBoard" class="my-2 p-2 text-dark text-lg text-bold" style="background: #fff4;" v-html="fundRaiser.story">

                                                            </div>
                                                        </div>
                                                        <div class="col-2">
                                                            <button class="mt-3 btn btn-sm btn-rounded border-2 btn-outline-dark text-bold text-dark px-3 float-end">
                                                                <i class="fa fa-pen" style="font-size: 12px"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                
                                <div class="w-100" style="position: fixed; bottom: 0;">
                                    <div class="pt-3 row">
                                        <div class="text-end col-12 pe-6 pe-sm-9 pe-md-8">
                                            <BaseButton type="light" class="mx-4 d-none d-sm-inline">
                                                Preview
                                            </BaseButton>
                                            <BaseButton>
                                                Start
                                            </BaseButton>
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
    import VuePictureCropper, { cropper } from 'vue-picture-cropper'
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.bubble.css';

    /* components */
    import ChipContainer from '@/components/forms/ChipContainer.vue';
    import SDGSelect from '@/components/forms/SDGSelect.vue';
    import BaseButton from "@/components/forms/BaseButton.vue"

    /* services */
    import ConfigurationService from '@/services/ConfigurationService';
    import FundRaiserService from '@/services/FundRaiserService';
    import NavigationService from '@/services/NavigationService';
    import UserService  from "@/services/UserService";
    
    /* stores */
    import { getNotificationStore } from "@/stores/NotificationStore";
    
    /* utilities */
    import FormUtility from "@/utilities/FormUtility";

    export default {
        components: {
            QuillEditor,
            ChipContainer,
            SDGSelect,
            BaseButton,
            VuePictureCropper
        },
        data() {
            return {
                user: null,
                loading: true,
                categories: [],
                isLoggedIn: false,
                bannerImage: "",
                fundRaiser: {}
            };
        },
        async beforeMount() {
            
            this.isLoggedIn = await UserService.get('isLoggedIn');
            
            if(!this.isLoggedIn) {
                
                 await NavigationService.set("postAuthenticationPath", "/raisers/review");
                
                return this.$router.push("/account/login");
                
            }
            
            const fundRaiser = await FundRaiserService.get("draftFundRaiser");
            
            if(!fundRaiser) {
                
                return this.$router.push("/me/raisers");
            }
            
            this.fundRaiser = fundRaiser;
        },
        async beforeUnMount() {
            
//            FundRaiserService.clear("draftFundRaiser");
        },
        computed: {
            
            categoryNames() {
                
                return this.categories.map(category => category.name);
            },
            
            subCategoryNames() {
                
                const selectedCategory = this.categories.find(category => category.name === this.fundRaiser.category);
                
                if (selectedCategory) {
                    
                    return selectedCategory.subCategories;
                    
                } else {
                    
                    return [];
                }
            }
        },
        methods: {

            formatAmount(amount) {
                // Remove non-numeric characters from input value
                const value = FormUtility.formatAmount(amount || this.fundRaiser.target);

                // Update the input value
                return value;
            },
            
            openImageSelectionDialog() {
                this.$refs.imageFileUploadInput.click();
            },
            
            openImageCropper(event) {
                
                const image = event.target.files[0];
                
                console.log(image);
                
//                this.bannerImage = image.data
            },
            
            ready(){
//                ;
            },

            async update(field) {

            }

        }

    }
</script>
<style>
    div.ql-container.ql-bubble{
        overflow: scroll scroll;
        position: absolute;
        width: 80%;
        height: 195px;
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
    
    #storyReviewBoard > p {
        
        font-size: 18px;
        font-weight: 600;
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
    
    #reviewPane {
        left: 0px;
        -webkit-animation: slide 1.5s ease-out;
        -webkit-animation-delay: 0s;
        animation: slide 1.5s ease-out;
        animation-delay: 0s;
    }
    
    @-webkit-keyframes slide {
        0% { left: 100px; }
        100% { left: 0px ; }
    }

    @keyframes slide {
        0% { left: 100px; }
        100% { left: 0px; }
    }
</style>