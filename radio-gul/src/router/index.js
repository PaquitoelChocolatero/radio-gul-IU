import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Program from '../views/Program.vue'
import Player from '../views/Player.vue'

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
  },
  {
    path: '/p=:q/:season-:episode-:name',
    name: 'player',
    component: Player
  }
]

const router = new VueRouter({
  routes
})

export default router