<template lang="">
    <div v-if="idList">
        <H1>{{id}}</H1>
        <h1>{{idList.name}}</h1>
        <div><img class="post" :src="idList.poster.previewUrl" alt=""> </div>
    </div>
</template>
<script>

import { KinopoiskDev } from '@openmoviedb/kinopoiskdev_client';
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
                this.idList = data
            }

            


            if (error) console.log(error, message);
        };
        getMovieById()
    }
}
</script>
<style lang="scss">
.post {
    width: 300px;
    height: 500px;
}
</style>