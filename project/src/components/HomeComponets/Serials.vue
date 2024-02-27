<template>
    <div>
        <h1>Сериалы</h1>
    </div>
    <div class="collection__list center">
        <div class="films" v-for="item in SerialsList">
            <div> <img v-bind:src="item.poster.url" alt=""> </div>
            <div> {{ item.name }}</div>
        </div>
    </div>
</template>
<script>


export default {
    name: 'Serials',
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