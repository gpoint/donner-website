import { getNewFundRaiserStore } from "@/stores/new-fund-raiser";

const newFundRaiserStore = getNewFundRaiserStore();

const getters = {

    createFundRaiserCurrentStep: () => { 
        return window.localStorage.getItem('createFundRaiserCurrentStep');
    },

    newFundRaiser: () => {
        return newFundRaiserStore.$state.newFundRaiser;
    },
    
    newFundRaiserIsComplete: (value) => {
        return JSON.parse(window.localStorage.getItem('newFundRaiserIsComplete') || 'false');
    }

};

const setters = {

    createFundRaiserCurrentStep: (value) => {
        window.localStorage.setItem('createFundRaiserCurrentStep', value);
    },
    
    newFundRaiserIsComplete: (value) => {
        window.localStorage.setItem('newFundRaiserIsComplete', value);
    },

    newFundRaiser: async (value) => {
        newFundRaiserStore.commit(value);
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
    },

    async createFundRaiser() {
        const newFundRaiserIsComplete = this.get("newFundRaiserIsComplete");
        
        try {
            const response = await axios.post(API_URL + "account/login?role=USER", {
                ...newFundRaiser
            });
        } catch (error) {
            throw new Error(error.response ? error.response.data.message : error.message);
        }
    }
};