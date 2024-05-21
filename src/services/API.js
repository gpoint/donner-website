/* packages */
import axios from "axios";

/* errors */
import { ErrorHandler } from "@/errors";

/* services */
import AccountService from "@/services/AccountService";
import ConfigurationService from "@/services/ConfigurationService";

const apiURL = ConfigurationService.get("apiURL");

export default {

    post: async (resource, {query, data, headers, authorizeRequest = false}) => {

        let stringifiedQuery = "";

        if (query) {
            stringifiedQuery = `?${Object.keys(query).reduce((previousValue, currentValue) => `${previousValue}&${currentValue}=${query[currentValue]}`)}`;
        }

        try {

            const authorizationHeaders = authorizeRequest ? AccountService.getAuthHeader() : {};

            const {data: response} = await axios.post(`${apiURL + resource + stringifiedQuery}`, data, {
                headers: {
                    ...headers,
                    ...authorizationHeaders
                }
            });

            return {
                data: response.data,
                meta: response.meta
            };

        } catch (error) {

            ErrorHandler.handleError(error);
        }
    },

    get: async (resource, {query, headers}) => {
        return;
    },

    put: async (resource, {query, data, headers, authorizeRequest = false}) => {

        let stringifiedQuery = "";

        if (query) {
            stringifiedQuery = `?${Object.keys(query).reduce((previousValue, currentValue) => `${previousValue}&${currentValue}=${query[currentValue]}`)}`;
        }

        try {

            const authorizationHeaders = authorizeRequest ? AccountService.getAuthHeader() : {};
            
            const {data: response} = await axios.put(`${apiURL + resource + stringifiedQuery}`, data, {
                headers: {
                    ...headers,
                    ...authorizationHeaders
                }
            });

            return {
                data: response.data,
                meta: response.meta
            };

        } catch (error) {

            ErrorHandler.handleError(error);
        }
    },

    patch: async (resource, {query, data, headers, authorizeRequest = false}) => {

        let stringifiedQuery = "";

        if (query) {
            stringifiedQuery = `?${Object.keys(query).reduce((previousValue, currentValue) => `${previousValue}&${currentValue}=${query[currentValue]}`)}`;
        }

        try {

            const authorizationHeaders = authorizeRequest ? AccountService.getAuthHeader() : {};

            
            const {data: response} = await axios.patch(`${apiURL + resource + stringifiedQuery}`, data, {
                headers: {
                    ...headers,
                    ...authorizationHeaders
                }
            });

            return {
                data: response.data,
                meta: response.meta
            };

        } catch (error) {

            ErrorHandler.handleError(error);
        }
    },

    del: async (resource, {query, headers}) => {
        return;
    }
}