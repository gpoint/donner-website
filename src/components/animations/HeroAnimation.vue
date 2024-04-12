<template>
    <div class="floating-boxes position-absolute">
        <div v-for="box in boxes" :key="box.id" class="floating-box" :style="boxStyle(box)">
            <img v-if="box.hasImage" :src="box.image" alt="Charity Activity" class="img-fluid rounded">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            boxes: [
                { id: 1, hasImage: false },
                { id: 2, hasImage: true, image: 'path_to_image1.jpg' },
                { id: 3, hasImage: false },
                { id: 4, hasImage: true, image: 'path_to_image2.jpg' },
                { id: 5, hasImage: false },
                { id: 6, hasImage: true, image: 'path_to_image3.jpg' },
                { id: 7, hasImage: false },
                { id: 8, hasImage: true, image: 'path_to_image4.jpg' },
                { id: 9, hasImage: false },
                { id: 10, hasImage: true, image: 'path_to_image5.jpg' },
            ],
        };
    },
    created() {
        setInterval(() => {
            this.boxes.forEach(box => {
                if (box.hasImage) {
                    // Update image source here
                    // Example: box.image = 'new_image_path.jpg';
                }
            });
        }, 10000); // Change every 10 seconds
    },
    methods: {
        boxStyle(box) {
            const size = Math.random() * (400 - 100) + 100; // Random size between 100px and 200px
            return {
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '20px',
                backgroundImage: box.hasImage ? '' : 'linear-gradient(310deg, #367d21, #5cac31)',
                animationName: 'float-animation',
                animationDuration: `${Math.random() * (30 - 15) + 15}s`, // Random duration between 15s and 30s
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                position: 'absolute',
                top: `${Math.random() * 90}vh`, // Random vertical start
                left: `${Math.random() * 90}vw`, // Random horizontal start
            };
        },
    },
};
</script>

<style>
@keyframes float-animation {

    0%,
    100% {
        transform: translate(0, 0);
    }

    25% {
        transform: translate(-10px, 20px);
    }

    50% {
        transform: translate(20px, -15px);
    }

    75% {
        transform: translate(-15px, -30px);
    }
}

.floating-boxes {
    position: relative;
    height: 100vh;
    /* Full viewport height */
    overflow: hidden;
}

.floating-box {
    /* Additional styling for floating boxes */
}
</style>
