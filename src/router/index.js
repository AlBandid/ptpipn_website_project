import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AktualnosciView from "@/views/AktualnosciView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/o-nas',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/aktualnosci',
    name: 'aktualnosci',
    component: AktualnosciView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
