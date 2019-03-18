<!--  -->
<template>
  <div class="UserInfo">
    <div
      class="loading"
      v-if="isLoading"
    >
      <img src="../assets/loading.gif">
    </div>
    <div class="userInformation">
      <section>
        <img :src="userinfo.avatar_url" alt="">
        <span>{{userinfo.loginname}}</span>
        <p>{{userinfo.score}}积分</p>
        <p>注册于{{userinfo.create_at | formatDate}}</p>
      </section>
      <div class="topics">
        <p>最近创建的主题</p>
        <ul>
          <li v-for="item in userinfo.recent_topics">
            <router-link :to="{
              name:'post_content',
              params:{
              id:item.id,
              }
            }">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="replies">
        <p>最近回复的主题</p>
        <ul>
          <li v-for="item in userinfo.recent_replies">
            <router-link :to="{
              name:'post_content',
              params:{
                id:item.id,
              }
            }">
              {{item.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      isLoading: false,
      userinfo:{}
    };
  },

  components: {},

  computed: {},

  methods: {
    getData(){
      this.$http.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
      .then((res) => {
        this.isLoading = false;
        this.userinfo = res.data.data;
      }).catch((err) => {
        console.log(err)
      });
    }
  },
  beforeMount(){
    this.isLoading = true;
    this.getData();
  }
};
</script>
<style scoped>
</style>