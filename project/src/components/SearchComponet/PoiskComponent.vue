<template lang="">
<div>
    <div v-if="typeSearch==='name'" class="content-block">
        <h2 class="display-6">Поиск по названию</h2>

        <div class="content-block name-search-block">
            <div>
                <label class="form-label">Название фильма</label>
                <input class="form-control" type="text" placeholder="Введите название фильма" v-model='nameFilm' />
            </div>

            <button class="btn" type="button" v-on:click="searchByName()">
                Найти
            </button>

            <button class="btn" type="button" v-on:click="chedgeFormSearch()">
                Расширенный поиск
            </button>
        </div>
    </div>
<!-- 11111111111111111111111111111111 -->
    <div v-if="typeSearch==='advanced'" class="content-block advanced-search-block">
        <h2 class="display-6">Расширенный поиск</h2>
        <div class="content-block">
            <label class="form-label">Выберите жанр</label>
            <select class="form-select" v-model="genreFilm">
                <option disabled value="">жанры</option>
                <option v-for="genre in genresList">
                    {{ genre.name }}
                </option>
            </select>
        </div>

        <div class="content-block slider-block">
            <label class="form-label">Выберите рейтинг</label>
            <vue-slider min="1" max="10" v-model="ratingFilm" tooltip="always" :enable-cross="false" />
        </div>

        <div class="content-block slider-block">
            <label class="form-label">Выберите год</label>
            <vue-slider min="1895" max="2024" v-model="yearFilm" tooltip="always" :enable-cross="false" />
        </div>

        <div class="btn-block content-block">
            <button class="btn" type="button" v-on:click="chedgeFormSearch()">
                Поиск по названию
            </button>

            <button class="btn" type="button" v-on:click="advancedSearch()">
                Найти
            </button>
        </div>
    </div>
    
    <div v-if="isLoading" class="d-flex justify-content-center loader">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Загрузка...</span>
        </div>
    </div>

    <FilmsList v-if="filmsList" :filmsList="filmsList"/>
</div>
</template>
<div></div>

<script>
import {
    KinopoiskDev,
    MovieQueryBuilder,
    SPECIAL_VALUE,
    SORT_TYPE,
} from '@openmoviedb/kinopoiskdev_client';
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import {KP_API_KEY} from '@/constants/index.js'
import {filmsGenres} from "./helpers/filmsGenres";
import FilmsList from "../FilmsList.vue";

export default {
    components: {
        VueSlider, FilmsList
    },
    data() {
        return {
            nameFilm: '',
            genreFilm: '',
            yearFilm: [1895, 2024],
            ratingFilm: [5, 8],
            genresList: filmsGenres,
            filmsList: null,
            typeSearch: 'name',
            isLoading: false
        };
    },
    methods: {
        chedgeFormSearch() {
            if (this.typeSearch === 'name') {
                this.typeSearch = 'advanced'
            } else {
                this.typeSearch = 'name'
            }
        },
        getName() {
            return this.nameFilm.toString()
        },
        getRating() {
            return this.ratingFilm.join('-')
        },
        getYear() {
            return this.yearFilm.join('-')
        },
        searchByName() {
            this.isLoading=true

            const kp = new KinopoiskDev(KP_API_KEY);
            const searchMovies = async () => {
                const queryBuilder = new MovieQueryBuilder();
                const query = queryBuilder
                    .query(this.getName())
                    .paginate(1, 100)
                    .build();

                const {
                    data,
                    error,
                    message
                } = await kp.movie.getBySearchQuery(query);

                if (data) {
                    const {
                        docs,
                        page,
                        limit
                    } = data;
                    console.log(`Страница ${page} из ${limit}`);
                    console.log('Поиск по названию', docs);
                    this.filmsList = docs;
                }

                if (error) console.log(error, message);
                this.isLoading=false
            };

            searchMovies()

        },
        async advancedSearch() {
            this.isLoading=true

            const kp = new KinopoiskDev(KP_API_KEY);

            const query = {

                selectFields: ['id', 'name', 'rating', 'poster', 'year', 'genres'],
                ...(this.yearFilm && {
                    year: this.getYear()
                }),
                ...(this.ratingFilm && {
                    'rating.kp': this.getRating()
                }),
                'poster.url': '!null',
                ...(this.genreFilm && {
                    'genres.name': this.genreFilm
                }),
                sortField: ['rating.kp', 'year', 'genres.name'],
                sortType: ['-1', '-1', '-1'],
                page: 1,
                limit: 100,
            };

            const {
                data,
                error,
                message
            } = await kp.movie.getByFilters(query);

            if (data) {
                const {
                    docs,
                    page,
                    limit
                } = data;
                this.filmsList = docs;
                console.log("Расширенный поиск: ", this.filmsList)
            }

            if (error) console.log(error, message);
            this.isLoading=false
        }
    },
};
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';

.container {

}

.name-search-block {
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: $mobile-width) {
        align-items: flex-end;
        flex-direction: row;
    }
}

.advanced-search-block {}

.content-block {
  margin-top: 50px;
}

.btn-block {
  display: flex;
  gap: 30px;
}

.slider-block {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.btn {
  color: $color-white;
  background-color: $color-red;

  &:focus {
      background-color: $color-red;
      color: $color-white;
  }
}

.movie {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}
.movies {
    width: 200px;
}

.form-select {
    &:focus {
        border-color: $color-gray-2;
        box-shadow: 0 0 0 0.25rem $color-gray-2;
    }
}
.loader {
    margin-top: 50px;
}
</style>
