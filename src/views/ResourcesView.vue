<template>
    <div>
    </div>
</template>

<script>
import BaseNav from "../components/navbars/BaseNav.vue";
import BaseFooter from "../components/footers/BaseFooter.vue";
export default {
    components: {
        BaseNav,
        BaseFooter,
    },
    data() {
        return {
            data: "",
            searchString: "",
        };
    },
    methods: {
        search() {
            return;
        },
    },
    mounted() {
        $(this.$refs.pop).html("pop");
    },
};
</script>
