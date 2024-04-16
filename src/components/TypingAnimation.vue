<template>
        <span ref="typedText"></span>
</template>

<script>
import Typed from 'typed.js';

export default {
    name: 'TypedText',
    props: {
        strings: {
            type: Array,
            required: true,
        },
        typeSpeed: {
            type: Number,
            default: 50,
        },
        backSpeed: {
            type: Number,
            default: 100,
        },
        startDelay: {
            type: Number,
            default: 0,
        },
        backDelay: {
            type: Number,
            default: 500,
        },
        loop: {
            type: Boolean,
            default: true,
        },
    },
    mounted() {
        this.initializeTyped();
    },
    beforeDestroy() {
        this.destroyTyped();
    },
    methods: {
        initializeTyped() {
            this.typed = new Typed(this.$refs.typedText, {
                strings: this.strings,
                typeSpeed: this.typeSpeed,
                backSpeed: this.backSpeed,
                startDelay: this.startDelay,
                backDelay: this.backDelay,
                loop: this.loop,
                cursorChar: '',
                
            });
        },
        destroyTyped() {
            this.typed.destroy();
        },
        restartTyped() {
            this.destroyTyped();
            this.initializeTyped();
        },
    },
    watch: {
        strings: 'restartTyped',
    },
};
</script>
