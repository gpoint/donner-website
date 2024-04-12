<template>
    <!-- ---- START FOOTER 2 dark w/ bg image 5 cols & subscribe area & social---- -->
    <footer class="footer py-7 position-relative bg-gradient-primary overflow-hidden">
        <img src="/img/shapes/waves-white.svg" alt="pattern-lines" class="position-absolute start-0 top-0 w-100 opacity-4">
        <div class="container position-relative mt-5">
            <div class="row ">
                <div class="col-lg-4 col-md-4 col-12 mb-5 ps-4">
                    <h6 class="text-white text-sm">Reach Us</h6>
                    <div class="d-flex text-white">
                        <div>
                            <i class="fas fa-envelope text-sm"></i>
                        </div>
                        <div class="ps-3">
                            <span class="text-sm opacity-8">support@donner.africa</span>
                        </div>
                    </div>
                    <div class="d-flex py-2 text-white">
                        <div>
                            <i class="fas fa-map-marker-alt text-sm"></i>
                        </div>
                        <div class="ps-3 pe-5">
                            <span class="text-sm opacity-8">Elijah House, 3 Abbey Street, after NYSC Bus Stop, Along Kubwa
                                Express Way. Bwari District, Abuja, Nigeria.</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-6 mb-5 ps-4">
                    <h6 class="text-white text-sm">Organization</h6>
                    <ul class="flex-column ms-n3 nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link text-white opacity-8" to="/donate">
                                Donate
                            </RouterLink>
                        </li>

                        <li class="nav-item">
                            <RouterLink class="nav-link text-white opacity-8" to="/projects">
                                Projects
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link text-white opacity-8" to="/about">
                                About Us
                            </RouterLink>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-white opacity-8" href="https://cstempedutech.com">
                                L
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-3 col-md-2 col-6">
                    <h6 class="text-white text-sm">Support</h6>
                    <ul class="flex-column ms-n3 nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link text-white opacity-8" to="/faqs">
                                FAQs
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link text-white opacity-8" to="/contact">
                                Contact Us
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link text-white opacity-8" to="/careers">
                                Work With Us
                            </RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link text-white opacity-8" to="/training">
                                Request Training
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <!-- <div class="col-lg-3 col-md-2 col-4">
                <h6 class="text-white text-sm">Work With Us</h6>
                <ul class="flex-column ms-n3 nav">
                    <li class="nav-item">
                        <RouterLink class="nav-link text-white opacity-8" to="/volunteer">
                            Volunteer
                        </RouterLink>
                    </li>

                    <li class="nav-item">
                        <RouterLink class="nav-link text-white opacity-8" to="/submit-project">
                            Submit a project
                        </RouterLink>
                    </li>
                </ul>
            </div> -->
                <div class="col-lg-3 col-md-4 col-sm-6 col-8 ms-md-auto ps-4">
                    <h6 class="text-white text-md-end text-sm mb-0">Language</h6>
                    <ul class="nav flex-column">
                        <li class="nav-item mt-3" id="footerLanguageDiv">
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="horizontal light mb-5 mt-lg-5">
            <!-- <div class="row">
            <div class="col-lg-6 text-start">
                <h6 class="text-white">Subscribe to our newsletters</h6>
                <p class="text-white opacity-8 mb-lg-0 mb-3">The latest news, articles and resources sent to your inbox.</p>
            </div>
            <div class="col-lg-4 ms-auto text-end my-auto">
                <div class="row">
                    <div class="col-md-8 col-7">
                        <div class="form-group mb-0">
                            <div class="input-group input-group-alternative">
                                <input class="form-control" placeholder="E-mail" type="email">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-5 text-start ps-0">
                        <button type="button" class="btn bg-gradient-primary mb-0 h-100">Subscribe</button>
                    </div>
                </div>
            </div>
        </div> -->
            <hr class="horizontal light my-5">
            <div class="row">
                <div class="col-md-8 my-auto">
                    <p class="text-white mb-0 opacity-8">
                        Copyright © {{ new Date().getFullYear() }}
                        <strong>
                            <a class="text-white" href="https://donner.africa">
                                Donner  Africa
                            </a>
                        </strong>
                    </p>
                </div>
                <div class="col-md-4  ms-auto text-end">
                    <div class="d-flex justify-content-end">
                        <a href="https://www.facebook.com/cstempng/" target="_blank"><i
                                class="fab fa-facebook text-lg text-white me-4"></i></a>
                        <!-- <a href="javascript:;"><i class="fab fa-instagram text-lg text-white me-4"></i></a> -->
                        <!-- <a href="javascript:;"><i class="fab fa-twitter text-lg text-white me-4"></i></a> -->
                        <a href="https://www.linkedin.com/company/c-stemp" target="_blank"><i
                                class="fab fa-linkedin text-lg text-white"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- ---- END FOOTER 2 dark w/ bg image 5 cols & subscribe area & social---- -->
</template>

<script>
const attachTranslator = () => {

    try {

        const googleTranslateDiv = document.getElementById(":0.targetLanguage");

        const translateSelect = googleTranslateDiv.children[0];

        translateSelect.classList.add("form-control");

        document.getElementById("footerLanguageDiv").appendChild(translateSelect);

    } catch (error) {
        setTimeout(attachTranslator, 1000);
    }
}
export default {
    mounted() {
        attachTranslator();
    }

}
</script>
