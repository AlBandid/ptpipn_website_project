<script setup>
import MobileHeader from '@/components/mobileHeader.vue'
import WideScreenHeader from '@/components/wideScreenHeader.vue'
import { computed, reactive } from 'vue'

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

const fullMenu = computed(() => menuRight.concat(menuLeft))
</script>

<template>
  <mobile-header :fullMenu="fullMenu"/>
  <wide-screen-header class="hidden lg:block" :menuLeft="menuLeft" :menuRight="menuRight"/>
</template>

