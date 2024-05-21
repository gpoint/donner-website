import { defineStore } from "pinia";

import CookieUtility from "@/utilities/CookieUtility";

const stringifiedUser = localStorage.getItem("user");

const user = !!stringifiedUser ? JSON.parse(stringifiedUser) : {};

export const getUserStore = defineStore("user", {
  state: () => ({
    ...user
  }),
  actions: {
    logout() {
      this.authorization = null;
      localStorage.removeItem("user");
      CookieUtility.chowCookie("authorization");
    }
  }
});
