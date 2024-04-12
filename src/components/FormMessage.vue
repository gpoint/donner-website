<template>
<div>
    <div readonly class="mb-3 text-light btn-block p-2" :class="'alert-' + type" :style=" style " v-if="message != '' && message != null" @click="update" style="font-size: 0.775rem;border-radius:5px;">
        <strong class="float-end my-1 text-center bg-white" :class="`text-${type}`" style="height:17px;width:17px;font-size:17px;line-height:15px;border-radius:100%;">
            &times;
        </strong>
        <span class="text-white" v-html="message"></span>
    </div>
</div>
</template>

<script>
export default {
    name: "form-message",
    props: {
        message: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "info",
        },
    },
    emits: ['update:message'],
    computed: {
        style() {
            switch (this.type) {
                case "info":
                    return "";
                case "success":
                    return "";
                case "warning":
                    return "";
                case "danger":
                    return "";
                case "primary":
                    return "";
                case "light":
                    return "";
                case "dark":
                    return "";
                case "default":
                default:
                    return "#fff";
            }
        },
        text_color() {
            switch (this.type) {
                case "info":
                    return "";
                case "success":
                    return "";
                case "warning":
                    return "";
                case "danger":
                    return "";
                case "primary":
                    return "";
                case "light":
                    return "";
                case "dark":
                    return "";
                case "default":
                default:
                    return "#fff";
            }
        }
    },
    methods: {
        update() {
            this.$emit('update:message', '');
        }
    },
}
</script>
