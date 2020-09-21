import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactInfo from '../components/Contact/ContactInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ContactInfo ',
    name: 'ContactInfo',
    component: ContactInfo,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
