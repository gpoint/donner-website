<template>
    <div>
        <!-- -------- START HEADER 4 w/ search book a ticket form ------- -->

        <header class="position-relative ">
            <div class="page-header min-vh-50" style="background-image: url('/img/backgrounds/office.jpg');">
                <span class="mask bg-gradient-primary opacity-6"></span>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-sm-9 text-center mx-auto mb-4">
                            <h2 class="text-white mb-3">Let's Discuss</h2>
                            <h1 class="text-white mb-3">How can we help you?</h1>
                            <div class="row">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-absolute w-100 z-index-1 bottom-0">
                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                    <defs>
                        <path id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g class="moving-waves">
                        <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
                        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
                        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
                        <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
                        <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                        <!-- <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,0.95" /> -->
                    </g>
                </svg>
            </div>
        </header>
        <!-- -------- END HEADER 4 w/ search book a ticket form ------- -->

        <section class="py-7 bg-gray-100 position-relative">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-lg-10 mx-auto">
                        <div class="card">
                            <div class="row">
                                <div class="col-lg-5 d-flex">
                                    <div class="bg-gradient-primary my-lg-3 ms-lg-3 border-radius-md">
                                        <img src="/img/shapes/waves-white.svg" alt="pattern-lines"
                                            class="position-absolute start-0 top-0 h-100 opacity-6">
                                        <div class="card-body p-5 position-relative">
                                            <h3 class="text-white">Contact Information</h3>
                                            <p class="text-white opacity-8 mb-4">Fill up the form and our team will get back
                                                to you within 24 hours.</p>
                                            <div class="d-flex px-2 pt-2 pb-1 text-white">
                                                <div>
                                                    <i class="fas fa-phone text-sm"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <span class="text-sm opacity-8">(+234) 909 2664 712</span>
                                                </div>
                                            </div>
                                            <div class="d-flex px-2 pb-3 text-white">
                                                <div>
                                                    <i class="fas fa-phone text-sm"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <span class="text-sm opacity-8">(+234) 915 5992 718</span>
                                                </div>
                                            </div>
                                            <div class="d-flex px-2 py-3 text-white">
                                                <div>
                                                    <i class="fas fa-envelope text-sm"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <span class="text-sm opacity-8">support@donner.africa</span>
                                                </div>
                                            </div>
                                            <div class="d-flex px-2 py-3 text-white">
                                                <div>
                                                    <i class="fas fa-map-marker-alt text-sm"></i>
                                                </div>
                                                <div class="ps-3">
                                                    <span class="text-sm opacity-8">Elijah House, 3 Abbey Street, after NYSC
                                                        Bus Stop, Along Kubwa Express Way. Bwari District, Abuja,
                                                        Nigeria.</span>
                                                </div>
                                            </div>
                                            <div class="mt-4">
                                                <a href="https://www.facebook.com/cstempng/" class="px-2">
                                                    <i class="fab fa-facebook text-lg text-white"></i>
                                                </a>
                                                <a href="https://www.linkedin.com/company/c-stemp" class="px-2">
                                                    <i class="fab fa-linkedin text-lg text-white"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <form id="contact-form" method="post" autocomplete="off">
                                        <div class="card-body position-relative p-3 pt-1 ps-0">
                                            <div class="row mt-0">
                                                <iframe
                                                    src="https://docs.google.com/forms/d/e/1FAIpQLSfiDy75e9pMs6wJekxKMuhqGHCh5LzWPnLB1FmwPvd0KGv4cQ/viewform?embedded=true"
                                                    width="600" height="550" frameborder="0" marginheight="0"
                                                    marginwidth="0">Loading…</iframe>
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
import BaseNav from '../components/navbars/BaseNav.vue';

export default {
    components: {
        BaseNav,
    },
    data() {
        return {};
    },

}
</script>
