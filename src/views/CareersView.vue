<template>
<div>
    <!-- -------- START HEADER 1 w/ text and image on right ------- -->
    <header>
        <div class="page-header min-vh-75 ">
            <div class="oblique position-absolute top-0 h-75 d-md-block d-none">
                <div class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style="background-image:url(/img/backgrounds/projects.jpg);"></div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
                        <h1 class="text-gradient text-primary">Work With Us</h1>
                        <!-- <h1 class="mb-4">Work With Us</h1> -->
                        <p class=" pe-5 me-5 my-4 text-gradient text-dark">
                            Join C-STEMP: Where Artistry Meets Purpose. Volunteer to empower others or find your dream job. 
                            <br/>
                            Make a difference in TVET today!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- -------- END HEADER 1 w/ text and image on right ------- -->
   
    
     <!-- -------- START Features w/ image on left & title & text & 3 cols on soft background -------- -->
    <section class="pb-5 bg-cover position-relative" style="//background-image: url(/img/backgrounds/curved1.jpg)">
        <div class="container position-relative z-index-2">
            <div class="row">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfQOjV8I0cqe0VK2xz9bLWqrpb2PXMZ8zpEWrVA56uGdsaf_A/viewform?embedded=true" width="800" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
    </section>
    <!-- -------- END Features w/ image on left & title & text & 3 cols on soft background -------- -->

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
    methods: {},
    mounted() {}

}
</script>
