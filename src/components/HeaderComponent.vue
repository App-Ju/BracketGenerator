<template>
  <nav class="header">
    <img class="header__logo" alt="logo" src="@/assets/logo.png" />
    <h1 class="header__title">Гененратор турнирной сетки</h1>
    <router-link class="header__link" to="/">Настройки</router-link>
    <router-link class="header__link" to="/bracket">Сетка</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
});
</script>

<style lang="scss" scoped>
@import "@/assets/style/variables.scss";

.header {
  display: flex;
  align-items: center;
  padding: 5px;
  background: $header-color;
  font-family: $raleway-font;

  &__logo {
    width: 70px;
    height: 70px;
    object-fit: contain;
    margin-right: 30px;
  }

  &__title {
    margin-right: 20%;
    font-size: 23px;
    color: $text-color;
  }

  &__link {
    margin: 0 30px;
    font-weight: bold;
    color: $text-color;

    &.router-link-exact-active {
      color: $main-color;
    }
  }
}
</style>
