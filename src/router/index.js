import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AktualnosciView from "@/views/AktualnosciView.vue";
import NeonursingView from "@/views/NeonursingView.vue";

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
  {
    path: '/neonursing',
    name: 'neonursing',
    component: NeonursingView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
