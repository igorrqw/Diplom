<template>
  <div>
    <h1>Мультики</h1>
  </div>
  <div class="collection__list center">
    <ul>
      <router-link class="films" v-for="item in CartoonsList" :to="`/cartoons/${item.id}`" :key="cartoons">
          <div> <img v-bind:src="item.poster.url" alt=""> </div>
          <div> {{ item.name }}</div>
      </router-link>
    </ul>
  </div>
  
</template>
<script>


export default {
  name: 'Cartoons',
  computed: {
    CartoonsList() {
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