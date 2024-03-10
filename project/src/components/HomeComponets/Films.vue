<template>
  <div>
    <h1>Фильмы</h1>
  </div>
  <div class="collection__list center">
    <ul>
      <router-link class="films" v-for="item in FilmsList" :to="`/film/${item.id}`" :key="film">
        <div> <img v-bind:src="item.poster.url" alt=""> </div>
        <div> {{ item.name }}</div>
        <div> Рейтинг {{ Math.round(item.rating.kp) }}</div>
      </router-link>
    </ul>
  </div>

</template>
<script>


export default {
  name: 'HelloWorld',
  computed: {
    FilmsList() {
      return this.$store.getters.FILMS
    }
  },

  async mounted() {
    this.$store.dispatch('GET_FILMS');
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
