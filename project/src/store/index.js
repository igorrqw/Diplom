import { createStore } from "vuex";

import {
  KinopoiskDev,
  Filter,
  MovieFields,
} from "@openmoviedb/kinopoiskdev_client";
import { KP_API_KEY } from "@/constants/index.js";

export default createStore({
  state: {
    films: [],
    cartoons: [],
    serials: [],
    isLoading: false
  },

  getters: {
    FILMS(state) {
      return state.films;
    },
    CARTOONS(state) {
      return state.cartoons;
    },
    SERIALS(state) {
      return state.serials;
    },
    LOADING(state) {
      return state.isLoading
    }
  },

  mutations: {
    SET_FILMS(state, films) {
      state.films = films;
    },
    SET_CARTOONS(state, cartoons) {
      state.cartoons = cartoons;
    },
    SET_SERIALS(state, serials) {
      state.serials = serials;
    },
    SET_LOADING(state) {
      state.isLoading=!state.isLoading
    }
  },

  actions: {
    async GET_FILMS(ctx, films) {
      ctx.commit("SET_LOADING");

      const kp = new KinopoiskDev(KP_API_KEY);
      const query = {
        selectFields: ["id", "name", "rating", "poster", "year", "genres.name"],
        year: "2020-2023",
        "rating.kp": "7.5-8.5",
        "poster.url": "!null",
        "genres.name": "боевик",
        page: 1,
        limit: 100,
      };

      const { data } = await kp.movie.getByFilters(query);
      ctx.commit("SET_FILMS", data?.docs);
      console.log("GET_FILMS", data);
      ctx.commit("SET_LOADING");
    },

    async GET_CARTOONS(contx, cartoons) {
      contx.commit("SET_LOADING");

      const kp = new KinopoiskDev(KP_API_KEY);
      const query = {
        selectFields: ["id", "name", "rating", "poster", "year", "genres.name"],
        year: "2007-2020",
        "rating.kp": "7.5-8.5",
        "poster.url": "!null",
        "genres.name": "мультфильм",
        sortField: "rating.kp",
        sortType: "-1",
        page: 1,
        limit: 100,
      };

      const { data } = await kp.movie.getByFilters(query);
      contx.commit("SET_CARTOONS", data?.docs);
      console.log(data);
      contx.commit("SET_LOADING");
    },

    async GET_SERIALS(contx, serials) {
      contx.commit("SET_LOADING");

      const kp = new KinopoiskDev(KP_API_KEY);
      const query = {
        selectFields: [
          "id",
          "name",
          "rating",
          "poster",
          "year",
          "genres.name",
          "type",
        ],
        year: "2020-2023",
        "rating.kp": "6.5-10",
        "poster.url": "!null",
        type: "tv-series",
        sortField: "rating.kp",
        sortType: "-1",
        page: 1,
        limit: 100,
      };

      const { data } = await kp.movie.getByFilters(query);
      contx.commit("SET_SERIALS", data?.docs);
      console.log(data);

      contx.commit("SET_LOADING");
    },
  },
});
