import { defineStore } from "pinia";

export const getNotificationStore = defineStore("notification", {
    state: () => ({
            toasts: []
        }),
    getters: {

    },
    actions: {
        toast(toast) {
            const lastToast = this.toasts[this.toasts.length - 1];
            
            if(lastToast){
                if(lastToast.message === toast.message) {
                    return;
                }
            }
            
            this.toasts.push(toast);
            
            const index = this.toasts.length - 1;
            
            const duration = toast.duration || 10000;

            if (duration === -1) {
                return;
            }

            setTimeout(() => this.clearToast(index), duration);
            
        },
        clearToast(index) {
            
            return this.toasts.splice(index, 1);
        }
    }
});
