<template>
    <div>
        <header>
            <a href="/" class="position-fixed top-0 start-0" style="z-index: 200">
                <img src="/favicon.ico" class=" bg-white border-radius-lg p-1 m-2" style="height: 50px;">
            </a>
            <div class="page-header min-vh-100" style="align-items: start;">
                <div class="position-fixed fixed-top ms-auto w-50 h-100 z-index-0 d-none d-sm-none d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                     style="background-image: url('/img/shapes/waves-green.png'); background-size:cover;">
                </div>
                <div class="position-absolute bg-primary fixed-top me-auto w-100 w-sm-50 h-100 z-index-0 d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                     style="background-size:cover;background-position: bottom left;">
                    <div class="position-absolute fixed-top me-auto w-100 h-100 z-index-0 d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                         style="background-size:cover; background-image: url('/img/shapes/waves-white.svg');background-position: bottom left;"></div>
                </div>
                <div class="ps-sm-6 ps-md-10 pe-0 w-100 my-0 p-0 ">
                    <div class="row">
                        <div class="col-lg-12 d-flex justify-content-center flex-column my-0">
                            <div id="reviewPane" class="card card-body blur d-flex justify-content-top px-sm-5 shadow-lg mt-0 pt-5 pb-4 min-vh-100 rounded-0" style="">
                                
                                <div v-if="loading" class="text-center w-100">
                                    <div class="lds-ripple">
                                        <div class="bg-primary"></div>
                                        <div class="bg-primary"></div>
                                    </div>
                                </div>
                                <div v-else class="h-100" style="display: contents;">
                                        <h1 class="text-gradient text-dark mb-0 mt-8 mt-sm-0">Your fundraiser is ready.</h1>
                                        <h5 class="mb-2 text-gradient text-dark ps-3">We're one click away from impact. <span class="text-primary text-gradient">🍀</span> </h5>
                                        <!--<hr class="btn-round bg-gradient-success my-5 opacity-8" style="height: 5px; border-radius: 20px; transition: width 1s" :style="{width: '98%'}">-->
                                        <div class="row">
                                            <div class="col-5">
                                                <div class="">
                                                    <div></div>
                                                </div>
                                            </div>
                                            <div class="col-7">
                                                <div></div>
                                            </div>
                                        </div>
                                        <div class="mt-auto pt-3 row">
                                            <div class="text-end col-12">
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
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.bubble.css';

    /* components */
    import ChipContainer from '@/components/forms/ChipContainer.vue';
    import SDGSelect from '@/components/forms/SDGSelect.vue';
    import BaseButton from "@/components/forms/BaseButton.vue"

    /* services */
    import ConfigurationService from '@/services/ConfigurationService';
    import FundRaiserService from '@/services/FundRaiserService';
    import UserService  from "@/services/UserService";
    
    import { getNotificationStore } from "@/stores/NotificationStore";
    
    /* utilities */
    import FormUtility from "@/utilities/FormUtility";

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
                loading: true,
                categories: [],
                isLoggedIn: false,
                fundRaiser: {}
            };
        },
        async beforeMount() {
            
            const newFundRaiserIsComplete = await FundRaiserService.get("newFundRaiserIsComplete");
            
            if(!newFundRaiserIsComplete) {
                
                return this.$router.push("/raisers/create");
            }
        },
        async mounted() {

            this.user = {
                
                ...await UserService.get('user')
            };

            this.isLoggedIn = await UserService.get('authorization');
            
            try {
                
                const fundRaiser = await FundRaiserService.commitNewFundRaiser();
                
                this.fundRaiser = fundRaiser;
                
            } catch(error) {
                
                if(error.getToast) {
                    
                    const notificationStore = getNotificationStore();
                    
                    notificationStore.toast({
                        
                        ...error.getToast(),
                        
                        textClasses: "text-gradient text-warning"
                    });
                }
                
                console.log(error);
            }
            
            
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
                const value = FormUtility.formatAmount(this.newFundRaiser.target);

                // Update the input value
                this.newFundRaiser.target = value;

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
        background-color: transparent !important;
        background: linear-gradient(90deg, #0000 0%, hsla(0, 0%, 100%, 0.8) 1%) !important; 
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