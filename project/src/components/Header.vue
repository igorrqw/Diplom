<template lang="">
    <div class="nav-wrapper">
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img class="logo-img" :src="require('../assets/logo.png')" alt="logo"/>
            <div class="logo__text">MovieBase</div>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link" to="/homepage">Главная</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/films">Фильмы</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/series">Сириалы</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/cartoons">Мультики</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/search">Поиск</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contacts">Контакты</router-link>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
export default {

}
</script>

<style lang="scss">
@import '../styles/variables.scss';
.logo-img{
    width: 60px;
    height: 60px;
}
.container-fluid{
    padding: 0;
}
.navbar-brand{
    display: flex;
    align-items: center;
    gap: 10px;
}

.navbar-nav{
    width: 100%;
    justify-content: space-between;
}

.router-link-active {
    color: $color-white !important; /* Цвет активной ссылки */
}

.nav-link {
    color: $color-main;
}
.nav-wrapper{
    background-color: #212529;
    padding: 0 20px;

    @media (min-width: $mobile-width) {
        padding: 0 30px;
    }

    @media (min-width: $tablet-width) {
        padding: 0 50px;
    }

    @media (min-width: $desktop-width) {
        padding: 0 80px;
    }

    @media (min-width: $large-desktop-width) {
        padding: 0 100px;
    }
}
.navbar{
    max-width: 1200px;
    margin: 0 auto;
    /* padding: 0 20px;

    @media (min-width: $mobile-width) {
        padding: 0 30px;
    }

    @media (min-width: $tablet-width) {
        padding: 0 50px;
    }

    @media (min-width: $desktop-width) {
        padding: 0 80px;
    }

    @media (min-width: $large-desktop-width) {
        padding: 0 100px;
    } */
}
</style>
