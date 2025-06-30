<script setup>
import MobileHeader from '@/components/mobileHeader.vue'
import WideScreenHeader from '@/components/wideScreenHeader.vue'
import { computed, reactive } from 'vue'

const menuLeft = reactive([
  {
    title: 'Konferencje',
    name: 'konferencje',
    submenuVisible: false,
    submenus: [
      {
        title: 'Neonursing 2025',
        name: 'konferencje',
        hash: '#neonursing'
      },
      {
        title: 'Interprofesjonalna opieka nad kobietą i noworodkiem',
        name: 'konferencje',
        hash: '#interprofesjonalna-opieka-nad-kobieta-i-noworodkiem'
      },
      {
        title: 'Śląska Szkoła Neonatologii',
        name: 'konferencje',
        hash: '#slaska-szkola-neonatologii'
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
        title: 'Przydatne linki',
        name: 'bankWiedzy',
        hash: '#przydatne-linki'
      },
      {
        title: 'Materiały szkoleniowe',
        name: 'bankWiedzy',
        hash: '#materialy-szkoleniowe'
      },
      {
        title: 'COVID-19',
        name: 'bankWiedzy',
        hash: '#covid-19'
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

const fullMenu = computed(() => menuRight.concat(menuLeft))
</script>

<template>
  <mobile-header :fullMenu="fullMenu"/>
  <wide-screen-header class="hidden lg:block" :menuLeft="menuLeft" :menuRight="menuRight"/>
</template>

