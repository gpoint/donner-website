<template>
    <div>

        <section class="my-10">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7 my-auto">
                        <h2 class="display-1 text-bolder text-gradient text-dark">Sorry, we can't find this page</h2>
                        <h3>Error 404</h3>
                        <p class="text-lg">We suggest you to go to the homepage while we solve this issue.</p>
                        <a href="https://donner.africa" class="btn bg-gradient-primary mt-4 me-3">Go to Homepage</a>
                        <a href="/" class="btn bg-white text-primary mt-4">Start A Donner</a>
                    </div>
                    <div class="col-sm-5 my-auto position-relative">
                        <img class="w-100 position-relative"
                            src="https://e-limi.africa//assets/frontend/athena/img/illustrations/error-404.png"
                            style="filter: hue-rotate(90deg) saturate(2);" alt="404-error">
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import BaseNav from "@/components/navbars/BaseNav.vue";
import ProgressCounter from "@/components/ProgressCounter.vue";

export default {
    components: {
        BaseNav,
        ProgressCounter,
    },
    data() {
        return {
            numberOfProjects: 0,
            numberOfLives: 0,
            numberOfPartners: 0,
            timelineCarousel: {
                selected: 0,
                size: 6,
            }
        };
    },
    methods: {
        timelineCarouselSelectedClass(index) {
            return this.timelineCarousel.selected == index ? 'active' : '';
        },
        slideTimelineCarousel() {
            this.timelineCarousel.selected += this.timelineCarousel.selected != (this.timelineCarousel.size - 1) ? 1 : (-this.timelineCarousel.size + 1)
        },
        bootTimelineCarousel() {
            document.querySelectorAll("");
        }
    },
    mounted() {
        setInterval(this.slideTimelineCarousel, 7000);

        setInterval(() => { if (this.numberOfLives < 15000) this.numberOfLives += 111 }, 20);
    }
};
</script>
