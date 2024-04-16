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
                                We are dedicated to <TypingAnimation
                                    :strings="['Giving']" :typeSpeed="250"
                                    :startDelay="500" :loop="false">
                                </TypingAnimation>
                            </h1>

                            <p class="lead text-white text-center px-5 mt-4">
                                We believe in people, invest in people, and build people.
                                <br />
                                Our goal is to empower and support non-profits and ordinary people in Africa receive donations and do more for their communities.
                            </p>
                            <br />
                            <div class="buttons">
                                <a href="#impact" class="btn btn-lg btn-primary text-white">Learn More</a>
                                <a to="https://app.donner.africa" class="btn btn-lg btn-white text-primary mx-4">Start a Raiser</a>
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
        <section id="impact" class="py-4">
            <div class="container">
                <div class="row mt-0 mb-10 mt-3">
                    <div class="col-lg-7 col-md-12 me-auto">
                        <div class="p-3 pt-0 position-sticky">
                            <div class="icon icon-shape bg-gradient-primary rounded-circle shadow text-center mb-4">
                                <i class="fas fa-paper-plane"></i>
                            </div>
                            <h1 class="text-gradient text-primary mb-0">The Impact of Donner </h1>
                            <h5 class="mb-4">Learn more about our efforts</h5>
                            <p class="blockquote my-3 ps-2 text-dark text-gradient justify-content-between"
                                style="font-size: 1rem;">
                                <span class="text-bold">
                                    Donner is a pioneering institution dedicated to Technical and Vocational Education
                                    and
                                    Training (TVET), empowering individuals through technology, skills development, and
                                    entrepreneurial opportunities. Donner strives to revolutionize lives.
                                </span>
                            </p>
                            <p class="text-dark text-gradient text-justify">
                                Entering C-STEMP, many young adults find themselves without employment opportunities,
                                with
                                over 99% of individuals aged 17-26 facing unemployment and earning less than $1.5 per
                                day.
                                However, those who complete the Donner program witness a remarkable transformation. On
                                average, graduates see their annual income soar to over ₦100,000 boasting an impressive
                                80%
                                retention rate in their employments over 12 months. This is the Donner advantage.

                            </p>
                            <p class="text-dark text-gradient text-justify">
                                At the heart of our approach lies a unique understanding of the pressing need for
                                education
                                that is
                                driven by the imperative to secure employment opportunities amidst severe economic
                                hardship.
                                Because of this understanding, our approach is rigorous technical training and hands-on
                                work
                                experience in high-demand, high-paying fields, Donner not only helps young adults secure
                                employment but equips them with the skills to thrive and advance in their careers, thus
                                transforming their lives and those of their families.
                            </p>
                            <RouterLink to="/about" class="text-dark icon-move-right">
                                More about us
                                <i class="fas fa-arrow-right text-sm ms-1"></i>
                            </RouterLink>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-8">
                        <div class="position-relative ms-md-5 d-none d-md-block d-lg-block d-xl-block h-100">
                            <div class="w-100 h-100 bg-gradient-primary border-radius-xl position-absolute" alt="">
                            </div>
                            <img src="/img/backgrounds/sub-hero.jpg" style="object-fit: cover;height: 86%;"
                                class="w-100 border-radius-xl my-5 ms-n5 position-absolute d-none d-lg-flex" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="pb-6 bg-gradient-primary">
            <div class="container">
                <div class="row text-center">
                    <div class="col-lg-12">
                        <h1 class="mt-7 mb-6">
                            <span class="text-white">Donner Initiatives</span>
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-4 mb-lg-0 mb-4">

                        <div class="card h-100">
                            <img class="card-img-top" src="/img/causes/training.jpg"
                                style="height: 300px; object-fit: cover">
                            <div class="position-relative overflow-hidden" style="height:50px;margin-top:-50px;">
                                <div class="position-absolute w-100 top-0 z-index-1">
                                    <svg class="waves waves-sm" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40"
                                        preserveAspectRatio="none" shape-rendering="auto">
                                        <defs>
                                            <path id="card-wave"
                                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
                                            </path>
                                        </defs>
                                        <g class="moving-waves">
                                            <use xlink:href="#card-wave" x="48" y="-1" fill="rgba(255,255,255,0.30">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="3" fill="rgba(255,255,255,0.35)">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="5" fill="rgba(255,255,255,0.25)">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="8" fill="rgba(255,255,255,0.20)">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="13" fill="rgba(255,255,255,0.15)">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="16" fill="rgba(255,255,255,0.99)">
                                            </use>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="card-body">
                                <h4 class="text-gradient text-dark">Skills Training</h4>
                                <p class="text-gradient text-dark">

                                    Donner offers training and assessment aligned to
                                    the National Skills Qualification Framework (NSQF) as regulated by the National
                                    Board for Technical Education (NBTE) for the provision of skilled labour to
                                    organizations and developers.
                                </p>
                                <RouterLink to="/projects" class="text-primary icon-move-right">Learn More
                                    <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
                                </RouterLink>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4 mb-lg-0 mb-4">

                        <div class="card h-100">
                            <img class="card-img-top" src="/img/causes/6.jpg" style="height: 300px; object-fit: cover">
                            <div class="position-relative overflow-hidden" style="height:50px;margin-top:-50px;">
                                <div class="position-absolute w-100 top-0 z-index-1">
                                    <svg class="waves waves-sm" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40"
                                        preserveAspectRatio="none" shape-rendering="auto">
                                        <defs>
                                            <path id="card-wave"
                                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
                                            </path>
                                        </defs>
                                        <g class="moving-waves">
                                            <use xlink:href="#card-wave" x="48" y="-1" fill="rgba(255,255,255,0.30">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="3" fill="rgba(255,255,255,0.35)">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="5" fill="rgba(110,19,29,0.25)"></use>
                                            <use xlink:href="#card-wave" x="48" y="8" fill="rgba(255,255,255,0.20)">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="13" fill="rgba(255,255,255,0.15)">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="16" fill="rgba(255,255,255,0.99)">
                                            </use>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="card-body">
                                <h4 class="text-gradient text-dark">Skills Advocacy</h4>
                                <p class="text-gradient text-dark">
                                    C-STEMP's Construction Artisans Awards aim to ignite enthusiasm for vocational
                                    trades, especially in housing and construction, celebrating skilled craftsmanship
                                    and promoting participation.
                                </p>
                                <RouterLink to="/projects" class="text-primary icon-move-right">Learn More
                                    <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
                                </RouterLink>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-4">

                        <div class="card h-100">
                            <img class="card-img-top" src="/img/causes/jobs.jpg"
                                style="height: 300px; object-fit: cover">
                            <div class="position-relative overflow-hidden" style="height:50px;margin-top:-50px;">
                                <div class="position-absolute w-100 top-0 z-index-1">
                                    <svg class="waves waves-sm" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40"
                                        preserveAspectRatio="none" shape-rendering="auto">
                                        <defs>
                                            <path id="card-wave"
                                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
                                            </path>
                                        </defs>
                                        <g class="moving-waves">
                                            <use xlink:href="#card-wave" x="48" y="-1" fill="rgba(255,255,255,0.30">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="3" fill="rgba(255,255,255,0.35)">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="5" fill="rgba(255,255,255,0.25)">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="8" fill="rgba(255,255,255,0.20)">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="13" fill="rgba(255,255,255,0.15)">
                                            </use>
                                            <use xlink:href="#card-wave" x="48" y="16" fill="rgba(255,255,255,0.99)">
                                            </use>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                            <div class="card-body">
                                <h4 class="text-gradient text-dark">Job Placement</h4>
                                <p class="text-gradient text-dark">
                                    In line with our values which prioritize recruitment and selection directly to jobs,
                                    Donner is in active collaboration with the Real Estate Developers Association of
                                    Nigeria and other major mass employers of semi-skilled labour.
                                </p>
                                <RouterLink to="/projects" class="text-primary icon-move-right">Learn More
                                    <i class="fas fa-arrow-right text-xs ms-1" aria-hidden="true"></i>
                                </RouterLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


        <section class="py-sm-7 mt-8">
            <div class="container-fluid px-0">
                <div class="row justify-content-center text-center">
                    <div class="col-3 px-md-0"></div>
                    <div class="col-12 position-relative">
                        <div class="row mt-7">
                            <div class="col-xl-3"></div>
                            <div class="col-xl-7 col-md-12 col-12 text-start">
                                <div class="ps-3 me-3 text-start border-radius-lg">
                                    <h1 class="text-gradient text-dark">The Construction Artisans Awards </h1>
                                    <p class="text-dark text-lg mt-3">

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row bg-info-soft bottom-0">
                            <div class="row">
                                <div class="col-xl-3 position-relative">
                                    <img class="w-100 border-radius-lg border-top-start-radius-0 border-bottom-start-radius-0 start-0 position-absolute max-width-300 mt-n11 d-xl-block d-none"
                                        style="object-fit: cover; height: 150%" src="/img/causes/advocacy.jpg" alt="">
                                </div>
                                <div class="col-xl-9">
                                    <div class="row ps-3">
                                        <div class="col-sm-10 pt-md-5 pt-3 pb-8">
                                            <div class="p-3 text-start border-radius-lg">
                                                <p class="text-justify text-gradient text-dark">
                                                    Awarding and Supporting Artisans in their various trades in a bid to
                                                    encourage more youths to acquire vocational skills and grow the
                                                    Nigerian
                                                    construction industry.
                                                    The Construction Artisans Awards (CAA) was conceived as part of a
                                                    holistic strategy to generate excitement and interest in the
                                                    construction trades.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-1"></div>
                            </div>
                            <img class="w-10 end-10 position-absolute mt-n6"
                                src="/img/illustrations/pattern-points.webp" alt="image">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- -------   START PRE-FOOTER 6 - title & description and input    -------- -->
        <div class="py-8 mt-0">
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
        </div>
        <!-- -------   END PRE-FOOTER 6 - title & description and input    -------- -->

        <section class=" py-7 bg-gradient-dark position-relative overflow-hidden">
            <img src="/img/shapes/waves-white.svg" alt="pattern-lines"
                class="position-absolute start-0 top-0 w-100 opacity-4">
            <div class="container position-relative z-index-2">
                <div class="row">
                    <div class="col-lg-7 col-md-7 m-auto text-start">
                        <h5 class="text-white mb-lg-0 mb-5 text-justify">
                            We're on a mission to transform lives through quality TVET education. Your support can make
                            a
                            real impact. Join us in empowering individuals, building sustainable careers, and driving
                            positive change in communities. Your donation, no matter the size, is an investment in a
                            brighter future. Together, we can create opportunities and unlock potential. Thank you for
                            being
                            a part of our journey.
                        </h5>
                    </div>
                    <div class="col-md-5 m-auto">
                        <div class="row">
                            <div class="col-sm-4 col-6 ps-sm-0 ms-auto">
                                <RouterLink to="/donate"
                                    class="btn bg-gradient-primary mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto w-100 d-block">
                                    Donate</RouterLink>
                            </div>
                            <div class="col-sm-4 col-6 ps-sm-0 me-lg-0 me-auto">
                                <RouterLink to="/contact"
                                    class="btn btn-white mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto w-100 d-block">
                                    Contact Us
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
