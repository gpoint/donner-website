<template>
    <div>
        <select class="form-control form-control-lg mx-2" @change="addTag" v-model="selectedSDG">
            <option value="0" disabled selected>
                Select goals that apply to your fundraising campaign
            </option>
            <option v-for="(goal, index) in filteredSDGs" :key="index" :value="goal.index">
                {{ goal.text }}
            </option>
        </select>
        <div class="tags-container mt-2 mx-2">
            <span v-for="(tag, index) in tags" :key="index" class="badge me-1 mb-1"
                :style="{ backgroundColor: '#' + sdgColors[tag] }">
                {{ sdgs[tag - 1] }}
                <button type="button" class="close bg-transparent border-radius-lg border border-light text-white"
                    @click="removeTag(index)" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </span>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Array
        }
    },
    emits: ['update:value'],
    data() {
        return {
            tags: [],
            selectedSDG: 0,
            sdgs: [
                'No Poverty',
                'Zero Hunger',
                'Good Health and Well-being',
                'Quality Education',
                'Gender Equality',
                'Clean Water and Sanitation',
                'Affordable and Clean Energy',
                'Decent Work and Economic Growth',
                'Industry, Innovation, and Infrastructure',
                'Reduced Inequality',
                'Sustainable Cities and Communities',
                'Responsible Consumption and Production',
                'Climate Action',
                'Life Below Water',
                'Life on Land',
                'Peace, Justice, and Strong Institutions',
                'Partnerships for the Goals'
            ],
            sdgColors: {
                1: 'e5233d', // No Poverty
                2: 'dda73a', // Zero Hunger
                3: '4ca146', // Good Health and Well-being
                4: 'c5192d', // Quality Education
                5: 'ef402c', // Gender Equality
                6: '27bfe6', // Clean Water and Sanitation
                7: 'fbc412', // Affordable and Clean Energy
                8: 'a31c44', // Decent Work and Economic Growth
                9: 'f26a2d', // Industry, Innovation, and Infrastructure
                10: 'e01483', // Reduced Inequality
                11: 'f89d2a', // Sustainable Cities and Communities
                12: 'bf8d2c', // Responsible Consumption and Production
                13: '407f46', // Climate Action
                14: '1f97d4', // Life Below Water
                15: '59ba48', // Life on Land
                16: '126a9f', // Peace, Justice, and Strong Institutions
                17: '13496b' // Partnerships for the Goals
            }
        };
    },
    updated() {
        this.tags = this.value;
    },
    computed: {
        filteredSDGs() {

            this.$emit("update:value", this.tags);

            return this.sdgs
                .map((text, index) => ({
                    text,
                    index: index + 1
                }))
                .filter(goal => !this.tags.some(tag => tag === goal.index));

        }
    },
    methods: {
        addTag() {
            if (this.selectedSDG && !this.tags.some(tag => tag === this.selectedSDG)) {
                this.tags.push(this.selectedSDG);
            }
            this.selectedSDG = 0;
        },
        removeTag(index) {
            this.tags.splice(index, 1);
        }
    }
};
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>

