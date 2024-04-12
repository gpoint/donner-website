<template>
    <div class="row">
        <div class="col-md-3">
            <div class="position-sticky top-2 pe-7">
                <h4 class="mb-5">
                    Years of activity
                </h4>
                <button class="btn text-start p-2 border-radius-lg w-lg-100 w-sm-50" :class="selectedYear === null ? 'bg-gradient-primary' : 'bg-white'" @click="selectedYear = null">
                    <div class="row">
                        <div class="col-9 my-auto ps-4">
                            <h6 class=" mb-0" :class="selectedYear === null ? 'text-white' : 'text-primary'">
                                All time
                            </h6>
                        </div>
                        <div class="col-1 my-auto">
                            <i class="fa fa-arrow-right text-lg "
                                :class="selectedYear === null ? 'text-white' : 'text-primary'"></i>
                        </div>
                    </div>
                </button>
                <button class="btn text-start p-2 border-radius-lg w-lg-100 w-sm-50" v-for="(year, index) in uniqueYears"
                    :key="index" :class="selectedYear === year ? 'bg-gradient-primary' : 'bg-white'"
                    @click="selectYear(year)">
                    <div class="row">
                        <div class="col-9 my-auto ps-4">
                            <h6 class="text-lg mb-0" :class="selectedYear === year ? 'text-white' : 'text-primary'">
                                {{ year }}
                            </h6>
                        </div>
                        <div class="col-1 my-auto">
                            <i class="fa fa-arrow-right text-lg "
                                :class="selectedYear === year ? 'text-white' : 'text-primary'"></i>
                        </div>
                    </div>
                </button>
            </div>
        </div>
        <div class="col-lg-9">
            <hr class="horizontal dark mb-4">
            <div class="row" v-for="(project, index) in filteredProjects" :key="index">
                <div class="col-3">
                    <img class="img w-100 border-radius-lg shadow-lg" :src="project.image" :alt="project.title" style="height: 175px; object-fit: cover">
                    <div class="buttons justify-content-center mt-4">
                            <a href="javascript:;" class="btn btn-sm btn-rounded btn-icon-only pt-1 mb-0"
                                :class="project.completed ? 'bg-gradient-dark' : 'bg-gradient-success'">
                                <i :class="project.completed ? 'fa fa-check' : 'fa fa-cog'" style="font-size: 10px !important;"
                                    aria-hidden="true"></i>
                            </a>
                            <span class="font-weight-bold text-sm ms-2">{{ project.completed ? 'Completed' : 'Ongoing' }}</span>
                        </div>
                </div>
                <div class="col-9 mb-auto">
                    <h4>
                        <a href="javascript:;" class="text-dark text-gradient font-weight-bold">
                            {{ project.title }}
                        </a>
                    </h4>
                    <p class="text-sm">
                        {{ project.description }}
                    </p>
                    <p class="text-sm text-muted">{{ project.month }}, {{ project.year }}</p>
                </div>
                <hr class="horizontal dark my-4">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        projects: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            selectedYear: null
        };
    },
    computed: {
        // Get unique years from projects array
        uniqueYears() {
            const years = this.projects.map(project => project.year);
            return [...new Set(years)].sort((a, b) => b - a); // Sort years in descending order
        },
        // Filter projects by selected year
        filteredProjects() {
            if (!this.selectedYear) return this.projects;
            return this.projects.filter(project => project.year === this.selectedYear);
        }
    },
    methods: {
        // Select a year from pill navigation
        selectYear(year) {
            this.selectedYear = year;
        }
    }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}</style>
