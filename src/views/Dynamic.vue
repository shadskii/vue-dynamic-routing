<template>
  <div>
    <button @click="decrement()">Prev</button>
    <button @click="increment()">Next</button>
    <!-- Dynamic component used to render appropriate sub page -->
    <component :is="page" />
  </div>
</template>

<script>
// All routable pages in an array
import pages from "@/components/pages";

export default {
  name: "PageContainer",
  computed: {
    /**
     * Listens for the index in the route params
     */
    index() {
      return this.$route.params.index;
    },

    /**
     * The appropriate component to render based off the route index
     */
    page() {
      return pages[this.index];
    }
  },
  methods: {
    /**
     * Increment index
     */
    increment() {
      this.changePage(this.index + 1);
    },
    /**
     * Decrement index
     */
    decrement() {
      this.changePage(this.index - 1);
    },

    /**
     * Changes the index param of the route.
     * No-op if index out of bounds of page array.
     */
    changePage(num) {
      if (num < 0 || num >= pages.length) {
        // Page out of bounds
        // No op
        return;
      }
      const index = Number(num);
      this.$router.push({
        params: {
          index
        }
      });
    }
  }
};
</script>

<style></style>
