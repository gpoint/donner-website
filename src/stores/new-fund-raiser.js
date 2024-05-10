import { defineStore } from "pinia";

const initialCountry = 'Nigeria'; // TODO determine initial countrty from Geo and IP data

const newFundRaiserBaseModel = {
    category: '',
    subCategory: '',
    title: '',
    story: '',
    country: initialCountry,
    titleMode: 'write',
    goal: '',
    target: '',
    sdgs: []
};

const stringifiedNewFundRaiser = localStorage.getItem("newFundRaiser");

const newFundRaiser = !!stringifiedNewFundRaiser ? {...newFundRaiserBaseModel, ...JSON.parse(stringifiedNewFundRaiser)} : newFundRaiserBaseModel;

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
