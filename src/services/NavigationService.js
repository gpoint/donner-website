import { getNavigationStore } from "@/stores/navigation";

const navigationStore = getNavigationStore();

const getters = {
    
    showNavigationBar: () => navigationStore.$state.showNavigationBar,
    
    showFooter: () => navigationStore.$state.showFooter
};

const setters = {
    
    showNavigationBar: (value) => navigationStore.$state.showNavigationBar = value,
    
    showFooter: (value) => navigationStore.$state.showFooter = value
};

export default {
    async get(name) {
        return getters[name]();
    },
    
    async set(name, value) {
        setters[name](value);
    }
};