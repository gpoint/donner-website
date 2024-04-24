<template>
    <div>

        <section>
            <div class="page-header min-vh-100 align-items-start" style="background-image: url('/img/backgrounds/curved19.jpg');">
                <span class="mask bg-gradient-dark opacity-4"></span>
                <div class="container px-sm-auto px-0">
                    <div class="row">
                        <div class="col-lg-7 col-md-9 mx-sm-auto mx-0 my-4 px-0 px-sm-auto py-sm-7">
                            <div class="card blur rounded-0 min-vh-80">
                                <div class="card-body px-lg-5 py-lg-5 text-start">
                                    <div class="success mb-4">
                                        <div class="icon icon-shape icon-xl rounded-circle bg-white shadow text-center p-3 mx-auto">
                                            <img src='/img/icon.png' class="w-90 h-90 mt-1">
                                        </div>
                                    </div>
                                    <h2>Create an account</h2>
                                    <p class="mb-4">Sign up to publish and share your fundraiser.</p>
                                    <form class="form-section">
                                        <div class="px-md-4 ps-2 pe-4 row">
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm">
                                                    First name <span class="text-gradient text-primary">*</span>
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas fa-user" aria-hidden="true"></i></span>
                                                    <input class="form-control form-control-lg text-lg" required placeholder="Hau'wa" >
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm">
                                                    Last name <span class="text-gradient text-primary">*</span>
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas fa-user" aria-hidden="true"></i></span>
                                                    <input class="form-control form-control-lg text-lg" required placeholder="John" >
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm">
                                                    Email <span class="text-gradient text-primary">*</span>
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas fa-envelope" aria-hidden="true"></i></span>
                                                    <input class="form-control form-control-lg text-lg" required type="email" placeholder="first.last@donner.africa" >
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm">
                                                    Phone <span class="text-gradient text-primary opacity-1">*</span>
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3 py-0">
                                                        <span class="" aria-hidden="true">🇳🇬</span>
                                                        
                                                        <select class="form-control form-control-lg text-lg border-0 ms-2">
                                                            <option>+234</option>
                                                        </select>
                                                        
                                                    </span>
                                                    <input class="form-control form-control-lg text-lg" required type="tel" placeholder="8107758090" >
                                                    <button class="bg-white px-3 mb-0 " type="button" style="border-radius: 0 .5rem .5rem 0; border: solid 1px #141727;">
                                                        <i class="fas fa-phone"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm">
                                                    Password <span class="text-gradient text-primary opacity-1">*</span>
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas fa-lock" aria-hidden="true"></i></span>
                                                    <input class="form-control form-control-lg text-lg" required type="password" placeholder="********" >
                                                </div>
                                            </div>
                                            <div class="form-group mt-3 col-sm-6">
                                                <label class="text-gradient text-dark text-sm">
                                                    Confirm Password <span class="text-gradient text-primary opacity-1">*</span>
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text px-3"><i class="fas fa-lock" aria-hidden="true"></i></span>
                                                    <input class="form-control form-control-lg text-lg" required type="password" placeholder="********" >
                                                </div>
                                            </div>
                                            <div class="form-group mt-3">
                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-primary float-end mt-3" type="submit">
                                                    Sign Up
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>

    export default {
        data() {
            return {};
        },

    }
</script>
