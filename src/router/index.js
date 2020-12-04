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
    path: "/dynamic/:index",
    name: "dynamic",
    component: Dynamic
  }
];

const router = new VueRouter({
  routes
});

export default router;
