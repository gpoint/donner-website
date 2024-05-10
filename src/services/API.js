import axios from "axios";

import config from "./config";
import authHeader from "./auth-header";

const API_URL = config.API_URL;

export default {

    post: async (resource, {query, data, headers}) => {

        const stringifiedQuery = query
                ? Object.keys(query).reduce((stringBuild, currentKey) => `${stringBuild}&${currentKey}=${query[currentKey]}`)
                : '';

        try {

            const { data: responseData } = await axios.post(`${API_URL + resource}?${stringifiedQuery}`, data, {
                headers: {
                    ...headers,
                    ...authHeader
                }
            });
            
            return responseData;

        } catch (error) {
            throw new Error(error.response ? error.response.data.message : error.message);
    }
    },

    get: async (resource, {query, headers}) => {
        return;
    },

    put: async (resource, {query, headers}) => {
        return;
    },

    patch: async (resource, {query, headers}) => {
        return;
    },

    del: async (resource, {query, headers}) => {
        return;
    }
}