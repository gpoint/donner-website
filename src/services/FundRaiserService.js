import API from "@/services/API";

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
        const newFundRaiserIsComplete = await this.get("newFundRaiserIsComplete");

        if (!newFundRaiserIsComplete) {

            throw new Error("Your fundraiser cannot be created because it is not complete");
        }

        const newFundRaiser = await this.get("newFundRaiser");

        try {
            const response = await API.post("fundraiser", {
                data: {
                    ...newFundRaiser
                }
            });

            return response;
        } catch (error) {
            
            notificationStore.toast({
                message: error.message,
                duration: 5000,
                textClasses: "text-gradient text-warning"
            });
               
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
        } catch(error) {
            
            notificationStore.toast({
                message: error.message,
                duration: 5000
            });
        }

        return titles;

    }
};