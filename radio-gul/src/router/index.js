import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Program from '../views/Program.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/search?:q',
    name: 'search',
    component: Search
  },
  {
    path: '/p=:q',
    name: 'program',
    component: Program
  }
]

const router = new VueRouter({
  routes
})

export default router