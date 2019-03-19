import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo';
import Slidebar from '../components/SlideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: PostList
      },
    },
    {
      name: 'post_content',
      path: '/topic/:id&author=:name',
      components: {
        main: Article,
        slidebar:Slidebar,
      },
    },
    {
      name:'user_info',
      path:'/user_info/:name',
      components:{
        main: UserInfo
      }
    },
  ]
})
