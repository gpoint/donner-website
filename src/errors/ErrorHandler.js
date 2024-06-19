/* errors */
import BaseError from "./BaseError";

import { getNotificationStore } from  "@/stores/NotificationStore";

export default {

    handleError: (error) => {
        
        const notificationStore = getNotificationStore();

        switch(error.message) {
            case 'Network Error': {
//                    notificationStore.toast({
//                        message: "You are disconnected... <b> Check your network connection</b>"
//                    });
                    
            }
            default:
                break;
        }
    
        throw new BaseError(error);
    }
};