import Vue from "vue";
import VueRouter from "vue-router";
import MoviesList from "@/components/MoviesList";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Movies List",
      component: MoviesList,
    },
  ],
});
