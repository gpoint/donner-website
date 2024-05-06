import { getUserStore } from "@/stores/user";

const userStore = getUserStore();

const getters = {
    
    name: () => userStore.$state.name,
    
    authorization: () => userStore.$state.authorization
};

const setters = {
    
    firstName: (value) => userStore.$state.firstName = value,
    
    lastName: (value) => userStore.$state.lastName = value,
    
    authorization: (value) => userStore.$state.authorization = value
};

export default {
    async get(name) {
        return getters[name]();
    },
    
    async set(name, value) {
        setters[name](value);
    }
};