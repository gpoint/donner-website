<template>
<div>
    <base-nav></base-nav>

    <header class="position-relative">
        <div class="page-header min-vh-50" style="background-image: url('/img/backgrounds/office.jpg');">
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-sm-9 text-center mx-auto mb-4">
                        <h2 class="text-white mb-3">What do you want to know?</h2>
                        <div class="row">
                            <div class="col-md-8 col-7">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                                    <input type="text" class="form-control" v-model="searchString" placeholder="Search FAQ">
                                </div>
                            </div>
                            <div class="col-md-4 col-5 text-start ps-0">
                                <a href="#faqs" class="btn bg-gradient-dark w-100 mb-0 h-100" @click="search()">Search</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="position-absolute w-100 z-index-1 bottom-0">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 40" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="moving-waves">
                    <use xlink:href="#gentle-wave" x="48" y="-1" fill="rgba(255,255,255,0.40" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.35)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.25)" />
                    <use xlink:href="#gentle-wave" x="48" y="8" fill="rgba(255,255,255,0.20)" />
                    <use xlink:href="#gentle-wave" x="48" y="13" fill="rgba(255,255,255,0.15)" />
                    <use xlink:href="#gentle-wave" x="48" y="16" fill="rgba(255,255,255,0.95" />
                </g>
            </svg>
        </div>
    </header>

    <section class="py-lg-5 mt-lg-5">
        <div class="container" id="faqs">
            <div class="row my-5">
                <div class="col-md-6 mx-auto text-center">
                    <h2>Frequently Asked Questions</h2>
                </div>
            </div>
            <div class="row" v-if="filteredFAQ.length == 0">

                <div class="col-md-3">
                </div>
                <div class="col-md-6">
                    <h2>Oops!</h2>
                    <p class="justify-content-end">
                        It looks like we couldn't find a matching answer to your question among our frequently asked questions. No worries, though! Please feel free to
                        <strong>
                            <RouterLink to="/contact">ask your question directly</RouterLink>
                        </strong>, and we'll do our best to provide you with the information you need.
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-10 mx-auto">
                    <div class="accordion" id="accordionRental">
                        <div class="accordion-item mb-3" v-for="(content, index) in filteredFAQ" v-bind:key="index">
                            <h5 class="accordion-header" :id="'heading' + index">
                                <button class="accordion-button border-bottom font-weight-bold text-start" type="button" data-bs-toggle="collapse" :aria-expanded="FAQs.selectedIndex == index" @click="FAQs.selectedIndex = index">
                                    {{content.question}}
                                    <i class="collapse-close fa fa-plus text-xs pt-1 position-absolute end-0 me-3"></i>
                                    <i class="collapse-open fa fa-minus text-xs pt-1 position-absolute end-0 me-3"></i>
                                </button>
                            </h5>
                            <div class="accordion-collapse collapse" :class="FAQs.selectedIndex == index ? 'show' : ''" :aria-labelledby="'heading' + index" data-bs-parent="#accordionRental">
                                <div class="accordion-body text-sm opacity-8">
                                    {{ content.answer}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="mt-10 py-7 bg-gradient-dark position-relative overflow-hidden">
        <img src="/img/shapes/waves-white.svg" alt="pattern-lines" class="position-absolute start-0 top-0 w-100 opacity-6">
        <div class="container position-relative z-index-2">
            <div class="row">
                <div class="col-lg-8 col-md-8 m-auto text-start">
                    <h5 class="text-white mb-lg-0 mb-5">
                        We're on a mission to transform lives through quality TVET education. Your support can make a real impact. Join us in empowering individuals, building sustainable careers, and driving positive change in communities. Your donation, no matter the size, is an investment in a brighter future. Together, we can create opportunities and unlock potential. Thank you for being a part of our journey.
                    </h5>
                </div>
                <div class="col-md-4 m-auto">
                    <div class="row">
                        <div class="col-sm-4 col-6 ps-sm-0 ms-auto">
                            <RouterLink to="/donate" class="btn bg-gradient-primary mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto w-100 d-block">Donate</RouterLink>
                        </div>
                        <div class="col-sm-4 col-6 ps-sm-0 me-lg-0 me-auto">
                            <RouterLink to="/contact" class="btn btn-white mb-0 ms-lg-3 ms-sm-2 mb-sm-0 mb-2 me-auto w-100 d-block">Contact Us</RouterLink>
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
        return {
            FAQs: {
                selectedIndex: 0,
                content: [{
                        question: "What is TVET, and why is it important?",
                        answer: "TVET stands for Technical and Vocational Education and Training. It's crucial because it equips individuals with practical skills, making them job-ready and contributing to economic growth.",
                    },
                    {
                        question: "How does your charity support TVET education?",
                        answer: "We support TVET by funding programs, providing resources, and advocating for quality training and education.",
                    },
                    {
                        question: "Who benefits from your TVET initiatives?",
                        answer: "Our initiatives benefit a wide range of individuals, including students, unemployed youth, underserved communities, and industry professionals seeking to upskill.",
                    },
                    {
                        question: "How can I donate to your charity?",
                        answer: "Donating is easy. You can contribute online through our secure donation portal or explore other giving options on our website.",
                    },
                    {
                        question: "Are my donations tax-deductible?",
                        answer: "Yes, we are a registered charity, and your donations are typically tax-deductible. Please consult your local tax laws for details.",
                    },
                    {
                        question: "What types of TVET programs do you support?",
                        answer: "We support a variety of TVET programs, including technical skills training, vocational courses, apprenticeships, and more.",
                    },
                    {
                        question: "How do you ensure the quality of TVET programs you fund?",
                        answer: "We work with accredited institutions, monitor program outcomes, and collaborate with industry experts to ensure quality and relevance.",
                    },
                    {
                        question: "Do you offer scholarships or financial aid to TVET students?",
                        answer: "Yes, we provide scholarships and financial aid to eligible TVET students to help cover tuition fees and related expenses.",
                    },
                    {
                        question: "Can I volunteer with your organization?",
                        answer: "Absolutely. We welcome volunteers who can contribute their time, skills, and expertise to support our initiatives. Visit our volunteer page for more information.",
                    },
                    {
                        question: "How can my company partner with your charity?",
                        answer: "Corporate partnerships are essential. We offer opportunities for businesses to collaborate, sponsor programs, and support our mission. Contact our partnership team for details.",
                    },
                    {
                        question: "What outcomes have you achieved through your TVET initiatives?",
                        answer: "We've seen increased employability, higher income levels, and stronger communities as a result of our TVET programs.",
                    },
                    {
                        question: "What geographical areas do you serve?",
                        answer: "We work in [mention regions or countries] to expand access to quality TVET education.",
                    },
                    {
                        question: "How do you measure the impact of your programs?",
                        answer: "We use various metrics, such as graduation rates, job placements, and feedback from beneficiaries, to assess the impact of our programs.",
                    },
                    {
                        question: "Do you offer guidance for TVET career paths and job placements?",
                        answer: "Yes, we provide career counseling and job placement assistance to help students transition into the workforce.",
                    },
                    {
                        question: "How do you involve the community in your TVET initiatives?",
                        answer: "We engage the community through awareness campaigns, community partnerships, and involving local leaders in program design.",
                    },
                    {
                        question: "What is the long-term vision of your organization in TVET?",
                        answer: "Our vision is to create a sustainable, skilled workforce, drive economic development, and improve the lives of individuals through TVET.",
                    },
                    {
                        question: "How can I stay updated on your work and activities?",
                        answer: "You can follow us on social media, or regularly visit our website for updates and news.",
                    },
                    {
                        question: "Are there opportunities for beneficiaries to share their success stories?",
                        answer: "Yes, we encourage beneficiaries to share their stories. Visit our 'Projects' section to read inspiring accounts.",
                    },
                    {
                        question: "How are my donations used to support TVET programs?",
                        answer: "Your donations go towards funding training, educational materials, scholarships, and program administration, directly benefiting students and communities.",
                    },
                    {
                        question: "Can I nominate a TVET institution or program for your support?",
                        answer: "Yes, we welcome nominations and program suggestions. Please contact our team to discuss potential partnerships.",
                    },
                ]
            },
            searchString: '',
        };
    },
    computed: {
        filteredFAQ() {
            return this.FAQs.content.filter(({
                question,
                answer
            }) => {
                return question.toLowerCase().includes(this.searchString.toLowerCase().trim()) ||
                    answer.toLowerCase().includes(this.searchString.toLowerCase().trim());
            });
        },
    },
    methods: {
        search() {
            return;
        },
    },
    mounted() {
        $(this.$refs.pop).html("pop");
    }

}
</script>
