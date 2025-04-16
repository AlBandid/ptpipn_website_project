import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AktualnosciView from "@/views/AktualnosciView.vue";
import PostView from "@/views/PostView.vue";
import NeonursingView from "@/views/NeonursingView.vue";
import SprCzlView from "@/views/SprCzlView.vue";
import KontaktView from "@/views/KontaktView.vue";

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
    path: '/post/:idPosta',
    name: 'post',
    component: PostView,
    props: true
  },
  {
    path: '/neonursing',
    name: 'neonursing',
    component: NeonursingView,
  },
  {
    path: '/sprawy-czlonkowskie',
    name: 'sprawyCzlonkowskie',
    component: SprCzlView,
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: KontaktView,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {name: 'home'},
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
