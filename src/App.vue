<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">ホーム</router-link>|
      <router-link to="/dogs">イヌ一覧</router-link>|
      <router-link to="/cats">ネコ一覧</router-link>
    </div>
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<style lang="scss">
body {
  background-color: #eee;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
}

#nav {
  padding: 30px;
  background-color: #fff;
  a {
    font-size: 1.5rem;
    font-weight: bold;
    color: #555;
    padding: 1rem;

    &.router-link-exact-active {
      color: #999;
    }
  }
}
</style>
