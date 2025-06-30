import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AktualnosciView from "@/views/AktualnosciView.vue";
import PostView from "@/views/PostView.vue";
import KonferencjeView from "@/views/KonferencjeView.vue";
import SprCzlView from "@/views/SprCzlView.vue";
import KontaktView from "@/views/KontaktView.vue";
import BankWiedzyView from '@/views/BankWiedzyView.vue'

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
    path: '/post/:urlPosta',
    name: 'post',
    component: PostView,
    props: true
  },
  {
    path: '/konferencje',
    name: 'konferencje',
    component: KonferencjeView,
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
    path: '/bank-wiedzy',
    name: 'bankWiedzy',
    component: BankWiedzyView,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {name: 'home'},
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash)
          if (element) {
            const yOffset = -80 // Adjust this to your header height or desired offset
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
            window.scrollTo({ top: y, behavior: 'smooth' })
          }
          resolve()
        }, 300) // small delay to ensure DOM has rendered
      })
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
