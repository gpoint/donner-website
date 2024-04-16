<template>
    <div class="floating-boxes">
        <div v-for="box in boxes" :key="box.id" class="floating-box" :style="boxStyle(box)">
            <img v-if="box.hasImage" :src="box.image" alt="Charity Activity" class="img-fluid rounded">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            changed: false,
            boxes: [
                { id: 1, hasImage: false, isWhite: true },
                { id: 3, hasImage: false, isWhite: true },
                { id: 5, hasImage: false },
                { id: 7, hasImage: false },
                { id: 9, hasImage: false },
                { id: 2, hasImage: true, image: 'https://media.gettyimages.com/id/1432210347/photo/portrait-of-an-army-doctor-playing-with-refugee-children.jpg?s=612x612&w=0&k=20&c=snjhKTr_D5q776BwP7flJo-VZUVE24MW8ToeqTxY0LM=' },
                { id: 4, hasImage: true, image: 'https://media.gettyimages.com/id/1246657191/photo/ethiopia-envirinment-drought.jpg?s=612x612&w=0&k=20&c=pIjNW_nLosOD3HUDOvQcD1uSy37V68yl4IfQbrBgSA8=' },
                { id: 6, hasImage: true, image: 'https://media.gettyimages.com/id/533768911/photo/volunteers-passing-cardboard-boxes-from-delivery-van.jpg?s=612x612&w=0&k=20&c=h09X-MkuAC9ewmlbnJIlPpiyZS-RuxBlOcJhcplQch0=' },
                { id: 8, hasImage: true, image: 'https://media.gettyimages.com/id/135538155/photo/volunteers-planting-a-tree-together.jpg?s=612x612&w=0&k=20&c=G6xGsxPax-8G1AxeNgdDnTIFNLI5VUfyNO0tjNTstLg=' },
                { id: 10, hasImage: true, image: 'https://media.gettyimages.com/id/1130655067/photo/volunteers-planting-a-tree.jpg?s=612x612&w=0&k=20&c=LN2OT16Fg46ghQ3xjGh8-95awNIpLkoHXJ8ADRIVLnU=' },
                { id: 12, hasImage: true, image: 'https://media.gettyimages.com/id/1401403313/photo/woman-volunteer-coordinator-speaks-to-the-group.jpg?s=612x612&w=0&k=20&c=oAPzUreytqJkPsVF6Ksg9jE9SxmxscMJaAN2R-CdvLg=' },
                { id: 14, hasImage: true, image: 'https://media.gettyimages.com/id/1372606308/photo/volunteers-arranging-donations-in-a-community-charity-donation-center.jpg?s=612x612&w=0&k=20&c=A3d1e79jYoJMDJPXJf-9wzFknpP3x8lmWfuffZ8cB1Y=' },
                { id: 16, hasImage: true, image: 'https://media.gettyimages.com/id/523275718/photo/female-doctor-treating-boy-in-ghana.jpg?s=612x612&w=0&k=20&c=9HUBflaKrlfjMfjhDYvaWnSMtXnDF4t0xnH9sO669AA=' },
                { id: 18, hasImage: true, image: 'https://media.gettyimages.com/id/1159657954/photo/doctor-examining-young-african-boy-in-small-village-kenya.jpg?s=612x612&w=0&k=20&c=ipQaU7lkL0VlKO1CT-DYf0542D69RFBWaPHYicD2oYo=' },
                { id: 20, hasImage: true, image: 'https://media.gettyimages.com/id/1326310153/photo/black-dad-and-daughter-are-having-fun.jpg?s=612x612&w=0&k=20&c=Bsi8FGQAimPESqhYn_nO795fx8Y96cjQm4gq5AJlvNo=' },
            ],
        };
    },
    created() {
        // setInterval(() => {
        //     this.boxes.forEach(box => {
        //         if (box.hasImage) {
        //             // Update image source here
        //             // Example: box.image = 'new_image_path';
        //         }
        //     });
        // }, 10000); // Change images every 10 seconds

        setInterval(() => {
            this.changed = !this.changed;
        }, 15000)
    },
    methods: {
        boxStyle(box) {
            if (this.changed === true) {
                this.changed = false;
            }

            const size = box.hasImage ? Math.random() * (50) + 75 : 100; // Random size between 100px and 200px
            return {
                width: `${size}px`,
                height: `${size}px`,
                borderRadius: '20px',
                backgroundImage: box.hasImage ? '' : box.isWhite ? 'linear-gradient(310deg, #686, #898)' : 'linear-gradient(310deg, #367d21, #367d21)',
                animationName: 'float-animation',
                animationDuration: `${Math.random() * (30 - 15) + 15}s`, // Random duration between 15s and 30s
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                position: 'absolute',
                top: `${Math.random() * 80}vh`, // Random vertical start
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
            opacity: 0;
        }
    
        10%,
        90% {
            opacity: 1;
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
    height: 100vh;
    /* Full viewport height */
    overflow: hidden;
}.floating-box {
    /* Additional styling for floating boxes */
    transition: top 2s ease-in-out, left 2s ease-in-out;
}
.floating-box img{
    /* Additional styling for floating boxes */
    opacity: .6;
}
</style>
