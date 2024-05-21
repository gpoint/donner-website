/* stores */
import { getUserStore } from "@/stores/UserStore";

/* utilities */
import CookieUtility from "@/utilities/CookieUtility";

const getters = {

    user: () => {
        
        const userStore = getUserStore();
        
        return {
            ...userStore.$state
        };
    },

    isLoggedIn: () => !!CookieUtility.nibble("authorization")
};

const setters = {
    user: (user) => {
        
        localStorage.setItem("user", JSON.stringify(user));

        const userStore = getUserStore();
        
        userStore.$state = {
            ...user
        };
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
            
            console.log(e);
            
            throw new Error(`Unable to set ${name}`);
        }
    }

};