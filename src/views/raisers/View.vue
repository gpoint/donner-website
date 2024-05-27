<template>
    <div>
        <!-- -------- START HEADER 5 w/ text and illustration ------- -->
        <header>
            <div class="page-header min-vh-75 mt-8">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 my-auto">
                            <h1 class="mb-0 text-gradient text-primary">Donate for impact today.</h1>
                            <h3 class="text-gradient text-dark mb-4">Transform futures, empower youth, build lives.</h3>
                            <p class="lead">
                            </p>
                            <form class="col-9 mt-lg-n2 mt-2" @submit.prevent="startDonation()">
                                <label class="text-dark">Enter the sum you want to donate</label>
                                <div class="input-group mb-3">
                                    <span class="input-group-text"><i class="fas" aria-hidden="true">₦</i></span>
                                    <input required name="amount" class="form-control form-control-alternative"
                                        placeholder="10000" aria-label="10000" v-model="amount" @blur="formatAmount()"
                                        min="10000">
                                    <button class="btn bg-gradient-primary mb-0" type="submit" id="search-button">
                                        Donate
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-5 ps-5 pe-0 d-none d-md-flex">
                            <div class="row">
                                <div class="col-md-4 col-6">
                                    <img class="w-100 border-radius-lg shadow" src="/img/projects/base/training5.jpg" alt=""
                                        style="height: 225px; object-fit: cover;">
                                    <img class="w-100 border-radius-lg shadow mt-4" src="/img/projects/base/training1.jpg"
                                        alt="" style="height: 225px; object-fit: cover;">
                                </div>
                                <div class="col-md-4 col-6">
                                    <img class="w-100 border-radius-lg shadow mt-5" src="/img/projects/base/training2.jpg"
                                        alt="" style="height: 225px; object-fit: cover;">
                                    <img class="w-100 border-radius-lg shadow mt-4" src="/img/projects/base/training3.jpg"
                                        alt="" style="height: 225px; object-fit: cover;">
                                </div>
                                <div class="col-md-4 col-6">
                                    <img class="w-100 border-radius-lg shadow mt-3" src="/img/projects/base/training4.jpg"
                                        alt="" style="height: 225px; object-fit: cover;">
                                    <img class="w-100 border-radius-lg shadow mt-4" src="/img/projects/base/training6.jpg"
                                        alt="" style="height: 225px; object-fit: cover;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- -------- END HEADER 5 w/ text and illustration ------- -->

        <!-- -------   END PRE-FOOTER 6 - title & description and input    -------- -->

        <!-- <base-footer></base-footer> -->

        <modal v-model:show="show" body-classes="p-0" modal-classes="modal-lg">
            <div class="card bg-transparent p-3 modal-fade-in">
                <button @click="show = false"
                    class="position-absolute end-0 me-4 mt-1 btn btn-sm  text-primary bg-gradient-light px-2 py-1">
                    <i class="fa fa-times" style="font-size: 16px"></i>
                </button>
                <div class="mx-1 border-radius-md row bg-gray-200" style="overflow: hidden;">
                    <!-- <div class=""> -->
                    <div class="col-lg-6">
                        <div v-if="currentStep == 0" class="my-4 p-4">
                            <div class="row">
                                <div class="col-6">
                                    <button class="btn w-100 px-2 " :class="monthly ? 'bg-white' : 'bg-gradient-primary'"
                                        @click="monthly = false; payment_plan = undefined">Donate</button>
                                </div>
                                <div class="col-6">
                                    <button class="btn w-100 px-2 " :class="monthly ? 'bg-gradient-primary' : 'bg-white'"
                                        @click="monthly = true; amount = undefined">Commit</button>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-4">
                                    <div class="btn w-100 px-2 "
                                        :class="amount == 2500 ? 'bg-gradient-primary' : 'bg-white text-primary'"
                                        @click="amount = 2500; payment_plan = 116116">₦2,500</div>
                                    <div class="btn w-100 px-2 "
                                        :class="amount == 25000 ? 'bg-gradient-primary' : 'bg-white text-primary'"
                                        @click="amount = 25000; payment_plan = 116117">₦25,000</div>
                                    <div class="btn w-100 px-2 "
                                        :class="amount == 250000 ? 'bg-gradient-primary' : 'bg-white text-primary'"
                                        @click="amount = 250000; payment_plan = 116121">₦250,000</div>
                                </div>
                                <div class="col-4">
                                    <div class="btn w-100 px-2 "
                                        :class="amount == 5000 ? 'bg-gradient-primary' : 'bg-white text-primary'"
                                        @click="amount = 5000; payment_plan = 116115">₦5,000</div>
                                    <div class="btn w-100 px-2 "
                                        :class="amount == 50000 ? 'bg-gradient-primary' : 'bg-white text-primary'"
                                        @click="amount = 50000; payment_plan = 116118">₦50,000</div>
                                    <div class="btn w-100 px-2 "
                                        :class="amount == 500000 ? 'bg-gradient-primary' : 'bg-white text-primary'"
                                        @click="amount = 500000; payment_plan = 116121">₦500,000</div>
                                </div>
                                <div class="col-4">
                                    <div class="btn w-100 px-2 "
                                        :class="amount == 10000 ? 'bg-gradient-primary' : 'bg-white text-primary'"
                                        @click="amount = 10000; payment_plan = 62396/*116112*/">₦10,000</div>
                                    <div class="btn w-100 px-2 "
                                        :class="amount == 100000 ? 'bg-gradient-primary' : 'bg-white text-primary'"
                                        @click="amount = 100000; payment_plan = 116119">₦100,000</div>
                                    <div class="btn w-100 px-2 "
                                        :class="amount == 1000000 ? 'bg-gradient-primary' : 'bg-white text-primary'"
                                        @click="amount = 1000000; payment_plan = 116120">₦1,000,000</div>
                                </div>
                                <form class="col-12 pt-4" @submit.prevent="next()">
                                    <div v-show="!monthly" class="input-group mb-3">
                                        <span class="input-group-text"><i class="fas" aria-hidden="true">₦</i></span>
                                        <input required name="amount" class="form-control form-control-alternative"
                                            placeholder="10000" aria-label="10000" v-model="amount" @blur="formatAmount()">
                                    </div>
                                    <div v-if="monthly" class="input-group mb-4">
                                        <span class="text-dark font-weight-bold d-block text-sm">
                                            For Reccuring Monthly Donations
                                        </span>
                                        <span class="text-xs d-block px-2">
                                            We appreciate you supporting our mission.
                                        </span>
                                    </div>
                                    <button class="float-end btn bg-gradient-primary mb-0" type="submit">
                                        Donate
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div v-if="currentStep == 1" class=" my-3 p-4">
                            <div class="row">
                                <div class="col-12">
                                    <form @submit.prevent="next()" class="row">
                                        <div class="col-12">
                                            <div class="form-group mb-3">
                                                <label>Email Address <span class="text-primary">*</span></label>
                                                <input required type="email" class="form-control form-control-alternative"
                                                    placeholder="abc@xyz.com" v-model="email">
                                            </div>
                                            <div class="form-group mb-3">
                                                <label>Full Name <span class="text-primary">*</span></label>
                                                <input pattern="^([A-Za-z]+)\s?([A-Za-z]+)?\s([A-Za-z]+)$" required
                                                    class="form-control form-control-alternative"
                                                    placeholder="Firstname Lastname" v-model="fullname">
                                            </div>
                                            <div class="form-group mb-3">
                                                <label>Phone Number <span class="text-primary">*</span></label>
                                                <input pattern="^\+?[0-9]*" required
                                                    class="form-control form-control-alternative"
                                                    placeholder="0812 345 6789" v-model="phone">
                                            </div>
                                            <div class="mt-2 mb-5 ms-2 d-inline-flex">
                                                <div>
                                                    <div class="form-check form-switch mb-0">
                                                        <input class="form-check-input" v-model="anonymous" type="checkbox"
                                                            id="flexSwitchCheckDefault">
                                                    </div>
                                                </div>
                                                <div class="ms-4">
                                                    <span class="text-dark font-weight-bold d-block text-sm">
                                                        Donate Anonymously
                                                    </span>
                                                    <span class="text-xs d-block">
                                                        Your information will be shared with only the payment provider.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button type="button" class="btn bg-gradient-primary float-start"
                                                @click="--currentStep">Back</button>
                                            <button type="submit" class="btn bg-gradient-primary float-end">Donate</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div v-if="currentStep == 2" class=" my-3 p-4">
                            <div class="row">
                                <div class="col-12">
                                    <form @submit.prevent="collectPayment" class="row">
                                        <div class="col-12">
                                            <div class="form-group mb-3">
                                                <label>Which causes do you wish to fund? <span
                                                        class="text-primary">*</span></label>
                                             </div>
                                            <div class="form-group mb-3">
                                                <label>Comments</label>
                                                <textarea type="tel" class="form-control form-control-alternative"
                                                    placeholder="Please feel free to share any comments you have."
                                                    style="font-size: .85rem" v-model="comments"></textarea>
                                            </div>
                                            <div class="mt-2 mb-5 ms-2 d-inline-flex">
                                                <div>
                                                    <div class="form-check form-switch mb-0">
                                                        <input class="form-check-input" v-model="receiveUpdates"
                                                            type="checkbox" id="flexSwitchCheckDefault">
                                                    </div>
                                                </div>
                                                <div class="ms-4">
                                                    <span class="text-dark font-weight-bold d-block text-sm">
                                                        Send Me Updates
                                                    </span>
                                                    <span class="text-xs d-block">
                                                        We'll keep you updated on the progess of our projects and our
                                                        impact.
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button type="button" class="btn bg-gradient-primary float-start"
                                                @click="--currentStep">Back</button>
                                            <button type="submit" class="btn bg-gradient-primary float-end">Donate</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 bg-gradient-primary d-lg-block d-none py-5 text-white ps-4"
                        style="min-height: 500px">
                        <p class="text-sm font-weight-bold mb-1 text-secondary">- Our Success Story</p>
                        <h3 class="text-white">NPower - Build!</h3>
                        <p class="my-4">
                            <i>"Thank you for helping me get good work. I have sent my daughter to school now, and bought
                                her books, and bought her school shoes. Thank you because electrical work is paying me
                                now."</i>
                        </p>
                        <div class="author align-items-center pt-6">
                            <div class="avatar shadow bg-gradient-dark">
                                <img class="avatar shadow bg-gradient-dark" src="/img/causes/donat-testimonial.jpg">
                            </div>
                            <div class="name ps-2">
                                <span class="text-lg text-white">Ashiru Mohammed</span>
                                <div>
                                    <small>NPower - Build</small>
                                </div>
                            </div>
                        </div>
                        <div class="w-25 ms-auto opacity-2 mt-n9">
                            <svg class="opacity-3" width="110px" height="110px" viewBox="0 0 270 270" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>quote-down</title>
                                <g id="quote-down" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <path
                                        d="M107.000381,49.033238 C111.792099,48.01429 115.761022,48.6892564 116.625294,50.9407629 C117.72393,53.8028077 113.174473,58.3219079 107.017635,60.982801 C107.011653,60.9853863 107.00567,60.9879683 106.999688,60.990547 C106.939902,61.0219589 106.879913,61.0439426 106.820031,61.0659514 C106.355389,61.2618887 105.888177,61.4371549 105.421944,61.5929594 C88.3985192,68.1467602 80.3242628,76.9161885 70.3525495,90.6906738 C60.0774843,104.884196 54.9399518,119.643717 54.9399518,134.969238 C54.9399518,138.278158 55.4624127,140.716309 56.5073346,142.283691 C57.2039492,143.328613 57.9876406,143.851074 58.8584088,143.851074 C59.7291771,143.851074 61.0353294,143.241536 62.7768659,142.022461 C68.3497825,138.016927 75.4030052,136.01416 83.9365338,136.01416 C93.8632916,136.01416 102.658051,140.063232 110.320811,148.161377 C117.983572,156.259521 121.814952,165.88151 121.814952,177.027344 C121.814952,188.695638 117.417572,198.970703 108.622813,207.852539 C99.828054,216.734375 89.1611432,221.175293 76.6220807,221.175293 C61.9931745,221.175293 49.3670351,215.166992 38.7436627,203.150391 C28.1202903,191.133789 22.8086041,175.024577 22.8086041,154.822754 C22.8086041,131.312012 30.0359804,110.239421 44.490733,91.6049805 C58.2196377,73.906272 74.3541002,59.8074126 102.443135,50.4450748 C102.615406,50.3748509 102.790055,50.3058192 102.966282,50.2381719 C104.199241,49.7648833 105.420135,49.3936487 106.596148,49.1227802 L107,49 Z M233.000381,49.033238 C237.792099,48.01429 241.761022,48.6892564 242.625294,50.9407629 C243.72393,53.8028077 239.174473,58.3219079 233.017635,60.982801 C233.011653,60.9853863 233.00567,60.9879683 232.999688,60.990547 C232.939902,61.0219589 232.879913,61.0439426 232.820031,61.0659514 C232.355389,61.2618887 231.888177,61.4371549 231.421944,61.5929594 C214.398519,68.1467602 206.324263,76.9161885 196.352549,90.6906738 C186.077484,104.884196 180.939952,119.643717 180.939952,134.969238 C180.939952,138.278158 181.462413,140.716309 182.507335,142.283691 C183.203949,143.328613 183.987641,143.851074 184.858409,143.851074 C185.729177,143.851074 187.035329,143.241536 188.776866,142.022461 C194.349783,138.016927 201.403005,136.01416 209.936534,136.01416 C219.863292,136.01416 228.658051,140.063232 236.320811,148.161377 C243.983572,156.259521 247.814952,165.88151 247.814952,177.027344 C247.814952,188.695638 243.417572,198.970703 234.622813,207.852539 C225.828054,216.734375 215.161143,221.175293 202.622081,221.175293 C187.993174,221.175293 175.367035,215.166992 164.743663,203.150391 C154.12029,191.133789 148.808604,175.024577 148.808604,154.822754 C148.808604,131.312012 156.03598,110.239421 170.490733,91.6049805 C184.219638,73.906272 200.3541,59.8074126 228.443135,50.4450748 C228.615406,50.3748509 228.790055,50.3058192 228.966282,50.2381719 C230.199241,49.7648833 231.420135,49.3936487 232.596148,49.1227802 L233,49 Z"
                                        id="quote-up" fill="#48484A" fill-rule="nonzero"
                                        transform="translate(135.311778, 134.872794) scale(-1, -1) translate(-135.311778, -134.872794) ">
                                    </path>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <!-- </div> -->
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import Modal from '@/components/modals/Modal.vue'
import SubscribeModal from '@/components/modals/SubscribeModal.vue'

export default {
    components: {
        Modal,
        SubscribeModal
    },
    data() {
        return {
            data: '',
            show: false,
            currentStep: 0,
            // Input models
            monthly: false,
            amount: 10000,
            email: '',
            fullname: '',
            phone: '',
            anonymous: false,
            causes: [{
                index: 1
            }],
            comments: '',
            receiveUpdates: true,
            payment_plan: undefined
        };
    },
    mounted() {

    },
    watch: {},
    methods: {

        formatAmount() {
            // Remove non-numeric characters from input value
            const value = parseFloat(this.amount.replace(/[^\d.]/g, ''));

            const amount = value > 2500 ? value : 2500;

            // Format the number with commas
            const formattedAmount = amount.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

            // Update the input value
            this.amount = formattedAmount;

        },

        next() {
            this.currentStep++;
        },
        startDonation() {
            this.show = true;
        },
        collectPayment() {

            if (this.causes.length == 0) {
                this.causes.push({ index: 1 });
            }

            const paymentData = {
                payment_options: "card, ussd, banktransfer, account",
                public_key: "FLWPUBK_TEST-7c30a1be95fb1dde7f1e958d60a7a700-X",
                tx_ref: this.email + '-' + (new Date()).getTime(),
                amount: this.amount,
                country: "NG",
                currency: "NGN",
                customer: {
                    email: this.email,
                    phone_number: this.phone,
                    name: this.fullname,
                },
                customizations: {
                    title: "C-STEMP",
                    description: "Donation to C-STEMP",
                    logo: "https://donner.africa/img/logo.png",
                },
            };

            if (this.monthly) {
                paymentData.payment_plan = this.payment_plan;
            }

            const serializedPaymentData = JSON.parse(
                JSON.stringify(paymentData)
            )

            const modal = FlutterwaveCheckout({
                ...serializedPaymentData,
                callback() {
                    modal.close();
                    this.monthly = false;
                    this.amount = 10000;
                    this.comments = "";
                    this.anonymous = false;
                    this.causes = [{ index: 1 }];
                    this.receiveUpdates = true;
                    this.email = "";
                    this.phone = "";
                    this.name = "";

                    this.sendGratitude();
                },
                onclose(success) {
                    if (success) {
                        this.showGratitude()
                    }
                },
            });

        },
        sendGratitude() {
            ;
        },
        showGratitude() {
            ;
        },

    }

}
</script>

<style>
    .modal-fade-in {
        
        opacity: 0.7;
        transform: scale(0.8);
        
        transition-property: all;
        transition-duration: 4s;
        transition-timing-function: ease-in-out;
        transition-delay: 0s;
    }
    
    .modal.show .modal-fade-in {
        
        opacity: 1;
        transform: scale(1);
    }
</style>
