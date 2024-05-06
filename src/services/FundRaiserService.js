import { getNewFundRaiserStore } from "@/stores/new-fund-raiser";

const newFundRaiserStore = getNewFundRaiserStore();

const getters = {

    createFundRaiserCurrentStep: () => window.localStorage.getItem('createFundRaiserCurrentStep'),

    newFundRaiser: () => {
        
        return newFundRaiserStore.$state.newFundRaiser;
    }
};

const setters = {

    createFundRaiserCurrentStep: (value) => window.localStorage.setItem('createFundRaiserCurrentStep', value),
    
    newFundRaiser: async (value) => {
        
        newFundRaiserStore.commit(value);
        
        //async setters.
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