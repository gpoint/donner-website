<template>
    <div>
        <div>
            <a href="/" class="position-fixed top-0 start-0" style="z-index: 200">
                <img src="/favicon.ico" class=" bg-white border-radius-lg p-1 m-2" style="height: 50px;">
            </a>
            <div class="page-header min-vh-100" style="align-items: start;">
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
                                                    <div @click="openImageSelectionDialog" class="position-relative w-100 border border-light border-3 rounded-3 bg-gradient-light text-center align-items-center" style="height:300px; cursor: pointer; aspect-ratio: 16 / 9;">
                                                        <div  v-if="!fundRaiser.bannerImage" class="position-absolute opacity-2 w-100 h-100 d-none d-sm-none d-md-block border-top-end-radius-0 border-top-start-radius-0 border-bottom-end-radius-0"
                                                             style="background-image: url('/img/shapes/waves-green.png'); background-size:cover;"></div>

                                                        <span class="rounded-3 border bg-light opacity-8 d-inline-block p-3 mt-7 border-white" v-if="!fundRaiser.bannerImage">
                                                            Share an image
                                                            <br>
                                                            <span class="text-sm"> It will be worth a thousand words.</span>
                                                        </span>
                                                        
                                                        <img :src="fundRaiser.bannerImage" style="object-fit: cover;" class="rounded-3" :class="fundRaiser.bannerImage ? 'w-100 h-100' : 'd-none'">

                                                        <div class="position-absolute top-0 end-0 px-3">
                                                            <button class="mt-3 btn btn-sm btn-rounded border-2 btn-outline-dark bg-gradient-light text-dark px-3 float-end">
                                                                <i class="fa fa-pen" style="font-size: 12px"></i>
                                                            </button>
                                                        </div>
                                                        
                                                        <input @change="openImageCropper" class="d-none" type="file" accept="image/*" ref="imageFileUploadInput" @click="openImageCropper">
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
                                                            <button class="mt-3 btn btn-sm btn-rounded border-2 btn-outline-dark bg-gradient-light text-dark px-3 float-end" @click="edit = 'title'; showModal = true;">
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
                                                            <button class="mt-3 btn btn-sm btn-rounded border-2 btn-outline-dark bg-gradient-light text-dark px-3 float-end">
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
                                                            <button class="mt-3 btn btn-sm btn-rounded border-2 btn-outline-dark bg-gradient-light text-dark px-3 float-end">
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
                                                            <button class="mt-3 btn btn-sm btn-rounded border-2 btn-outline-dark bg-gradient-light text-dark px-3 float-end">
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
                                                            <button class="mt-3 btn btn-sm btn-rounded border-2 btn-outline-dark bg-gradient-light text-dark px-3 float-end">
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
                                            <BaseButton @click="startRaising">
                                                Start Raising
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
        <modal v-model:show="showModal" body-classes="p-0" modal-classes="modal-lg">
            <div class="card bg-transparent p-3">
                <button @click="showModal = false"
                    class="position-absolute end-0 me-3 mt-n1 btn btn-sm text-dark bg-gradient-light border border-white px-2 py-1">
                    <i class="fa fa-times" style="font-size: 16px"></i>
                </button>
                <div class="mx-1 border-radius-md row bg-gray-200" style="overflow: hidden;">
                    <div class="col-12">
                        <div class="my-4 p-4">
                            <div class="row">
                                <div class="col-12">
                                    <form-message v-model:html="response.message" :type="response.type"></form-message>
                                    <div class="row">
                                        <div class="col-12" v-if="edit === 'bannerImage'">
                                            <div class="form-group px-2">
                                                <VuePictureCropper
                                                    :boxStyle="{
                                                      width: '100%',
                                                      height: '100%',
                                                      backgroundColor: '#f8f8f8',
                                                      margin: 'auto',
                                                    }"
                                                    :img="picture"
                                                    :options="{
                                                      viewMode: 1,
                                                      dragMode: 'crop',
                                                      aspectRatio: 16 / 9,
                                                    }"
                                                  />
                                            </div>
                                            <base-button :loading="loading" type="button" @click="saveCroppedBannerImage" class=" bg-gradient-primary float-end">Save</base-button>
                                        </div>
                                        <form @submit.prevent="updateFundRaiser" class="col-12" v-if="edit === 'title'">
                                            <div class="form-group mb-3">
                                                <label>Title <span class="text-primary">*</span></label>
                                                <input required class="form-control form-control-alternative"
                                                    placeholder="Title can not be blank" v-model="fundRaiser.title">
                                            </div>
                                            <base-button :loading="loading" nativeType="submit" type="primary" class=" bg-gradient-primary float-end">Save</base-button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
    /* packages */
    import VuePictureCropper, { cropper } from 'vue-picture-cropper'
    import { QuillEditor } from '@vueup/vue-quill'
    import '@vueup/vue-quill/dist/vue-quill.bubble.css';
    

    /* components */
    import BaseButton from "@/components/forms/BaseButton.vue"
    import ChipContainer from '@/components/forms/ChipContainer.vue';
    import FormMessage from '@/components/forms/FormMessage.vue';
    import Modal from '@/components/modals/Modal.vue'
    import SDGSelect from '@/components/forms/SDGSelect.vue';


    /* services */
    import ConfigurationService from '@/services/ConfigurationService';
    import FundRaiserService from '@/services/FundRaiserService';
    import ImageUploadService from '@/services/ImageUploadService';
    import NavigationService from '@/services/NavigationService';
    import UserService  from "@/services/UserService";
    
    /* stores */
    import { getNotificationStore } from "@/stores/NotificationStore";
    
    /* utilities */
    import FormUtility from "@/utilities/FormUtility";
    
    export default {
        components: {
            BaseButton,
            ChipContainer,
            FormMessage,
            Modal,
            SDGSelect,
            VuePictureCropper
        },
        data() {
            return {
                categories: [],
                croppedImage: "",
                edit: 'none',
                fundRaiser: {},
                loading: false,
                picture: "",
                response: {},
                showModal: false,
                user: null
            };
        },
        async beforeMount() {
            
            const isLoggedIn = await UserService.get('isLoggedIn');
            
            if(!isLoggedIn) {
                
                 await NavigationService.set("postAuthenticationPath", "/raisers/review");
                
                return this.$router.push("/account/login");
                
            }
            
            const fundRaiserId = this.$route.params.id;
            
            try {
                const fundRaiser = fundRaiserId ? await FundRaiserService.getFundRaiserById(fundRaiserId) : await FundRaiserService.get("draftFundRaiser");
                
                if(!fundRaiser) {
                    throw new Error("Unable to fetch raiser");
                }
                
                this.fundRaiser = fundRaiser;
            } catch (error) {
                this.$router.push("/me/raisers");
            }
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
                
                this.picture = "";
                this.croppedImage = "";

                // Get selected files
                const file = event.target.files[0];
                
                // Convert to dataURL and pass to the cropper component
                const reader = new FileReader();
                
                reader.onload = () => {
                    // Update the picture source of the `img` prop
                    this.picture = String(reader.result);

                    // Show the modal
                    this.edit = "bannerImage";
                    this.showModal = true;

                    // Clear selected files of input element
                    event.target.value = "";
                };
                
                try {
                    reader.readAsDataURL(file);
                }catch(error) {
                    console.log(error.message);
                }
                
            },
            
            async saveCroppedBannerImage() {
                
                this.loading = true;
                
                if (!cropper) { 
                    return;
                }
                
                try {
                    
                    const file = await cropper.getFile();

                    const response = await ImageUploadService.uploadBannerImage(file);

                    this.fundRaiser.bannerImage = response.secure_url;
                    
                    await this.updateFundRaiser();
                    
                } catch(error) {
                    
                    console.log(error.message);
                }
            },

            async updateFundRaiser() {
                
                this.loading = true;
                
                const payload = {};
                
                payload[this.edit] = this.fundRaiser[this.edit];
                
                
                try {
                    
                    const {data, meta} = await FundRaiserService.updateFundRaiser(this.fundRaiser.id, payload);
                    
                    
                    this.response = {
                        message: "Raiser updated successfully",
                        type: 'success'
                    };
                    
                    this.fundRaiser = data;
                    
                    FundRaiserService.set("draftFundRaiser", data);
                    
                    setTimeout(() => {
                        this.showModal = false;
                    }, 2000);
                    
                } catch(error) {
                    
                    this.response = {
                        message: error.message,
                        type: 'danger'
                    };
                }
                
                this.loading = false;
            },
            
            async startRaising() {
                
            }

        }

    }
</script>
<style>
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