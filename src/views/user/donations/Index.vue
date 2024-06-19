<template>
<div>
    <base-nav></base-nav>

    <header class="bg-gradient-dark">
        <div class="page-header min-vh-75" style="background-image: url('/img/shapes/waves-white.svg');">
            <span class="mask bg-gradient-primary opacity-8 "></span>
            <div class="container">
                <div class="row justify-content-center my-7">
                    <div class="col-lg-8 text-center mx-auto my-auto">
                        <h1 class="text-white">Learn an amazing vocation</h1>
                        <p class="lead mb-4 text-white opacity-8">We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to, learn something new.</p>
                    </div>
                </div>

                <div class="row  shadow-lg mt-n6 border-radius-md pb-4 p-3 mx-sm-0 mx-1 position-relative">
                    <form @submit.prevent="search" class="col-12 mt-lg-n2 mt-2">
                        <label class="text-white">Search courses</label>

                        <div class="input-group mb-3">
                            <input v-model="searchString" type="text" class="form-control  form-control-alternative" placeholder="Enter course name" aria-label="Enter course name" aria-describedby="button-search">
                            <button class="btn bg-gradient-warning mb-0" type="button" id="search-button">Search</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </header>

    <!-- -------- START HEADER 5 w/ text and illustration ------- -->

    <section class="my-5">
        <div class="container mt-sm-5 mt-3">
            <div class="row ">
                <div class="col-md-4 col-lg-3 d-none d-md-block">
                    <div class="position-sticky">
                        <div class="card card-plain">
                            <div class="card-header">
                                <h5>Filters</h5>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 my-2">
                                        <div class="card">
                                            <div class="card-header pb-0 mb-0 row">
                                                <h4>Price</h4>
                                            </div>
                                            <div class="card-body row">
                                                <label class="text-md text-muted">
                                                    <input class="form-check-input" type="radio" v-model="filter.price" value=""> All
                                                </label>
                                                <label class="text-md text-muted">
                                                    <input class="form-check-input" type="radio" v-model="filter.price" value="free"> Free
                                                </label>
                                                <label class="text-md text-muted">
                                                    <input class="form-check-input" type="radio" v-model="filter.price" value="paid"> Paid
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 my-2">
                                        <div class="card">
                                            <div class="card-header pb-0 mb-0 row">
                                                <h4>Categories</h4>
                                            </div>
                                            <div class="card-body row">
                                                <label class="text-md text-muted">
                                                    <input class="form-check-input" type="radio" v-model="filter.category" value=""> All
                                                </label>
                                                <label class="text-md text-muted">
                                                    <input class="form-check-input" type="radio" v-model="filter.category" value="beginner"> Construction
                                                </label>
                                                <label class="text-md text-muted">
                                                    <input class="form-check-input" type="radio" v-model="filter.category" value="intermediate"> Digital Skills
                                                </label>
                                                <label class="text-md text-muted">
                                                    <input class="form-check-input" type="radio" v-model="filter.category" value="advanced"> Hospitality
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 my-2">
                                        <div class="card">
                                            <div class="card-header pb-0 mb-0 row">
                                                <h4>Level</h4>
                                            </div>
                                            <div class="card-body row">
                                                <label class="text-md text-muted">
                                                    <input class="form-check-input" type="radio" v-model="filter.level" value=""> All
                                                </label>
                                                <label class="text-md text-muted">
                                                    <input class="form-check-input" type="radio" v-model="filter.level" value="beginner"> Beginner
                                                </label>
                                                <label class="text-md text-muted">
                                                    <input class="form-check-input" type="radio" v-model="filter.level" value="intermediate"> Intermediate
                                                </label>
                                                <label class="text-md text-muted">
                                                    <input class="form-check-input" type="radio" v-model="filter.level" value="advanced"> Advanced
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-9">
                    <div class="row  d-none d-md-block">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-body py-0">
                                    <button @click="layout = 'grid'" class="btn btn-lg bnt-light p-4 mx-2 float-end">
                                        <i class="fa fa-braille"></i>
                                    </button>
                                    <button @click="layout = 'list'" class="btn btn-lg bnt-light p-4 mx-2 float-end">
                                        <i class="fa fa-list"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="layout === 'list'" class="row">
                        <div class="row">
                            <div class="col-md-12 ms-auto me-auto">
                                <div class="card card-blog mt-5 p-2">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="card-image position-relative border-radius-lg">
                                                <div class="blur-shadow-image">
                                                    <img class="img border-radius-lg" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-cart.jpg">
                                                    <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                                        <i class="ni ni-favourite-28"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-7 my-auto ms-md-3 mt-md-auto mt-4">
                                            <h3 class=" w-100 text-truncate">
                                                <a href="javascript:;" class="text-dark font-weight-normal">Miami raised $65 million for pet sittingsitting sitting</a>
                                            </h3>
                                            <p class="text-truncate h">
                                                Finding temporary housing for dog should be as easy as renting an Airbnb. <a href="javascript:;" class="text-dark"> Read More </a>
                                            </p>
                                            <div class="author">
                                                <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar avatar-sm shadow me-2">
                                                <p class="my-auto">Katie Roof</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-12 ms-auto me-auto">
                                <div class="card card-blog mt-5 p-2">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="card-image position-relative border-radius-lg">
                                                <div class="blur-shadow-image">
                                                    <img class="img border-radius-lg" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-cart.jpg">
                                                    <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                                        <i class="ni ni-favourite-28"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-7 my-auto ms-md-3 mt-md-auto mt-4">
                                            <h3 class=" w-100 text-truncate">
                                                <a href="javascript:;" class="text-dark font-weight-normal">Miami raised $65 million for pet sittingsitting sitting</a>
                                            </h3>
                                            <p class="text-truncate h">
                                                Finding temporary housing for dog should be as easy as renting an Airbnb. <a href="javascript:;" class="text-dark"> Read More </a>
                                            </p>
                                            <div class="author">
                                                <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar avatar-sm shadow me-2">
                                                <p class="my-auto">Katie Roof</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-12 ms-auto me-auto">
                                <div class="card card-blog mt-5 p-2">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="card-image position-relative border-radius-lg">
                                                <div class="blur-shadow-image">
                                                    <img class="img border-radius-lg" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-cart.jpg">
                                                    <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                                        <i class="ni ni-favourite-28"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-7 my-auto ms-md-3 mt-md-auto mt-4">
                                            <h3 class=" w-100 text-truncate">
                                                <a href="javascript:;" class="text-dark font-weight-normal">Miami raised $65 million for pet sittingsitting sitting</a>
                                            </h3>
                                            <p class="text-truncate h">
                                                Finding temporary housing for dog should be as easy as renting an Airbnb. <a href="javascript:;" class="text-dark"> Read More </a>
                                            </p>
                                            <div class="author">
                                                <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar avatar-sm shadow me-2">
                                                <p class="my-auto">Katie Roof</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div v-else class="row">
                        <div class="col-lg-4 mb-lg-0 my-4">
                            <div class="card">
                                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                    <a href="javascript:;" class="d-block">
                                        <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                        <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                            <i class="ni ni-favourite-28"></i>
                                        </button>
                                    </a>
                                </div>

                                <div class="card-body pt-3">
                                    <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">House</span>
                                    <a href="javascript:;" class="card-title h5 d-block text-darker">
                                        Shared Coworking
                                    </a>
                                    <p class="card-description mb-4">
                                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                                    </p>
                                    <div class="author align-items-center">
                                        <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
                                        <div class="name ps-3">
                                            <span>Mathew Glock</span>
                                            <div class="stats">
                                                <small>Posted on 28 February</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-lg-0 my-4">
                            <div class="card">
                                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                    <a href="javascript:;" class="d-block">
                                        <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                        <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                            <i class="ni ni-favourite-28"></i>
                                        </button>
                                    </a>
                                </div>

                                <div class="card-body pt-3">
                                    <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">House</span>
                                    <a href="javascript:;" class="card-title h5 d-block text-darker">
                                        Shared Coworking
                                    </a>
                                    <p class="card-description mb-4">
                                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                                    </p>
                                    <div class="author align-items-center">
                                        <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
                                        <div class="name ps-3">
                                            <span>Mathew Glock</span>
                                            <div class="stats">
                                                <small>Posted on 28 February</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-lg-0 my-4">
                            <div class="card">
                                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                    <a href="javascript:;" class="d-block">
                                        <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                        <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                            <i class="ni ni-favourite-28"></i>
                                        </button>
                                    </a>
                                </div>

                                <div class="card-body pt-3">
                                    <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">House</span>
                                    <a href="javascript:;" class="card-title h5 d-block text-darker">
                                        Shared Coworking
                                    </a>
                                    <p class="card-description mb-4">
                                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                                    </p>
                                    <div class="author align-items-center">
                                        <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
                                        <div class="name ps-3">
                                            <span>Mathew Glock</span>
                                            <div class="stats">
                                                <small>Posted on 28 February</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-lg-0 my-4">
                            <div class="card">
                                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                    <a href="javascript:;" class="d-block">
                                        <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                        <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                            <i class="ni ni-favourite-28"></i>
                                        </button>
                                    </a>
                                </div>

                                <div class="card-body pt-3">
                                    <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">House</span>
                                    <a href="javascript:;" class="card-title h5 d-block text-darker">
                                        Shared Coworking
                                    </a>
                                    <p class="card-description mb-4">
                                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                                    </p>
                                    <div class="author align-items-center">
                                        <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
                                        <div class="name ps-3">
                                            <span>Mathew Glock</span>
                                            <div class="stats">
                                                <small>Posted on 28 February</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-lg-0 my-4">
                            <div class="card">
                                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                    <a href="javascript:;" class="d-block">
                                        <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                        <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                            <i class="ni ni-favourite-28"></i>
                                        </button>
                                    </a>
                                </div>

                                <div class="card-body pt-3">
                                    <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">House</span>
                                    <a href="javascript:;" class="card-title h5 d-block text-darker">
                                        Shared Coworking
                                    </a>
                                    <p class="card-description mb-4">
                                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                                    </p>
                                    <div class="author align-items-center">
                                        <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
                                        <div class="name ps-3">
                                            <span>Mathew Glock</span>
                                            <div class="stats">
                                                <small>Posted on 28 February</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-lg-0 my-4">
                            <div class="card">
                                <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                                    <a href="javascript:;" class="d-block">
                                        <img src="/img/backgrounds/paintbrush.jpg" class="img-fluid border-radius-lg">
                                        <button href="javascript:;" class="btn btn-white btn-icon-only btn-rounded z-index-2 position-absolute end-5 top-7" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Add to watchlist" data-bs-original-title="Add to watchlist" aria-describedby="tooltip580017">
                                            <i class="ni ni-favourite-28"></i>
                                        </button>
                                    </a>
                                </div>

                                <div class="card-body pt-3">
                                    <span class="text-gradient text-warning text-uppercase text-xs font-weight-bold my-2">House</span>
                                    <a href="javascript:;" class="card-title h5 d-block text-darker">
                                        Shared Coworking
                                    </a>
                                    <p class="card-description mb-4">
                                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                                    </p>
                                    <div class="author align-items-center">
                                        <img src="/img/backgrounds/curved13.jpg" alt="..." class="avatar shadow">
                                        <div class="name ps-3">
                                            <span>Mathew Glock</span>
                                            <div class="stats">
                                                <small>Posted on 28 February</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- -------- END HEADER 5 w/ text and illustration ------- -->

    <!-- <base-footer></base-footer> -->

</div>
</template>

<script>
import BaseNav from '../components/navbars/BaseNav.vue';
import BaseFooter from '../components/footers/BaseFooter.vue';

export default {
    components: {
        BaseNav,
        BaseFooter,
    },
    data() {
        return {
            searchString: '',
            layout: 'list',
            filter: {
                price: '',
                level: '',
            }
        };
    },
    methods: {
        search() {
            return;
        },
    }

}
</script>
