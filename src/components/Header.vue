<!--  -->
<template>
  <div class="header">
    <router-link :to="{name:'root'}">
      <img alt src="../assets/cnodejs_light.svg">
    </router-link>
    <ul>
      <li>
        <router-link :to="{name:'root'}">首页</router-link>
      </li>
      <li>
        <router-link :to="{name: 'about'}">关于</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },

  components: {},

  computed: {},

  methods: {}
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  background-color: #444444;
  height: 50px;
}
img {
  max-width: 120px;
  margin-left: 50px;
  margin-top: 10px;
}
ul {
  list-style: none;
  float: right;
  margin: 4px 40px;
}
li {
  display: inline-block;
  padding: 10px 15px;
}
a {
  text-decoration: none;
  color: #ccc;
  font-size: 14px;
  text-shadow: none;
}
ul li a:hover {
  color: #ffffff;
}
</style>