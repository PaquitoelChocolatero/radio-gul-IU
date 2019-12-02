import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Program from '../views/Program.vue'
import Player from '../views/Player.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/LoginPage.vue'

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
    component: Program,
    props: true
  },
  {
    path: '/p=:q/:season-:episode-:name',
    name: 'player',
    component: Player,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  }
]

const router = new VueRouter({
  routes
})

export default router
