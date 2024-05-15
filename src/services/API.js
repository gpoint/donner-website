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

            const {data: responseData} = await axios.post(`${apiURL + resource + stringifiedQuery}`, data, {
                headers: {
                    ...headers,
                    ...authorizationHeaders
                }
            });

            return responseData;

        } catch (error) {

            ErrorHandler.handleError(error);
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