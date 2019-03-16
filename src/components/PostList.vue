<!--  -->
<template>
  <div class="PostList">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif">
    </div>
    <!-- 代表主题帖子 -->
    <div class="posts">
      <ul>
        <li v-for="post in posts">
          <!-- 头像 -->
          <img :src="post.author.avatar_url" alt="">
          <!-- 回复/浏览 -->
          <span>
            <span class="reply_count">{{post.reply_count}}</span>
            /{{post.visit_count}}
          </span>
          <span>

          </span>
          <!-- 标题 -->
          <span>
            {{post.title}}
          </span>
          <!-- 最终回复时间 -->
          <span class="last_reply">
            {{post.last_reply_at | formatDate}}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data() {
    return {
      posts:[],
      isLoading: false
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          page: 1,
          limit: 20
        })
        .then(res => {
          this.isLoading = false; // 加载成功，去除动画
          this.posts = res.data.data;
        })
        .catch(err => {
          //处理放回失败后的问题
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true; // 加载成功之前显示加载动画
    this.getData(); // 在页面加载之前获取数据
  }
};
</script>
<style scoped>
img{
  width:30px;
  height:30px;
}
</style>