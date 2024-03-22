<template>
    <h2 class="display-6">Сериалы</h2>

    <div v-if="this.$store.getters.LOADING" class="d-flex justify-content-center loader">
          <div class="spinner-border" role="status">
              <span class="visually-hidden">Загрузка...</span>
          </div>
    </div>
    <FilmsList v-if="SerialsList && this.$store.getters.LOADING === false" :filmsList="SerialsList"/>
</template>
<script>
import FilmsList from "./FilmsList.vue";

export default {
    name: 'Serials',
        components: {
    FilmsList
    },
    computed: {
        SerialsList() {
            return this.$store.getters.SERIALS
        },

    },

    async mounted() {
        this.$store.dispatch('GET_SERIALS')
    }

}

</script>
  
<style scoped lang="scss">
.collection__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-column-gap: 16px;
    -webkit-column-gap: 16px;
    -moz-column-gap: 16px;
    column-gap: 16px;
    grid-row-gap: 64px;
    row-gap: 64px;
    margin: 50px;
}

img {
    width: 100px
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>