<template lang="">
    <div class="container center">
        <router-link tag="div" class="iner_banner" :to="'/search'">
            <img class="banner" :src="require('../assets/baner-search.jpg')" alt="logo" />
            <h1 class="baner-title"> Поиск </h1>
        </router-link>
        <router-link tag="div" class="iner_banner" :to="'/films'">
            <img class="banner" :src="require('../assets/baner-films.jpg')" alt="logo" />
            <h1 class="baner-title"> Фильмы </h1>
        </router-link>
        <router-link tag="div" class="iner_banner" :to="'/series'">
            <img class="banner" :src="require('../assets/baner-serials.jpg')" alt="logo" />
            <h1 class="baner-title"> Сериалы </h1>
        </router-link>
        <router-link tag="div" class="iner_banner" :to="'/cartoons'">
            <img class="banner" :src="require('../assets/baner-cartoons.jpg')" alt="logo" />
            <h1 class="baner-title"> Мультики </h1>
        </router-link>

    </div>
</template>

<script>

export default {
    name: 'homepage'
}
</script>

<style lang="scss">
@import '../styles/variables.scss';

.iner_banner {
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
    max-width: 800px;
    margin: 80px auto 0;
    max-height: 350px;
}

.banner {
    border-radius: 18px;
    opacity: 0.7;
    max-width: 100%;
    height: auto;

    @media (min-width: $mobile-width) {
        border-radius: 68px;
    }
}

.baner-title {
    position: absolute;
    bottom: 36%;
    color: white;
    font-size: 30px;
    text-align: center;
    padding: 5px;

    @media (min-width: $mobile-width) {
        font-size: 60px;
    }
}
</style>
