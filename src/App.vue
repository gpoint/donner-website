<template>
  <div>
    <vue-progress-bar></vue-progress-bar>

    <base-nav v-once></base-nav>

    <RouterView />

    <base-footer v-once></base-footer>
  </div>
</template>

<script>
import BaseNav from './components/navbars/BaseNav.vue';
import BaseFooter from './components/footers/BaseFooter.vue';

export default {

  components: {
    BaseNav,
    BaseFooter,
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish();
  },
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page

      next();
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
      document.body.scrollTo(0, -1);

    });
  },
};
</script>
