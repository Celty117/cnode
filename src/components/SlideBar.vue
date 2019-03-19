<!--  -->
<template>
  <div class="authorinfo">
    <div class="authorsummary">
      <div class="topbar">作者</div>
      <router-link :to="{
        name:'user_info',
        params:{
        name:userinfo.loginname
      }}">
        <img :src="userinfo.avatar_url">
      </router-link>
    </div>
    <div class="rencent_topics">
      <div class="topbar">作者最近主题</div>
      <ul>
        <li v-for="list in topiclimit">
          <router-link :to="{
            name:'post_content',
            params:{
              id:list.id,
              name:list.author.loginname,
            }
          }">
            {{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="rencent_replies">
      <div class="topbar">作者最近回复</div>
      <ul>
        <li v-for="list in replylimit">
          <router-link :to="{
            name:'post_content',
            params:{
              id:list.id,
              name:list.author.loginname,
            }
          }">
            {{list.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideBar",
  data() {
    return {
      userinfo: {}
    };
  },

  computed: {
    topiclimit() {
      if (this.userinfo.recent_topics) {
        return this.userinfo.recent_topics.slice(0, 5);
      }
    },
    replylimit() {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5);
      }
    }
  },

  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.userinfo = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  beforeMount() {
    this.isLoading = true;
    this.getData();
  },
};
</script>
<style scoped>
</style>