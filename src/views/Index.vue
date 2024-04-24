<template>
    <div>
        <!-- -------- START HEADER 1 w/ text and image on right ------- -->
        <header class="bg-gradient-primary position-relative">
            <div class="position-absolute z-index-1">
                <HeroAnimation></HeroAnimation>
            </div>
            <div class="page-header min-vh-100" style="background-image: url(/img/shapes/waves-white.svg);">
                <span class="mask bg-white opacity-0"></span>
                <div class="container">
                    <div class="row z-index-1">
                        <div class="col-lg-12 text-center mt-1">
                            <h1 class="text-white">
                                Transform One More  <TypingAnimation :strings="['Community', 'Life']" :typeSpeed="150"
                                    :startDelay="1500" :loop="false">
                                </TypingAnimation>
                            </h1>

                            <p class="text-lg text-bold text-white text-center px-4 px-md-7 mt-4 mx-1">
                                Whether you're sparking change or supporting a neighbor, every contribution on Donner makes a real impact. <br/>
                                Start a Donner or donate today—because together, we create and give brighter futures.
                            </p>
                            <br />
                             <div class="buttons">
                                <RouterLink to="/page/how-does-it-work" class="btn btn-lg btn-primary text-white">
                                    Learn More
                                </RouterLink>
                                <RouterLink to="/raisers/create" class="btn btn-lg btn-white text-primary mx-4">
                                    Create a Donner
                                </RouterLink>
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
                            <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,1" />
                        </g>
                    </svg>
                </div>
            </div>
        </header>
        <!-- -------- END HEADER 1 w/ text and image on right ------- -->

        <section class="py-sm-7 mt-8">
            <div class="container-fluid px-0">
                <div class="row justify-content-center text-center">
                    <div class="col-3 px-md-0"></div>
                    <div class="col-12 position-relative">
                        <div class="row mt-7">
                            <div class="col-xl-3"></div>
                            <div class="col-xl-7 col-md-12 col-12 text-start">
                                <div class="ps-3 me-3 text-start border-radius-lg">
                                    <h1 class="text-gradient text-dark">How To Get Started </h1>
                                    <p class="text-dark text-lg mt-3">

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row bg-info-soft bottom-0">
                            <div class="row">
                                <div class="col-xl-3 position-relative">
                                    <img class="w-100 border-radius-lg border-top-start-radius-0 border-bottom-start-radius-0 start-0 position-absolute max-width-300 mt-n11 d-xl-block d-none"
                                        style="object-fit: cover; height: 150%" src="https://media.gettyimages.com/id/135538155/photo/volunteers-planting-a-tree-together.jpg?s=612x612&w=0&k=20&c=G6xGsxPax-8G1AxeNgdDnTIFNLI5VUfyNO0tjNTstLg=" alt="">
                                </div>
                                <div class="col-xl-9 ps-4">
                                    <div class="row">
                                        <div class="col-xl-3 col-md-4 py-md-5 py-3">
                                            <div class="p-3 text-start border-radius-lg">
                                                
                                                <h5 class="mt-3">Create a <span class="text-primary">Donner</span> Raiser</h5>
                                                <p class="text-justify">
                                                    Decide how much you need to raise and share your story with the world in three simple steps.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-md-4 py-md-5 py-3">
                                            <div class="p-3 text-start bg-white border-radius-lg shadow-lg">
                                                
                                                <h5 class="mt-3">Receive Support</h5>
                                                <p class="text-justify">
                                                    Share your <span class="text-primary text-bold">Donner</span> with your community, friends, and family and receive donations.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-md-4 py-md-5 py-3">
                                            <div class="p-3 text-start border-radius-lg">
                                                <h5 class="mt-3">Make Impact</h5>
                                                <p class="text-justify">
                                                    Add beneficiaries, support your cause with the donations, and share your success.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-1"></div>
                            </div>
                            <img class="w-10 end-10 position-absolute mt-n6"
                                src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/pattern-points.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="impact" class="py-4">
            <div class="container">
                <div class="row mt-0 mb-10 mt-3">
                    <div class="col-lg-7 col-md-12 me-auto">
                        <div class="p-3 pt-0 position-sticky">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle shadow text-center mb-4">
                                <i class="fas fa-heart -plane"></i>
                            </div>
                            <h2 class="text-gradient text-primary mb-0">We're here for you </h2>
                            <h5 class="mb-4">Why Donner? </h5>
                            <p class="blockquote my-3 ps-2 text-dark text-gradient justify-content-between"
                                style="font-size: 1rem;">
                                <span class="text-bold">
                                    Donner is a global premier platform dedicated to bringing dreams to life and supporting causes that matter.
                                </span>
                            </p>
                            <legend class="text-gradient bg-gradient-dark lead">
                                Local Focus, Global Impact:
                            </legend>
                            <p class="text-dark text-gradient text-justify">
                                At Donner, we understands the unique challenges and opportunities for growth within our communities. We provide a tailored platform designed with African communities in mind—making fundraising accessible, efficient, and impactful.
                            </p>

                            <legend class="text-gradient bg-gradient-dark lead">
                                Transparency and Trust:
                            </legend>
                            <p class="text-dark text-gradient text-justify">
                                Trust is our foundation. With Donner, you can see exactly how your contributions are making a difference, with regular updates and direct communications from Donner organizers.
                            
                                We leverage the best technology to ensure a smooth, secure, and effective fundraising experience. Donner puts powerful tools at your fingertips to help your cause succeed.
                            </p>
                            <!-- <RouterLink to="/about" class="text-dark icon-move-right">
                                More about us
                                <i class="fas fa-arrow-right text-sm ms-1"></i>
                            </RouterLink> -->
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-8">
                        <div class="position-relative ms-md-5 d-none d-md-block d-lg-block d-xl-block h-100">
                            <div class="w-100 h-100 bg-gradient-primary border-radius-xl position-absolute" alt="">
                            </div>
                            <img src="https://media.gettyimages.com/id/1432210347/photo/portrait-of-an-army-doctor-playing-with-refugee-children.jpg?s=612x612&w=0&k=20&c=snjhKTr_D5q776BwP7flJo-VZUVE24MW8ToeqTxY0LM=" style="object-fit: cover;height: 86%;"
                                class="w-100 border-radius-xl my-5 ms-n5 position-absolute d-none d-lg-flex" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- -------   START PRE-FOOTER 6 - title & description and input    -------- -->
        <!-- <div class="py-8 mt-0">
            <div class="container">

                <div class="row text-center my-5">
                    <div class=col-12>
                        <h1 class="text-gradient text-primary">Our Partners</h1>
                    </div>
                </div>
                <div class="row mt-5 py-5 mb-4">
                    <div class="col-lg-2 col-md-4 col-6 mb-4">
                        <img class="w-100 opacity-7" src="/img/partners/1.png" alt="logo" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 mb-4">
                        <img class="w-100 opacity-7" src="/img/partners/2.png" alt="logo" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 mb-4">
                        <img class="w-100 opacity-7" src="/img/partners/3.png" alt="logo" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 mb-4">
                        <img class="w-100 opacity-7" src="/img/partners/4.png" alt="logo" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 mb-4">
                        <img class="w-100 opacity-7" src="/img/partners/5.png" alt="logo" />
                    </div>
                    <div class="col-lg-2 col-md-4 col-6 mb-4">
                        <img class="w-100 opacity-7" src="/img/partners/6.png" alt="logo" />
                    </div>
                </div>
            </div>
        </div> -->
        <!-- -------   END PRE-FOOTER 6 - title & description and input    -------- -->

        <section class=" py-5 bg-gradient-dark position-relative overflow-hidden">
            <img src="/img/shapes/waves-white.svg" alt="pattern-lines"
                class="position-absolute start-0 top-0 w-100 opacity-4">
            <div class="container position-relative z-index-2">
                <div class="row">
                    <div class="col-lg-7 col-md-7 m-auto text-start">
                        <h3 class="text-white mb-lg-0 mb-5 text-start">
                            
                            Ready to Change the World?
                        </h3>
                        <p class="text-white">
                            Start a Donner Today or Donate to a Cause you believe in. Every action on Donner not only supports individual dreams but also builds stronger communities across the world. Let's change lives together.
                        </p>
                    </div>
                    <div class="col-md-5 m-auto">
                        <div class="row">
                            <div class="col-sm-5 col-6 ps-sm-0 ms-auto">
                                <RouterLink to="/donner"
                                    class="btn bg-gradient-primary mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto w-100 d-block">
                                    Donate</RouterLink>
                            </div>
                            <div class="col-sm-5 col-6 ps-sm-0 me-lg-0 me-auto">
                                <RouterLink to="/donner/create"
                                    class="btn btn-white text-primary mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto w-100 d-block">
                                    Create a Donner
                                </RouterLink>
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
import BaseFooter from '../components/footers/BaseFooter.vue';
import TypingAnimation from "@/components/TypingAnimation.vue";
import HeroAnimation from "@/components/animations/HeroAnimation.vue";

export default {
    components: {
        BaseNav,
        BaseFooter,
        TypingAnimation,
        HeroAnimation,
    },
    data() {
        return {
            data: '',
            searchString: '',
        };
    },
    methods: {
        search() {
            return;
        },
    },
    mounted() {
    }

}
</script>
