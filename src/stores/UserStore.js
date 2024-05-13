import { defineStore } from "pinia";

import CookieUtility from "@/utilities/CookieUtility";

const stringifiedUser = localStorage.getItem("user");

const user = !!stringifiedUser ? JSON.parse(stringifiedUser) : {};

export const getUserStore = defineStore("user", {
  state: () => ({
    ...user
  }),
  getters: {
    isLoggedIn: (state) => {
      return !!CookieUtility.tasteCookie("authorization");
    }
  },
  actions: {
    logout() {
      this.authorization = null;
      localStorage.removeItem("user");
      CookieUtility.eatCookie("authorization");
    }
  }
});
