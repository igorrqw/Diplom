<template lang="">
  <div class="footer-wraper">
      <div class="footer-container">
          <div class="footer-content-block">
              Контактная информация
              <div class="info-contact">
                  680352, Краснодарский край, г.Хадыженкс, ул.Ленина,6
              </div>
          </div>
          <div class="footer-content-block">
              <div class="">Телефон: +7(918)149-93-63</div>
              <div class="email-address">
                Почта:  warface.777@mail.ru
              </div>
          </div>
          <div class="footer-content-block">
              <h6>В социальных сетях</h6>
              <div class="display-icons">
                  <a href="https://vk.com/id305761225" target="_blank">
                    <img src="@/assets/vk.svg" alt="vk"> 
                    <span class="color">Вконтакте</span> </a>
                  <a href="" target="_blank">
                    <img src="@/assets/instagram.svg" alt="instagram">
                    <span class="color">Instagram</span>
                  </a>
                  <a href="" target="_blank"> 
                    <img src="@/assets/telegram.svg" alt="telegram"> 
                    <span class="color">Telegram</span></a>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.footer-wraper {
  background-color: #212529;
  padding: 10px 20px;

  @media (min-width: $mobile-width) {
    padding: 10px 30px;
  }

  @media (min-width: $tablet-width) {
    padding: 10px 50px;
  }

  @media (min-width: $desktop-width) {
    padding: 10px 80px;
  }

  @media (min-width: $large-desktop-width) {
    padding: 10px 100p;
  }
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (min-width: $tablet-width) {
    flex-direction: row;
    justify-content: space-between;
  }

}

.color {
  color: #999999;

  &:hover{
    color: $color-white;
  }
}

.footer-content-block {
  width: 280px;
  text-align: center;
}

.display-icons {
  display: flex;
  gap: 3px;
  flex-direction: column;
}
</style>
