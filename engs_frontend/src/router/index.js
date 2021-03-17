import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPg from '@/views/MainPg.vue'
import AboutUs from '@/views/AboutUs.vue'
import Gallery from '@/views/Gallery.vue'
import News from '@/views/News.vue'
import Post from '@/components/Post.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPg',
    component: MainPg
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/news/post/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
