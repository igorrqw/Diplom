<template lang="">
    <div class="movie-container" v-if='dataFilm'>
        <div class="back-button">
            <button class="btn" type="button" @click="goBack">Назад</button>
        </div>

        <h2 class="display-6">"{{dataFilm.name}}"</h2>

        <div class="poster-img"><img v-bind:src="dataFilm.poster.url" alt=""> </div>
        <div class="description-block">
            <div class="description-title">Описание:</div>
            <div class="description-text">{{dataFilm.description}}</div>
        </div>

        <!-- <div class="movie_title"> {{ dataFilm.alternativeName }}</div> -->
        <div class="person-block">
            <div class="description-title"> 
                        Актеры
            </div>
            <div class="person-container">
                <div v-for="person in dataFilm.persons">
                    <div v-if="person.enProfession==='actor'">

                        <div class="person-img"><img v-bind:src="person.photo" alt=""> </div>
                        <div>{{person.name}} </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { KinopoiskDev } from '@openmoviedb/kinopoiskdev_client';
import { KP_API_KEY } from '@/constants/index.js'

export default {
    data() {
        return {
            id: this.$route.params['id'],
            dataFilm: null,
        };
    },
    methods: {
        async getMovieById() {
            const kp = new KinopoiskDev(KP_API_KEY);
            const { data, error, message } = await kp.movie.getById(this.id);

            if (data) {
                this.dataFilm = data
                console.log(data)
            }

            if (error) console.log(error, message);
        },
        goBack() {
            this.$router.go(-1);
    }
    },
    mounted() {
        this.getMovieById()
    }
}
</script>
<style lang="scss" scoped>
@import '../../styles/variables.scss';

.movie-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}

.poster-img {
    max-width: 435px;
}

.description-block {
    max-width: 500px;
    margin-top: 50px;
}

.description-title {
    text-align: center;
}

.description-text {
    margin-top: 20px;
}

.person-img {
    max-width: 120px;
}

.person-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    gap: 20px;
}

.person-block {
    margin-top: 40px;
}
.back-button {
    width: 100%;
    /* color: red; */
}
.btn {
    margin-bottom: 30px;
  color: $color-white;
  background-color: $color-red;

  &:hover {
    background-color: $color-red;
      color: $color-white;
  }
}
.btn:first-child:active {
    color: $color-white;
    background-color: $color-red;
}
</style>