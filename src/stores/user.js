import { defineStore } from "pinia";

import cookieUtils from "../utils/cookie.utils";

const stringifiedUser = localStorage.getItem("user");

const user = !!stringifiedUser ? JSON.parse(stringifiedUser) : {};

export const useUserStore = defineStore("user", {
  state: () => ({
    ...user,
    authorization: cookieUtils.seeCookie("authorization"),
  }),
  getters: {
    isLoggedIn: (state) => {
      return !!state.authorization;
    },
  },
  actions: {
    logout() {
      this.authorization = null;
      localStorage.removeItem("user");
      cookieUtils.eatCookie("authorization");
    },
  },
});
