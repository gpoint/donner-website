<template>
    <div id="toastPane">
        <div id="ofBar" v-for="(toast, index) in toasts">
            <div id="ofBar-logo"> 
                <img alt="creative-tim-logo" src="/favicon.ico"></div>
            <div id="ofBar-content" :class="toast.textClasses" v-html="toast.message">

            </div>
            <div id="ofBar-right">
                <a v-if="toast.linkUrl" :href="toast.linkUrl" v-html="toast.linkText || toast.linkUrl" target="_blank"  id="btn-bar"></a>
                <a v-if="toast.closable != undefined ? toast.closable : true" id="close-bar" class="text-danger text-gradient" @click.prevent="clearToast(index)">×</a>
            </div>
        </div>
    </div>
</template>
<script>

    import { getNotificationStore } from '@/stores/NotificationStore';

    export default {
        methods: {
            clearToast(index) {
                
                const notificationStore = getNotificationStore();
                return notificationStore.clearToast(index);
            }
        },
        computed: {
            toasts() {
                
                const notificationStore = getNotificationStore();
                return notificationStore.$state.toasts;
            }
        }
    }
</script>
<style >
    
    #toastPane {
        z-index: 1000000;
        position: fixed;
        top: 0;
        padding-top: 20px;
        width: 90%;
        padding-left: 5%;
        padding-right: 5%;
        height: 40vh;
        overflow-y: scroll;
    }
    
    #toastPane:empty {
        z-index: -1;
    }

    #ofBar {
        background: #fff;
        z-index: 999999999;
        font-size: 15px;
        color: #333;
        padding: 5px 20px 6px 12px;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 1.5rem;
        position: relative;
        margin-top: 25px;
        width: 80%;
        left: 0;
        right: 0;
        float: right;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 0 13px 27px -5px rgba(50,50,93,0.25), 0 8px 16px -8px rgba(0,0,0,0.3), 0 -6px 16px -6px rgba(0,0,0,0.025);
    }

    #ofBar-logo img {
        height: 50px;
    }

    #ofBar-content {
        align-content: center;
        display: inline;
        padding: 0 15px;
    }

    #ofBar-right {
        display: flex;
        align-items: center;
    }

    #ofBar b {
        font-size: 15px !important;
    }
    #count-down {
        display: initial;
        padding-left: 10px;
        font-weight: bold;
        font-size: 20px;
    }
    #close-bar {
        font-size: 37px;
        opacity: 0.6;
        cursor: pointer;
        /*color: #808080;*/
        font-weight: bold;
        
    }
    #close-bar:hover{
        opacity: 1;
    }
    #btn-bar {
        background-image: linear-gradient(310deg, #367d21, #5cac31);
        color: #fff;
        border-radius: 4px;
        padding: 5px 10px;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        font-size: 12px;
        opacity: .95;
        margin-right: 20px;
        box-shadow: 0 5px 10px -3px rgba(0,0,0,.23), 0 6px 10px -5px rgba(0,0,0,.25);
    }
    #btn-bar, #btn-bar:hover, #btn-bar:focus, #btn-bar:active {
        text-decoration: none !important;
        color: #fff !important;
    }
    #btn-bar:hover{
        opacity: 1;
    }

    #btn-bar span, #ofBar-content span {
        color: red;
        font-weight: 700;
    }

    #oldPriceBar {
        text-decoration: line-through;
        font-size: 16px;
        color: #fff;
        font-weight: 400;
        top: 2px;
        position: relative;
    }
    #newPrice{
        color: #fff;
        font-size: 19px;
        font-weight: 700;
        top: 2px;
        position: relative;
        margin-left: 7px;
    }

    #fromText {
        font-size: 15px;
        color: #fff;
        font-weight: 400;
        margin-right: 3px;
        top: 0px;
        position: relative;
    }

    #pls-contact-me-on-email {
        position: absolute;
        color: white;
        width: 100%;
        height: 100%;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.9);
        z-index: 999;
        cursor: pointer;
        padding-top: 100px;
        padding-left: 50px;
    }

    @media(max-width: 991px){

    }
    @media (max-width: 768px) {
        #count-down {
            display: block;
            margin-top: 15px;
        }

        #ofBar {
            flex-direction: column;
            align-items: normal;
        }

        #ofBar-content {
            margin: 15px 0;
            text-align: center;
            font-size: 18px;
        }

        #ofBar-right {
            justify-content: flex-end;
        }
    }

</style>