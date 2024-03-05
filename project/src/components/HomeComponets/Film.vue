<template lang="">
    <div>
        <H1>{{id}}</H1>
        <h1>{{idList}}</h1>
        <!-- <div v-if='idList' v-for="item in idList">
            <div>{{item}}</div></div> -->

        <!-- <div><img class="movie_cover" v-bind:src="item.poster" alt=""> </div> -->
        <!-- <div class="movie_title"> {{ item.alternativeName }}</div> -->
    </div>
</template>
<script>

import {
    KinopoiskDev,
    MovieQueryBuilder,
    SPECIAL_VALUE,
    SORT_TYPE,
} from '@openmoviedb/kinopoiskdev_client';
import { KP_API_KEY } from '@/constants/index.js'

export default {
    data() {
        return {
            id: this.$route.params['id'],
            idList: null,

        };
    },

    async mounted() {
        const kp = new KinopoiskDev(KP_API_KEY);
        const getMovieById = async () => {
            const { data, error, message } = await kp.movie.getById(this.id);

            if (data) {
                console.log("dsadsadsa", data);
                console.log(data);
                console.log(data);
            }

            const idList = data
            this.data = idList
            this.idList = idList


            if (error) console.log(error, message);
        };
        getMovieById()
    }
}
</script>
<style lang="">
    
</style>