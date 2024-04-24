<template>
    <component :is="tag" :type="tag === 'button' ? loading ? 'button' : nativeType : ''" class="position-relative btn"
               :disabled="(disabled) || undefined" :class="classes" @click="handleClick" style="height: 50px">
        <div class="position-absolute top-0 start-0 w-100 h-100 d-block "
                         style="background-size:contain; background-image: url('/img/shapes/waves-white.svg');background-position: bottom left;"></div>
        <span class="position-absolute w-100 m-0 p-0 d-inline-block" style="left:0;top:7.5px;">
            <div v-show="loading" class="lds-ripple">
                <div class="bg-white"></div>
                <div class="bg-white"></div>
            </div>
        </span>
        <span class="m-0 p-0 d-inline-block text-center position-relative" style="font-size: 19px; top: 0px" :style="{visibility: loading ? 'hidden' : 'visible' }">
            <slot>
                {{ text }}
            </slot>
        </span>
    </component>
</template>
<script>
    export default {
        name: "base-button",
        props: {
            tag: {
                type: String,
                default: "button",
                description: "Button tag (default -> button)",
            },
            type: {
                type: String,
                default: "primary",
                description: "Button type (e,g primary, danger etc)",
            },
            textColor: {
                type: String,
                default: "",
                description: "Button text color (e.g primary, danger etc)",
            },
            nativeType: {
                type: String,
                default: "button",
                description: "Button native type (e.g submit,button etc)",
            },
            icon: {
                type: String,
                default: "",
                description: "Button icon",
            },
            text: {
                type: String,
                default: "",
                description: "Button text in case not provided via default slot",
            },
            loading: {
                type: Boolean,
                default: false,
                description: "Whether is action button that disables when loading",
            },
            outline: {
                type: Boolean,
                default: false,
                description: "Whether button style is outline",
            },
            rounded: {
                type: Boolean,
                default: false,
                description: "Whether button style is rounded",
            },
            iconOnly: {
                type: Boolean,
                default: false,
                description: "Whether button contains only an icon",
            },
            block: {
                type: Boolean,
                default: false,
                description: "Whether button is of block type",
            },
            disabled: {
                type: Boolean,
                default: undefined,
                description: "Whether button is of block type",
            }
        },
        computed: {
            classes() {
                let btnClasses = [
                    {"w-100": this.block},
                    {"rounded-circle": this.rounded},
                    {"btn-icon-only": this.iconOnly},
                    {[`text-${this.textColor}`]: this.textColor},
                    {"btn-icon": this.icon || this.$slots.icon},
                    {"loading": this.loading},
                    this.type && !this.outline ? `btn-${this.type}` : "",
                    this.outline ? `btn-outline-${this.type}` : ""
                ];
//                if (this.size) {
//                    btnClasses.push(`btn-${this.size}`);
//                }
                return btnClasses;
            }
        },
        methods: {
            handleClick(evt) {
                if (!this.loading) {
                    this.$emit("click", evt);
                }else {
                    evt.preventDefault();
                }
            }
        }
    };
</script>
<style>
    .loading {
        cursor: wait !important;
    }
    .lds-ripple,
    .lds-ripple div {
        box-sizing: border-box;
        text-align: center !important;
    }
    .lds-ripple {
        display: inline-block;
        position: relative;
        width: 30px;
        height: 30px;
        justify-content: center;
    }
    .lds-ripple div {
        position: absolute;
        border: 4px solid currentColor;
        opacity: 0;
        border-radius: 50%;
        animation: lds-ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .lds-ripple div:nth-child(2) {
        animation-delay: 0.75s;
    }
    @keyframes lds-ripple {
        0% {
            top: 12px;
            left: 12px;
            width: 10px;
            height: 10px;
            opacity: 0;
        }
        4.9% {
            top: 12px;
            left: 12px;
            width: 10px;
            height: 10px;
            opacity: 0;
        }
        5% {
            top: 12px;
            left: 12px;
            width: 10px;
            height: 10px;
            opacity: 1;
        }
        100% {
            top: 0;
            left: 0px;
            width: 34px;
            height: 34px;
            opacity: 0;
        }
    }
</style>

