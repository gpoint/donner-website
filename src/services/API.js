import axios from "axios";

import AuthenticationService from "@/services/AuthenticationService";
import ConfigurationService from "@/services/ConfigurationService";

const apiURL = ConfigurationService.get("apiURL");
//
//const handleError = (error) => {
//    
//    throw new BaseError();
//}

export default {

    post: async (resource, {query, data, headers}) => {

        let stringifiedQuery = "";

        if (query) {
            stringifiedQuery = `?${Object.keys(query).reduce((previousValue, currentValue) => `${previousValue}&${currentValue}=${query[currentValue]}`)}`;
        }

        try {

            const authorizationHeaders = AuthenticationService.getAuthHeader();

            const {data: responseData} = await axios.post(`${apiURL + resource + stringifiedQuery}`, data, {
                headers: {
                    ...headers,
                    ...authorizationHeaders
                }
            });

            return responseData;

        } catch (error) {

            throw error;
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