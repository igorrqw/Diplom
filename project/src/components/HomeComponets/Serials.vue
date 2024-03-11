<template>
    <div>
        <h1>Сериалы</h1>
    </div>
    
    <ul>
        <div class="collection__list center">
            <router-link class="films" v-for="item in SerialsList" :to="`/series/${item.id}`" :key="series">
                <div> <img v-bind:src="item.poster.url" alt=""> </div>
                <div> {{ item.name }}</div>
            </router-link>
        </div>
    </ul>

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
.collection__list {}

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