<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <router-view name="slidebar"></router-view>
      <router-view name="main"></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import PostList from './components/PostList'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    PostList,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  background-color: #e1e1e1;
}
.main {
  width: 80%;
  margin: 0 auto;
}
@media (max-width: 979px) {
  .main {
    margin: 20px auto;
  }
}
</style>
