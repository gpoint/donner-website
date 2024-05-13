import axios from "axios";

/* services */
import ConfigurationService from "./ConfigurationService";

/* stores */
import { getUserStore } from "@/stores/UserStore";

/* utilities */
import CookieUtility from "@/utilities/CookieUtility";

var apiURL = ConfigurationService.get("apiURL");

class AuthService {

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
        let response;

        try {
            response = await axios.post(apiURL + "account/login?role=USER", {
                email: payload.email,
                password: payload.password,
                remember: payload.remember
            });
        } catch (error) {
            throw new Error(
                    error.response ? error.response.data.message : error.message
                    );
        }

        const {data} = response;

        const {user, accessToken} = data;

        const userStore = useUserStore();

        userStore.$patch({
            ...user
        });

        CookieUtility.bakeCookie({
            name: "authorization",
            value: accessToken,
            maxAge: payload.remember ? 60 * 60 * 24 * 183 : null
        });

        return user;
    }

    async register(payload) {
        let response;

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

            response = await axios.post(apiURL + "account/sign-up", {
                firstName,
                lastName,
                email,
                countryCode,
                phone,
                password,
                receiveUpdates
            });

        } catch (error) {

            throw new Error(
                    error.response ? error.response.data.message : error.message
                    );

        }

        const {data} = response;

        // Store user and authorization objects

        const {user, accessToken} = data;
        const userStore = useUserStore();

        userStore.$patch({
            ...user,
            authorization: accessToken
        });

        localStorage.setItem("user", JSON.stringify(user));

        CookieUtility.bakeCookie({
            name: "authorization",
            value: accessToken,
            maxAge: 60 * 60 * 24 * 183
        });

        return user;
    }

    async resetPassword(payload) {
        let response;

        try {
            response = await axios.post(apiURL + "account/password-reset", {
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
            response = await axios.get(
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
            response = await axios.put(
                    apiURL + `account/password-reset?token=${token}`, {
                        password: payload.password
                    }
            );
        } catch (error) {
            throw new Error(
                    error.response ? error.response.data.message : error.message
                    );
        }

        const {data} = response;

        return data;
    }

    logout() {
        localStorage.removeItem("auth");
        localStorage.removeItem("user");
        localStorage.removeItem("accessToken");
    }
}

export default new AuthService();
