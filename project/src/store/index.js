import { createStore } from "vuex";
import {
  KinopoiskDev,
  Filter,
  MovieFields,
} from "@openmoviedb/kinopoiskdev_client";

export default createStore({
  state: {
    films: [],
    cartoons: [],
    serials: [],
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
  },

  actions: {
    async GET_FILMS(ctx, films) {
      const kp = new KinopoiskDev("SHF3ZR0-Q2AM28B-JNXX250-NS3ZYX2");
      const query = {
        selectFields: ["id", "name", "rating", "poster", "year", "genres.name"],
        year: "2020-2023",
        "rating.kp": "7.5-8.5",
        "poster.url": "!null",
        "genres.name": "боевик",
        sortField: "rating.kp",
        sortType: "-1",
        page: 1,
        limit: 10,
      };

      const { data } = await kp.movie.getByFilters(query);
      ctx.commit("SET_FILMS", data?.docs);
      console.log(data);
    },

    async GET_CARTOONS(contx, cartoons) {
      const kp = new KinopoiskDev("SHF3ZR0-Q2AM28B-JNXX250-NS3ZYX2");
      const query = {
        selectFields: ["id", "name", "rating", "poster", "year", "genres.name"],
        year: "2007-2020",
        "rating.kp": "7.5-8.5",
        "poster.url": "!null",
        "genres.name": "мультфильм",
        sortField: "rating.kp",
        sortType: "-1",
        page: 1,
        limit: 10,
      };

      const { data } = await kp.movie.getByFilters(query);
      contx.commit("SET_CARTOONS", data?.docs);
      console.log(data);
    },

    async GET_SERIALS(contx, serials) {
      const kp = new KinopoiskDev("SHF3ZR0-Q2AM28B-JNXX250-NS3ZYX2");
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
        limit: 10,
      };

      const { data } = await kp.movie.getByFilters(query);
      contx.commit("SET_SERIALS", data?.docs);
      console.log(data);
    },
  },
});
