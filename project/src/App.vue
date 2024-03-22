<template>
  <Header />
  <AppWrapper>
    <AppContainer>
      <router-view />
    </AppContainer>
  </AppWrapper>
  <Footer />
</template>

<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import AppWrapper from '@/components/AppWrapper.vue'
import AppContainer from '@/components/AppContainer.vue'
export default {
  components: {
    Header, AppWrapper, AppContainer, Footer
  }
};
</script>

<style lang="scss"></style>
