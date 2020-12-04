<template>
  <div>
    <button @click="decrement()">Prev</button>
    <button @click="increment()">Next</button>
    <component :is="page" />
  </div>
</template>

<script>
import pages from "@/components/pages";

export default {
  name: "PageContainer",
  computed: {
    index() {
      return this.$route.params.index;
    },
    page() {
      return pages[this.index];
    }
  },
  methods: {
    increment() {
      this.changePage(this.index + 1);
    },
    decrement() {
      this.changePage(this.index - 1);
    },
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
