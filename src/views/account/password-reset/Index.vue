<template>
    <div>

        <section>
            <div class="page-header min-vh-100 align-items-start" style="background-image: url('/img/backgrounds/curved19.jpg');">
                <span class="mask bg-gradient-dark opacity-4"></span>
                <div class="container px-sm-auto px-0">
                    <div class="row">
                        <div class="col-lg-6 col-md-7 mx-sm-auto mx-0 my-4 px-0 px-sm-auto py-sm-7">
                            <div class="card blur rounded-0 min-vh-80">
                                <div class="card-body px-lg-5 py-lg-5 text-start">
                                    <div class="success mb-4">
                                        <div class="icon icon-shape icon-xl rounded-circle bg-white shadow text-center p-3 mx-auto">
                                            <img src='/img/icon.png' class="w-90 h-90 mt-1">
                                        </div>
                                    </div>
                                    <h2>Reset your password</h2>
                                    <p class="mb-4">Secure your account with a new password.</p>
                                    <form class="form-section">
                                        <div class="px-md-4 ps-2 pe-4 row">
                                            <div class="form-group mt-3 col-12">
                                                <label class="text-gradient text-dark text-sm">
                                                    Phone number
                                                </label>
                                                <div class="input-group mx-2">
                                                    <span class="input-group-text ps-3 pe-1 py-0">
                                                        <span class="" aria-hidden="true">
                                                            <i class="fas fa-phone"></i>
                                                        </span>
                                                        
                                                        <select class="form-control form-control-lg text-lg border-0 ms-2">
                                                            <option>+234</option>
                                                        </select>
                                                        
                                                    </span>
                                                    <input class="form-control form-control-lg text-lg" required type="tel" placeholder="8107758090" >
                                                    <button class="bg-white px-3 mb-0 " type="button" style="border-radius: 0 .5rem .5rem 0; border: solid 1px #141727;">
                                                        🇳🇬
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="form-group mt-3">
                                            </div>
                                            <div class="form-group">
                                                <span class="text-lg text-gradient text-dark">
                                                    Have an account?
                                                    <RouterLink to="/account/login" class="text-primary text-bold text-gradient">
                                                        Login
                                                    </RouterLink>
                                                </span>
                                                <button class="btn btn-primary float-end" type="submit">
                                                    Next
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
