/* services */
import API from "./API";

/* stores */
import { getUserStore } from "@/stores/UserStore";

/* utilities */
import CookieUtility from "@/utilities/CookieUtility";

class AccountService {

    getAuthHeader() {

        const authorization = CookieUtility.tasteCookie("authorization");

        return {
            Authorization: `Bearer ${authorization}`
        };

    }

    validateLoggedIn() {
        if (localStorage.getItem("auth") === null) {
            return;
        }
        if (authHeader().Authorization === undefined) {
            localStorage.removeItem("auth");
            window.location = window.location.href;
        }
        axios
                .get(apiURL + "user", {
                    headers: authHeader()
                })
                .then((response) => {
                    if (response.data.isError) {
                        localStorage.removeItem("auth");
                        window.location = window.location.href;
                    } else {
                        var data = JSON.parse(localStorage.getItem("auth"));
                        data.user = response.data.result;
                        localStorage.setItem("auth", JSON.stringify(data));
                    }
                })
                .catch(() => {
//        localStorage.removeItem("auth");
                    // window.location = `${BASE_ENV_URL}/login`;
                });
    }

    async login(payload) {
        
        const { 
            email,
            password,
            rememberDevice
        } = payload;

        try {
            
            const {data} = await API.post("account/login", {
                data: {
                    email,
                    password,
                    rememberDevice
                }
            });
            
            const {user, accessToken} = data;

            const userStore = useUserStore();

            userStore.$patch({
                ...user
            });

            CookieUtility.bakeCookie({
                name: "authorization",
                value: accessToken,
                maxAge: payload.remember ? 86400000 : null
            });

            return user;
            
        } catch (error) {

            throw error;
        }
    }

    async registerUser(payload) {

        // Unbox the payload parameter to form a serializable payload

        const {
            firstName,
            lastName,
            email,
            countryCode,
            phone,
            password,
            receiveUpdates
        } = payload;

        try {

            let response;

            response = await API.post("account/sign-up", {
                data: {
                    firstName,
                    lastName,
                    email,
                    countryCode,
                    phone,
                    password,
                    receiveUpdates
                }
            });


            const {data} = response;

            // Store user and authorization objects

            const {user, accessToken} = data;

            const userStore = useUserStore();

            userStore.$patch({
                ...user,
                authorization: accessToken
            });

            CookieUtility.bakeCookie({
                name: "authorization",
                value: accessToken,
                maxAge: 86400000
            });

            return user;

        } catch (error) {

            throw error;
        }
    }

    async resetPassword(payload) {
        let response;

        try {
            response = await API.post(apiURL + "account/password-reset", {
                email: payload.email
            });
        } catch (error) {
            throw new Error(
                    error.response ? error.response.data.message : error.message
                    );
        }

        const {data} = response;

        return data;
    }

    async validateResetPasswordToken(token) {
        let response;

        try {
            response = await API.get(
                    apiURL + `account/password-reset?token=${token}`
                    );
        } catch (error) {
            throw new Error(
                    error.response ? error.response.data.message : error.message
                    );
        }

        const {data} = response;

        return data;
    }

    async completeResetPassword(token, payload) {
        let response;

        try {
            response = await API.put(
                    apiURL + `account/password-reset?token=${token}`, {
                        password: payload.password
                    }
            );
        } catch (error) {
            
            throw error;
        }

        const {data} = response;

        return data;
    }

    async createVerification({ type = "OTP", channel = "SMS" }) {

        try {

            const {data} = await API.post("account/verification", {
                data: {
                    type,
                    channel
                },
                authorizeRequest: true
            });

            return data;

        } catch (error) {

            throw error;
        }
    }

    logout() {
        
        CookieUtility.eatCookie("authorization");
        
        userStore.logout();
    }
}

export default new AccountService();
