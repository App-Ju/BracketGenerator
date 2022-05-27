<template>
  <!--  TODO вынести нав в хедер-->
  <nav>
    <img alt="logo" src="@/assets/logo.png" />
    <h1>Гененратор турнирной сетки</h1>
    <router-link to="/">Настройки</router-link>
    <router-link to="/about">Сетка</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  display: flex;
  align-items: center;
  padding: 5px;
  background: #292e3a;

  & img {
    width: 70px;
    height: 70px;
    object-fit: contain;
    margin-right: 30px;
  }

  & h1 {
    margin-right: 20%;
    color: #adbece;
  }

  & a {
    margin: 0 30px;
    font-weight: bold;
    color: #adbece;

    &.router-link-exact-active {
      color: #ff8420;
    }
  }
}
</style>
