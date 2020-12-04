import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dynamic from "@/views/Dynamic.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    /**
     * index is the dynamic route param
     * The Dynamic view component manages which page to render based on the index route param
     */
    path: "/dynamic/:index",
    component: Dynamic
  }
];

const router = new VueRouter({
  routes
});

export default router;
