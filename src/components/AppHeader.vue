<script setup>
import {RouterLink, useRoute} from "vue-router";
import { ref, onBeforeUnmount, reactive } from 'vue'

let route = useRoute();

const menuLeft = reactive([
  {
    title: 'Neonursing 2024',
    name: 'neonursing',
    submenuVisible: false,
    submenus: [
      {
        title: 'Program Konferencji',
        name: 'neonursing',
        hash: '#program-konferencji'
      }
    ]
  },
  {
    title: 'Bank wiedzy',
    name: 'bankWiedzy',
    submenuVisible: false,
    submenus: [
      {
        title: 'Światowy Dzień Wcześniaka',
        name: 'bankWiedzy',
        hash: '#swiatowy-dzien-wczesniaka'
      },
      {
        title: 'COVID-19',
        name: 'bankWiedzy',
        hash: '#covid-19'
      },
      {
        title: 'Materiały szkoleniowe',
        name: 'bankWiedzy',
        hash: '#materialy-szkoleniowe'
      },
      {
        title: 'Przydatne linki',
        name: 'bankWiedzy',
        hash: '#przydatne-linki'
      }
    ]
  },
  {
    title: 'Aktualności',
    name: 'aktualnosci',
    submenuVisible: false,
    submenus: []
  }
])
const menuRight = reactive([
  {
    title: 'O nas',
    name: 'about',
    submenuVisible: false,
    submenus: [
      {
        title: 'Struktura PTPiPN',
        name: 'about',
        hash: '#struktura'
      }
    ]
  },
  {
    title: 'Sprawy członkowskie',
    name: 'sprawyCzlonkowskie',
    submenuVisible: false,
    submenus: []
  },
  {
    title: 'Kontakt',
    name: 'kontakt',
    submenuVisible: false,
    submenus: []
  }
])

let header_class = ref("");
let top_header_bg_class = ref("absolute max-w-full w-full bg-fuchsia-900/70 -z-3 h-20");
let submenu_class = ref("");
function handleScroll() {
  if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
    header_class.value = "sticky top-0 bg-fuchsia-900/70 backdrop-blur-sm duration-150 drop-shadow-lg"
    top_header_bg_class.value = ""
    submenu_class.value = "bg-fuchsia-900/50"
  } else {
    header_class.value = ""
    top_header_bg_class.value = "absolute max-w-full w-full bg-fuchsia-900/70 -z-3 h-20"
    submenu_class.value = ""
  }
}
window.addEventListener('scroll', handleScroll, {passive: true});

onBeforeUnmount(()=>{
  window.removeEventListener('scroll', handleScroll, {passive: true});
})
</script>

<template>
  <div class="max-w-full" :class="header_class" @scroll.passive="handleScroll">
    <div v-if="route.path !== '/'" :class="top_header_bg_class"/>
    <div class="relative max-w flex flex-row place-content-center items-center h-20 gap-5 text-white font-sans text-md/5 lg:text-lg/5 xl:text-xl/6 2xl:text-2xl/6 text-center">
      <div class="max-h-20 w-5/12">
        <div class="flex flex-row items-start float-right pt-2">
          <div
            v-for="menuItem in menuLeft" :key="menuItem.name"
            class="flex flex-col"
          >
            <div @mouseenter="menuItem.submenuVisible=true" @mouseleave="menuItem.submenuVisible=false">
              <RouterLink :to="{name: menuItem.name}" class="app-menu-button">{{ menuItem.title }}</RouterLink>
              <div
                class="bg-fuchsia-900/10 rounded-b-4xl backdrop-blur-md drop-shadow-2xl mt-2"
                :class="submenu_class"
              >
                <div
                  v-for="subItem in menuItem.submenus" :key="subItem.hash"
                  v-show="menuItem.submenuVisible"
                  class="flex flex-col w-full"
                  @mouseover="menuItem.submenuVisible=true"
                >
                  <RouterLink
                    :to="{name: subItem.name, hash: subItem.hash}"
                    class="app-menu-button"
                    v-slot="{ navigate }"
                    @click="navigate"
                  >
                    {{ subItem.title }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-2/12 min-w-10 w-16">
        <div class="">
          <RouterLink :to="{name: 'home'}">
            <img src="/img/nowe_logo_ptpipn_biale.png" alt="PTPiPN logo" class=""/>
          </RouterLink>
        </div>
      </div>
      <div class="max-h-20 w-5/12">
        <div class="flex flex-row items-start float-left pt-2">
          <div
            v-for="menuItem in menuRight" :key="menuItem.name"
            class="flex flex-col"
          >
            <div @mouseenter="menuItem.submenuVisible=true" @mouseleave="menuItem.submenuVisible=false">
              <RouterLink :to="{name: menuItem.name}" class="app-menu-button">{{ menuItem.title }}</RouterLink>
              <div
                class="bg-fuchsia-900/10 rounded-b-4xl backdrop-blur-md drop-shadow-2xl mt-2"
                :class="submenu_class"
              >
                <div
                  v-for="subItem in menuItem.submenus" :key="subItem.hash"
                  v-show="menuItem.submenuVisible"
                  class="flex flex-col"
                >
                  <RouterLink
                    :to="{name: subItem.name, hash: subItem.hash}"
                    class="app-menu-button"
                    v-slot="{ navigate }"
                    @click="navigate"
                  >
                    {{ subItem.title }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

