<template>
<div>
    <select class="form-control" @change="addTag" v-model="selectedSDG">
        <option value="0" disabled selected> {{ tags.length == 0 ? 'Select cause to fund' : filteredSDGs.length == 0 ? 'Your donation will be split across causes' : 'Split donation across causes' }} </option>
        <option v-for="(goal, index) in filteredSDGs" :key="index" :value="goal.index">
            {{ goal.text }}
        </option>
    </select>
    <div class="tags-container mt-2" style="min-height: 50px">
        <span v-for="(tag, index) in tags" :key="index" class="badge me-1 mb-1" :style="{ backgroundColor: '#'+sdgColors[tag.index]}">
            {{ sdgs[tag.index - 1] }}
            <button type="button" class="close bg-transparent border-radius-lg border border-light text-white" @click="removeTag(index)" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </span>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tags: [{index: 1}],
            selectedSDG: '',
            sdgs: [
                'Where it is needed the most',
                'Skills Training',
                'Skills Advocacy',
                'Job Placement',
            ],
            sdgColors: {
                1: '77132b', // No Poverty
                2: '3a416f', // Zero Hunger
                3: '004582', // Good Health and Well-being
                4: '627594', // Partnerships for the Goals
            },
        };
    },
    emits: ['update:causes'],
    computed: {
        filteredSDGs() {
            return this.sdgs
                .map((text, index) => ({
                    text,
                    index: index + 1
                }))
                .filter(goal => !this.tags.some(tag => tag.index === goal.index));
        },
    },
    methods: {
        addTag() {
            if (this.selectedSDG && !this.tags.some(tag => tag.index === this.selectedSDG)) {
                this.tags.push({
                    index: this.selectedSDG
                });
            }
            this.selectedSDG = 0;
        },
        removeTag(index) {
            this.tags.splice(index, 1);
        },
    },
};
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>
