import { getUserStore } from "@/stores/UserStore";

const userStore = getUserStore();

const getters = {

    name: () => userStore.$state.name,

    authorization: () => userStore.$state.authorization,

    isLoggedIn: () => !!userStore.$state.authorization
};

const setters = {
    "*": (user) => {
        localStorage.setItem("user", JSON.stringify(user));

        userStore.$state.patch({
            ...user
        });
    },

    firstName: (value) => userStore.$state.firstName = value,

    lastName: (value) => userStore.$state.lastName = value,

    authorization: (value) => {

        userStore.$state.authorization = value;
    }
};

export default {

    async get(name) {
        try {
            return getters[name]();
        } catch (e) {
            return undefined;
        }
    },

    async set(name, value) {
        try {
            setters[name](value);
        } catch (e) {
            throw new Error(`Unable to set ${name}`);
        }
    }

};