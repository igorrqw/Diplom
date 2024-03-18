<template>
    <h2 class="display-6">Мультики</h2>

    <div v-if="this.$store.getters.LOADING" class="d-flex justify-content-center loader">
          <div class="spinner-border" role="status">
              <span class="visually-hidden">Загрузка...</span>
          </div>
    </div>
    <FilmsList v-if="CartoonsList && this.$store.getters.LOADING === false" :filmsList="CartoonsList"/>
</template>
  <script>
  import FilmsList from "../FilmsList.vue";
  
  export default {
    name: 'Cartoons',
    components: { FilmsList },
    computed: {
      CartoonsList(){
        return this.$store.getters.CARTOONS
      },
  
    },
  
    async mounted() {
      this.$store.dispatch('GET_CARTOONS')
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
  