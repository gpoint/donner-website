<template>
    <div>

        <!-- -------- START HEADER 5 w/ text and illustration ------- -->
        <header class="pt-8">
            <div class="page-header min-vh-75">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 my-auto">
                            <h1 class="text-gradient text-primary mb-0">Projects & Impact</h1>
                            <!-- <h1 class="mb-4">The Experiences Of Youth</h1> -->
                            <p class="lead">
                                Transforming Lives Through Vocational Education: Explore Our Impactful Projects
                                and Join Us in Empowering Communities Today.
                            </p>
                            <div class="buttons">
                                <RouterLink to="/donate" class="btn bg-gradient-primary mt-4">Donate</RouterLink>
                            </div>
                        </div>
                        <div class="col-md-5 ps-5 pe-0 d-none d-md-flex">
                            <div class="row">
                                <div class="row">
                                    <div class="col-md-4 col-6">
                                        <img class="w-100 border-radius-lg shadow" src="/img/projects/base/training5.jpg"
                                            alt="" style="height: 225px; object-fit: cover;">
                                        <img class="w-100 border-radius-lg shadow mt-4"
                                            src="/img/projects/base/training1.jpg" alt=""
                                            style="height: 225px; object-fit: cover;">
                                    </div>
                                    <div class="col-md-4 col-6">
                                        <img class="w-100 border-radius-lg shadow mt-5"
                                            src="/img/projects/base/training2.jpg" alt=""
                                            style="height: 225px; object-fit: cover;">
                                        <img class="w-100 border-radius-lg shadow mt-4"
                                            src="/img/projects/base/training3.jpg" alt=""
                                            style="height: 225px; object-fit: cover;">
                                    </div>
                                    <div class="col-md-4 col-6">
                                        <img class="w-100 border-radius-lg shadow mt-3"
                                            src="/img/projects/base/training4.jpg" alt=""
                                            style="height: 225px; object-fit: cover;">
                                        <img class="w-100 border-radius-lg shadow mt-4"
                                            src="/img/projects/base/training6.jpg" alt=""
                                            style="height: 225px; object-fit: cover;">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- -------- END HEADER 5 w/ text and illustration ------- -->

        <!-- START Blogs w/ 3 images & quote & text -->
        <section class="py-5">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 position-relative">
                        <div class="position-relative ms-md-5 me-md-n5">
                            <div class="blur-shadow-image">
                                <img class="image-left rounded-3 img-fluid position-relative top-0 end-0 bg-cover w-100"
                                    src="/img/projects/base/training2.jpg" style="height: 350px; object-fit: cover; ">
                            </div>
                        </div>

                        <p
                            class="bg-white blockquote border border-primary text-gradient text-bold rounded w-50 p-3 text-sm text-primary float-md-end mt-4 me-md-n2 mx-auto">
                            "The challenge obviously now is employment. How do we ensure that these very young talented
                            people can find jobs"
                            <br>
                            <br>
                            <small>-NOAA</small>
                        </p>
                        <!-- Second image on the left side of the article -->
                        <div class="position-absolute bottom-0 mb-8 ms-n2 me-3 start-0 end-2 d-md-block d-none">
                            <div class="blur-shadow-image">
                                <img class="image-container rounded-3 img-fluid position-relative bg-cover w-100"
                                    src="/img/projects/base/training1.jpg" style="height: 350px; object-fit: cover; ">
                            </div>
                        </div>

                    </div>
                    <div class="col-md-5 text-justify">
                        <!-- First image on the right side, above the article -->
                        <div class="position-relative ms-n4 mb-5 mt-8 d-md-block d-none">
                            <div class="blur-shadow-image">
                                <img class="image-right rounded-3 img-fluid position-relative bg-cover w-100"
                                    src="/img/projects/base/sarah.jpg"
                                    style="height: 350px; object-fit: cover; object-position: 0% 0%;">
                            </div>
                        </div>
                        <h3 class="text-gradient text-dark mb-4">Meet Sarah Adedimeji</h3>
                        <p class="text-gradient text-dark">
                            Through the job placement assistance provided by C-STEMP, Sarah landed her dream job at a
                            local construction company shortly after completing her training. With tears of joy in her eyes,
                            Sarah recalls the moment she received the offer letter, realizing that her hard work and
                            perseverance had finally paid off.

                        </p>
                        <p class="text-gradient text-dark">
                            Today, Sarah is not just an employee; she is a role model and a beacon of hope for others in her
                            community. With a steady income, she can support her family, contribute to her community's
                            development, and pursue her aspirations with renewed optimism.

                        </p>
                        <p class="text-gradient text-dark">
                            Sarah's journey is just one of many success stories made possible by our charity's commitment to
                            providing quality TVET education and job placement support to underserved communities. Together,
                            we are transforming lives, breaking barriers, and creating brighter futures for individuals like
                            Sarah who dare to dream big and work hard to turn their dreams into reality.

                        </p>
                        <p class="text-gradient text-dark">
                            Join us in our mission to empower more individuals like Sarah with the skills, opportunities,
                            and support they need to build a better tomorrow. Together, we can make a difference, one life,
                            and one community at a time.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- END Blogs w/ 3 images & quote & text -->

        <!-- -------   START CONTENT 1 - title & description and 6 IMAGES   -------- -->
        <section class="py-5 mb-7 mt-5">
            <div class="container">
                <div class="row">
                    <div class="col-8 mx-auto text-center mb-5 text-gradient text-primary">
                        <h2>Our Projects & Impact</h2>
                    </div>
                </div>

                <project-gallery :projects="projectList" />
            </div>
        </section>
        <!-- -------   END CONTENT 1 - title & description and 6 IMAGES   -------- -->

        <section class="py-5" id="readmore">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-5 col-6 mx-auto px-lg-0 px-md-0 my-auto">
                        <img class="w-100 border-radius-lg shadow" src="/img/backgrounds/welder.jpg">
                    </div>
                    <div
                        class="col-lg-4 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                        <h2 class="mb-0 mt-lg-0 mt-4 text-gradient text-primary">Build with us</h2>
                        <h2 class="mb-4 text-gradient text-dark">We have great partners</h2>
                        <p class="lead">
                            Embark on a journey of profound impact by submitting your TVET project to our charity platform.
                            Your project has the power to transform communities, creating a ripple effect of positive
                            change.
                        </p>
                        <p class="text-gradient text-dark">
                            By fostering education and skill development, you contribute to building sustainable livelihoods
                            that uplift individuals and entire communities. Our platform is more than a space for projects;
                            it's a catalyst for empowerment. Join us in the mission to unlock potential, inspire growth, and
                            shape a future where skills are the key to lasting change. Your submission isn't just a project;
                            it's an investment in lives, a commitment to education, and a building block for resilient,
                            self-sufficient communities. Together, let's make a lasting impact. Submit your project today,
                            and let's create a world where everyone has the opportunity to thrive through the power of
                            vocational education and training.
                        </p>
                        <p class="blockquote my-3 ps-2 text-gradient text-dark">
                            <span class="text-bold">“We are more than satisified with our partnership and are proud of our
                                impact with C-STEMP.”</span>
                            <br>
                            <small class="blockquote-footer">
                                Bldr. Samson Ameh Opaluwah, CORBON.
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="py-7 bg-cover position-relative bg-gradient-dark" id="projectform">
            <img src="/img/shapes/waves-white.svg" alt="pattern-lines"
                class="position-absolute start-0 top-0 w-100 h-100 opacity-4">
            <div class="container position-relative z-index-2">
                <div class="row">
                    <div class="col-md-5 text-start">
                        <h5 class="text-white mb-lg-0 mb-5 text-justify px-4">
                            We're on a mission to transform lives through quality TVET education. Your support can make a
                            real impact. Join us in empowering individuals, building sustainable careers, and driving
                            positive change in communities. Your donation, no matter the size, is an investment in a
                            brighter future. Together, we can create opportunities and unlock potential. Thank you for being
                            a part of our journey.
                        </h5>
                        <div class="row mt-5">
                            <!-- <div class="col-sm-4 col-6 ps-sm-0 me-auto">
                                    <RouterLink to="/donate" class="btn bg-gradient-primary mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto w-100 d-block">
                                        Donate</RouterLink>
                                </div>
                                <div class="col-sm-4 col-6 ps-sm-0 me-lg-0 me-auto">
                                    <RouterLink to="/contact" class="btn btn-white mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto w-100 d-block">Contact Us
                                    </RouterLink>
                                </div> -->
                        </div>
                    </div>
                    <div class="col-md-7 m-auto">
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfBpbSMxscyWS0_ruQ-uvlgc3xPqO1d3hawGenwz8XtAQbqNA/viewform?embedded=true"
                            width="800" height="800" frameborder="0" marginheight="0" marginwidth="0"
                            style="width: 100%">Loading…</iframe>
                    </div>
                </div>
            </div>
            <img src="/img/shapes/waves-white.svg" alt="pattern-lines"
                class="position-absolute start-0 top-0 w-100 opacity-4">

        </section>

    </div>
</template>

<script>
import BaseNav from '../components/navbars/BaseNav.vue';
import ProjectGallery from "../components/ProjectGallery.vue";
import ProjectService from '../services/ProjectService';

export default {
    components: {
        BaseNav,
        ProjectGallery
    },
    data() {
        return {
            projectList: []
        };
    },
    mounted() {
        ProjectService.getProjectList()
            .then(value => console.log(value, this.projectList = value))
            .catch(error => console.log('Error: unable to fetch projects.', {
                error: error.message || error
            }))
    },
    methods: {}

}
</script>
