import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import FilmsPage from "@/pages/FilmsPage.vue";
import SeriesPage from "@/pages/SeriesPage.vue";
import CartoonsPage from "@/pages/CartoonsPage.vue";
import SearchPage from "@/pages/SearchPage.vue";
import СontactsPage from "@/pages/СontactsPage.vue";
import Error404 from "@/pages/Error404.vue";

export default createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/homepage",
      component: HomePage,
      alias: "/",
    },

    {
      path: "/films",
      component: FilmsPage,
      alias: "/",
    },

    {
      path: "/series",
      component: SeriesPage,
      alias: "/",
    },

    {
      path: "/cartoons",
      component: CartoonsPage,
      alias: "/",
    },

    {
      path: "/search",
      component: SearchPage,
      alias: "/",
    },

    {
      path: "/contacts",
      component: СontactsPage,
      alias: "/",
    },

    {
      path: '/:CatchAll(.*)',
      name: 'error',
      component: Error404
   },

  ],
});
