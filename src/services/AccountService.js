/* services */
import API from "./API";

import {ErrorHandler} from "@/errors"

/* services */
import UserService from "@/services/UserService";

/* utilities */
import CookieUtility from "@/utilities/CookieUtility";

class AccountService {

    getAuthHeader() {

        const authorization = CookieUtility.nibble("authorization");

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
            
            const {accessToken} = data;

            CookieUtility.bakeCookie({
                name: "preAuthorization",
                value: accessToken,
                maxAge: 1800
            });

            return true;
            
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

            const {data} = await API.post("account/sign-up", {
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
            
            const {accessToken} = data;
            
            CookieUtility.bakeCookie({
                name: "preAuthorization",
                value: accessToken,
                maxAge: 1800
            });

            return true;

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

    async initiateAccountVerification({ type = "CODE", channel = "SMS" }) {

        try {

            const {data} = await API.post("account/verification", {
                data: {
                    type,
                    channel
                },
                headers: {
                    Authorization: `Bearer ${CookieUtility.nibble("preAuthorization")}`
                }
            });
            
            const {verification} = data;

            return verification;

        } catch (error) {

            throw error;
        }
    }
    
    async completeAccountVerification({ code }) {

        try {

            const {data, meta} = await API.patch(`account/verification`, {
                data: {
                    code
                },
                headers: {
                    Authorization: `Bearer ${CookieUtility.nibble("preAuthorization")}`
                }
            });
            
            const {accessToken, accessDuration, authorized} = meta;

            CookieUtility.bakeCookie({
                name: "authorization",
                value: accessToken,
                maxAge: accessDuration/1000
            });
            
            CookieUtility.chowCookie("preAuthorization");
            
            UserService.set("user", {
                ...authorized
            });

            return true;

        } catch (error) {

            throw error;
        }
    }

    logout() {
        
        CookieUtility.chowCookie("authorization");
        
//        userStore.logout();
    }
}

export default new AccountService();
