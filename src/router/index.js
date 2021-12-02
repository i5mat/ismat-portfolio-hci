import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import moment from 'moment'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('Do MMMM YYYY, h:mm A')
  }
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
