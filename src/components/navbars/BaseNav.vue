<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white z-index-3 py-3" :class="display">
        <div class="container">
            <a href="/" class="navbar-brand" rel="tooltip" data-placement="bottom">
                <img height="40" src="/img/logo.png" alt="C-STEMP">
            </a>
            <button class="navbar-toggler shadow-none ms-2" :class="collapsed" @click="collapse" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" :aria-expanded="!menuCollapsed" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon mt-2">
                    <span class="navbar-toggler-bar bar1 bg-primary"></span>
                    <span class="navbar-toggler-bar bar2 bg-warning"></span>
                    <span class="navbar-toggler-bar bar3 bg-primary"></span>
                </span>
            </button>
            <div class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" :class="show" id="navigation">
                <ul class="navbar-nav navbar-nav-hover mx-auto">
                    <!-- <li class="nav-item mx-2">
                        <RouterLink to="/" class=" nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                            <strong v-if="isActiveRoute('home')" class="text-gradient bg-gradient-primary">Home</strong>
                            <span v-else>Home</span>
                        </RouterLink>
                    </li> -->
                    <!-- <li class="nav-item mx-2">
                        <RouterLink to="/about" class=" nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                            <strong v-if="isActiveRoute('about')" class="text-gradient bg-gradient-primary">About</strong>
                            <span v-else>About Us</span>
                        </RouterLink>
                    </li> -->

                    <!-- <li class="nav-item mx-2">
                        <RouterLink to="/careers" class=" nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                            <strong v-if="isActiveRoute('careers')" class="text-gradient bg-gradient-primary">Careers</strong>
                            <span v-else>Careers</span>
                        </RouterLink>
                    </li> -->
                    <!-- <li class="nav-item mx-2">
                        <RouterLink to="/projects" class=" nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                            <strong v-if="isActiveRoute('projects')" class="text-gradient bg-gradient-primary">Projects</strong>
                            <span v-else>Projects</span>
                        </RouterLink>
                    </li> -->
                    <!-- <li class="nav-item mx-2">
                        <RouterLink to="/resources" class=" nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                            <strong v-if="isActiveRoute('resources')" class="text-gradient bg-gradient-primary">Resources</strong>
                            <span v-else>Resources</span>
                        </RouterLink>
                    </li>
                    <li class="nav-item mx-2">
                        <RouterLink to="/volunteer" class=" nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                            <strong v-if="isActiveRoute('volunteer')" class="text-gradient bg-gradient-primary">Volunteer</strong>
                            <span v-else>Volunteer</span>
                        </RouterLink>
                    </li> -->
                    <!-- <li class="nav-item mx-2">
                        <RouterLink to="/contact" class=" nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                            <strong v-if="isActiveRoute('contact')" class="text-gradient bg-gradient-primary">Contact Us</strong>
                            <span v-else>Contact Us</span>
                        </RouterLink>
                    </li> -->

                     <li class="nav-item mx-2 d-lg-none d-block">
                        <RouterLink to="/raisers/create" class=" nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" role="button">
                            <strong class="text-gradient bg-gradient-primary">Create a Raiser</strong>
                        </RouterLink>
                    </li> 

                </ul>

                <ul class="navbar-nav d-lg-block d-none">
                     <li class="nav-item">
                        <RouterLink to="/raisers/create" class="btn btn-sm bg-gradient-primary btn-round mb-0 me-1" role="button">
                            Create a Raiser
                        </RouterLink>
                    </li> 
                </ul>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->
</template>

<script>
    import { getNavigationStore } from "@/stores/navigation";
    import { getUserStore } from "@/stores/user";

    export default {
        data() {
            return {
                menuCollapsed: true
            };
        },
        computed: {
            collapsed() {
                return !this.menuCollapsed ? 'collapsed' : '';
            },
            show() {
                return !this.menuCollapsed ? 'show' : '';
            },
            display() {
                const navigationStore = getNavigationStore();

                return navigationStore.$state.showNavigationBar ? "d-block" : "d-none";
            }
        },
        methods: {
            collapse() {
                this.menuCollapsed = !this.menuCollapsed;
            },
            isActiveRoute(name) {
                return this.$route.name === name;
            }
        },
        mounted() {

            const html = document.documentElement;
            html.scrollTop -= html.scrollTop;
        }
    };
</script>
