import { getNavigationStore } from "@/stores/NavigationStore";

const navigationStore = getNavigationStore();

const getters = {
    
    postAuthenticationPath: () => localStorage.getItem("postAuthenticationPath"),
    
    showNavigationBar: () => navigationStore.$state.showNavigationBar,
    
    showFooter: () => navigationStore.$state.showFooter
};

const setters = {
    
    postAuthenticationPath: (value) => localStorage.setItem("postAuthenticationPath", value),
    
    showNavigationBar: (value) => navigationStore.$state.showNavigationBar = value,
    
    showFooter: (value) => navigationStore.$state.showFooter = value
};

const clearers = {
    
    postAuthenticationPath: () => localStorage.clear("postAuthenticationPath")
};

export default {
        
    async get(name) {
        return getters[name]();
    },
    
    async set(name, value) {
        setters[name](value);
    },
    
    async clear(name) {
        clearers[name]();
    }
};