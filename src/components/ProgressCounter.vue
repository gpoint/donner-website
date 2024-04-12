<template>
    <div class="progress-counter">
        <span>{{ currentCount }}</span>
    </div>
</template>

<script>
export default {
    props: {
        totalCount: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            currentCount: 0
        };
    },
    mounted() {
        this.incrementCount();
    },
    methods: {
        incrementCount() {
            const interval = setInterval(() => {
                if (this.currentCount < this.totalCount) {
                    this.currentCount++;
                } else {
                    clearInterval(interval);
                }
            }, 100); // Adjust the interval as needed for desired speed
        }
    }
};
</script>

<style scoped>
.progress-counter {
    font-size: 24px;
    text-align: center;
}
</style>
