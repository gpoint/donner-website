<template>
    <div>
        <div readonly class="mb-3 text-light btn-block p-2" :class="'alert-' + type" :style="style"
            v-if="html != '' && html != null" @click="update" style="font-size: 0.775rem;border-radius:5px;">
            <strong class="float-end my-1 text-center bg-white" :class="`text-${type}`" v-if="closeable"
                style="height:17px;width:17px;font-size:17px;line-height:15px;border-radius:100%;">
                &times;
            </strong>
            <span class="text-white" v-html="html"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "form-message",
    props: {
        html: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: "danger"
        },
        closeable: {
            type: Boolean,
            default: true
        },
        autoCloseDuration: {
            type: Number,
            default: 1500
        }
    },
    emits: ['update:html', 'update:type'],
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
    updated() {
        if(this.autoCloseDuration) {
            setTimeout(() => {
                this.$emit('update:html', '');
                this.$emit('update:type', '');
            }, this.autoCloseDuration);
        }
    },
    methods: {
        update() {
            if(this.closeable) {
                this.$emit('update:html', '');
                this.$emit('update:type', '');
            }
        }
    }
}
</script>
