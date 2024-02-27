<template lang="">
    <header class="header center">
      <!-- <img src="../assets/backhead.png" class="background" /> -->
      <div class="header__logo">
        <img :src="require('../assets/logo.png')" alt="logo"/>
        <p class="logo__text">StreamVibe</p>
      </div>
      <div class="header_nav">
                <router-link to="/homepage">Главная</router-link>
                <router-link to="/films">Фильмы</router-link>
                <router-link to="/series">Сириалы</router-link>
                <router-link to="/cartoons">Мультики</router-link>
                <router-link to="/search">Поиск</router-link>
                <router-link to="/contacts">Контакты</router-link>
      </div>
    </header>
</template>
<script>
export default {

}
</script>
<style lang="">
    

</style>