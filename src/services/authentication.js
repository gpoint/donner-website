import axios from "axios";

import config from "./config";
import authHeader from "./auth-header";

import { useUserStore } from "../stores/user";

import cookieUtils from "../utils/cookie.utils";

var API_URL = config.API_URL;

class AuthService {
  validateLoggedIn() {
    if (localStorage.getItem("auth") == null) {
      return;
    }
    if (authHeader().Authorization == undefined) {
      localStorage.removeItem("auth");
      window.location = window.location.href;
    }
    axios
      .get(API_URL + "user", {
        headers: authHeader(),
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
        localStorage.removeItem("auth");
        // window.location = `${BASE_ENV_URL}/login`;
      });
  }

  async login(payload) {
    let response;

    try {
      response = await axios.post(API_URL + "account/login?role=USER", {
        email: payload.email,
        password: payload.password,
        remember: payload.remember,
      });
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    }

    const { data } = response;

    const { user, accessToken } = data;

    const userStore = useUserStore();

    userStore.$patch({
      ...user,
      authorization: accessToken,
    });

    localStorage.setItem("user", JSON.stringify(user));

    cookieUtils.bakeCookie({
      name: "authorization",
      value: accessToken,
      maxAge: payload.remember ? 60 * 60 * 24 * 183 : null,
    });

    return user;
  }

  async register(payload) {
    let response;

    try {
      response = await axios.post(API_URL + "account/registration?role=USER", {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        password: payload.password,
        confirmPassword: payload.confirmPassword,
      });
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    }

    const { data } = response;

    const { user, accessToken } = data;

    const userStore = useUserStore();

    userStore.$patch({
      ...user,
      authorization: accessToken,
    });

    localStorage.setItem("user", JSON.stringify(user));

    cookieUtils.bakeCookie({
      name: "authorization",
      value: accessToken,
      maxAge: 60 * 60 * 24 * 183,
    });

    return user;
  }

  async resetPassword(payload) {
    let response;

    try {
      response = await axios.post(API_URL + "account/password-reset", {
        email: payload.email,
      });
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    }

    const { data } = response;

    return data;
  }

  async validateResetPasswordToken(token) {
    let response;

    try {
      response = await axios.get(
        API_URL + `account/password-reset?token=${token}`
      );
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    }

    const { data } = response;

    return data;
  }

  async completeResetPassword(token, payload) {
    let response;

    try {
      response = await axios.put(
        API_URL + `account/password-reset?token=${token}`, {
          password: payload.password,
        }
      );
    } catch (error) {
      throw new Error(
        error.response ? error.response.data.message : error.message
      );
    }

    const { data } = response;

    return data;
  }

  logout() {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
  }
}

export default new AuthService();
