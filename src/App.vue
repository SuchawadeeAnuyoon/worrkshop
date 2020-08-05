<template>
  <div id="app">
   <img src="image/workshop.jpg" alt>
    <div id="nav">
      <router-link to="/">WorkShop 1-2</router-link> |
      <router-link to="/WorkShop3-5">WorkShop 3-5</router-link> |
      <router-link to="/WorkShop6">WorkShop 6</router-link> |
      <router-link to="/WorkShop7">WorkShop 7</router-link> |
      <router-link to="/WorkShop8">WorkShop 8</router-link> |
      <router-link to="/WorkShop9">WorkShop 9</router-link> |
      <router-link to="/WorkShop10">WorkShop 10</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import menubar from './components/Elements/menubar'
export default {
  components : {
    // menubar
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img {
  margin-top: 100px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
