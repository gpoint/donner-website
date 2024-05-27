import API from "./API";

import { ErrorHandler } from "@/errors";

/* stores*/
import { getNewFundRaiserStore } from "@/stores/NewFundRaiserStore";
import { getNotificationStore } from '@/stores/NotificationStore';

const newFundRaiserStore = getNewFundRaiserStore();
const notificationStore = getNotificationStore();

const getters = {

    createFundRaiserCurrentStep: () => {
        return window.localStorage.getItem('createFundRaiserCurrentStep');
    },

    newFundRaiser: () => {
        return newFundRaiserStore.$state.newFundRaiser;
    },

    newFundRaiserIsComplete: (value) => {
        return JSON.parse(window.localStorage.getItem('newFundRaiserIsComplete') || 'false');
    },
    
    draftFundRaiser: () => {
        return JSON.parse(window.localStorage.getItem('draftFundRaiser'));
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
    },

    draftFundRaiser: (value) => {
        window.localStorage.setItem('draftFundRaiser', JSON.stringify(value));
    }
};

const clearers = {

    createFundRaiserCurrentStep: () => {
        window.localStorage.removeItem('createFundRaiserCurrentStep');
    },

    newFundRaiserIsComplete: () => {
        window.localStorage.removeItem('newFundRaiserIsComplete');
    },

    newFundRaiser: async () => {
        newFundRaiserStore.clear();
    },

    draftFundRaiser: () => {
        window.localStorage.removeItem('draftFundRaiser');
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
    
    async clear(name) {
        try {
            clearers[name]();
        } catch (e) {
            throw new Error(`Unable to clear ${name}`);
        }
    },
    
    async getFundRaiserById(fundRaiserId) {
        
        try {
            
            const {data: fundRaiser} = await API.get(`fundraisers/${fundRaiserId}`);
            
            return fundRaiser;
            
        }catch(error) {
            
            throw error;
        }
    },

    async commitNewFundRaiser(newFundRaiser) {
        
        try {
            
            const {data: fundRaiser} = await API.post("fundraisers", {
                data: {
                    ...newFundRaiser
                },
                authorizeRequest: true
            });
            
            await this.set("draftFundRaiser", fundRaiser);
            
            this.clear("newFundRaiser");
            this.clear("newFundRaiserIsComplete");
            this.clear("createFundRaiserCurrentStep");

            return fundRaiser;
            
        } catch (error) {
               
            throw error;
        }
    },

    async generateTitlesForStory(story) {
        
        try {
            
            const {data: titles} = await API.post("fundraiser/story", {
                data: {
                    story
                }
            });

            return titles;
            
        } catch(error) {
            
            notificationStore.toast({
                message: error.message,
                duration: 5000
            });
            
            throw error;
        }

    }
};