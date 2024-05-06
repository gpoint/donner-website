<template>
    <div>
        <!-- Chips for option groups -->
        <div class="chips-container">
            <button 
                v-for="(option, index) in options" 
                :key="index"
                class="chip btn btn-round btn-lg m-2"
                :class="{ 'border-primary bg-success': selectedOption === index }"
                @click="emitSelected(index)"
                >
                {{ option }}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Array,
                required: true
            },
            selected: {
                type: String,
                required: false
            }
        },
        data() {
            return {
                selectedOption: null
            };
        },
        updated() {
            this.selectedOption = this.options.indexOf(this.selected);
        },
        computed: {
        },
        methods: {
            emitSelected(option) {
                this.$emit('update:selected', this.options[option]);
                this.selectedOption = option;
            }
        }
    }
</script>

<style scoped>
    .chips-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    .chip {
        padding: 10px 20px;
        cursor: pointer;
        color: #224;
        border: 2px solid #fff;
        user-select: none;
        text-transform: capitalize !important;
        transition: background 0.5s, border 0.5s, color 0.3s;
        background: transparent !important;
    }

    .chip.border-primary, .chip:hover {
        color: #367d21 ;
    }
    
    .chip.border-primary {
        background: linear-gradient(310deg, #367d21, #5cac31) !important;
        border: #5cac31;
        color: #fff;
    }

    .options-container {
        transition: opacity 1s;
    }
/*
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.5s;
    }
    .fade-enter, .fade-leave-to  .fade-leave-active in <2.1.8  {
        opacity: 0;
    }*/
</style>

