import { defineStore } from "pinia";

const initialCountry = 'Nigeria'; // TODO determine initial countrty from Geo and IP data

const stringifiedNewFundRaiser = localStorage.getItem("newFundRaiser");

const newFundRaiser = !!stringifiedNewFundRaiser ? {...JSON.parse(stringifiedNewFundRaiser)} : {
    category: '',
    subCategory: '',
    title: '',
    story: '',
    country: initialCountry,
    goal: '',
    target: '',
    sdgs: []
};

export const getNewFundRaiserStore = defineStore("newFundRaiser", {
    state: () => ({
            newFundRaiser
        }),
    actions: {
        commit (value) {

            this.newFundRaiser = value;

            localStorage.setItem("newFundRaiser", JSON.stringify(this.newFundRaiser));
        }
    }
});
