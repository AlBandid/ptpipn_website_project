<script setup>
import MainHeader from "@/components/MainHeader.vue";
import AktualnosciItem from "@/components/AktualnosciItem.vue";
import {onBeforeMount, reactive, ref} from "vue";
import {getDocs, limit, orderBy, query} from "firebase/firestore";
import {postsCollection} from "@/includes/firebase.js";
import { setupCollection } from '@/includes/firebase.js'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const modules = [Navigation, Pagination, Autoplay];
const logos = [
  {
    index: 0,
    filename: '00_NeoMedica.png',
    link: 'http://neomedica.waw.pl',
    alt_text: 'NeoMedica',
  },
  {
    index: 1,
    filename: '001_CNoL_logo_białe_tlo.png',
    link: 'https://cnol.kobiety.med.pl/pl/',
    alt_text: 'Centrum Nauki o Laktacji im. ANNY OSLISLO'
  }
]

const posty = reactive([])
const pendingRequest = ref(false)
let kartka_wielkanoc = ref(false)
let kartka_boze_narodzenie = ref(false)

async function requestTop3Posts() {
  if(pendingRequest.value){
    console.log('there is a pending request already')
    return
  }

  console.log('loading posts')
  pendingRequest.value = true;
  let postsSnapshot = await getDocs(
    query(
      postsCollection,
      orderBy('creationTime','desc'),
      limit(3)
    )
  )

  postsSnapshot.forEach((doc) => {
    posty.push({ ...doc.data(), docID: doc.id })
  })
  pendingRequest.value = false;
}

onBeforeMount(async() => {
  await requestTop3Posts()
  const setupRef = await getDocs(query(setupCollection, limit(1)))
  let setupData = {}
  setupRef.forEach((doc) => {
    setupData = Object.assign(setupData, { ...doc.data(), docID: doc.id })
  })
  kartka_wielkanoc.value = setupData.isWielkanoc || false
  kartka_boze_narodzenie.value = setupData.isBozeNarodzenie || false
})

</script>

<template>
  <main-header/>
  <div class="mt-30 sm:mt-40 lg:mt-45 flex flex-col gap-30">
    <div class="app-section-block">
      <p class="text-center text-base lg:text-2xl px-10 md:px-20 xl:px-30 mx-auto italic">
        "Naszym celem jest podnoszenie jakości opieki nad noworodkiem i jego rodziną oraz propagowanie
        i rozwój pielęgniarstwa neonatologicznego na jak najwyższym poziomie."
      </p>
    </div>
    <div v-if="kartka_wielkanoc" class="app-section-block">
      <div class="flex justify-center mx-10 lg:mx-50 bg-white drop-shadow-xl">
        <img src="/img/wielkanoc_PTPiPN.jpg" class="max-h-full max-w-full object-contain"/>
      </div>
    </div>
    <div v-if="kartka_boze_narodzenie" class="app-section-block">
      <div class="flex justify-center mx-10 lg:mx-50 bg-white drop-shadow-xl">
        <img src="/img/boze_narodzenie_PTPiPN.jpg" class="max-h-full max-w-full object-contain"/>
      </div>
    </div>
    <div class="app-section-block place-items-center">
      <p class="text-2xl text-fuchsia-950 font-bold text-center">SPRAWDŹ NASZE AKTUALNOŚCI</p>
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-10 mt-5 mx-10 lg:mx-50">
        <div v-for="post in posty" :key="post.docID">
          <aktualnosci-item :post="post"/>
        </div>
      </div>
    </div>
    <div class="app-section-block place-items-center mb-10 mx-10 lg:mx-50">
      <div class="mx-auto max-w-full md:overflow-hidden">
        <p class="text-2xl text-fuchsia-950 font-bold text-center">PTPiPN jest patronem merytorycznym:</p>
        <div class="w-full bg-white">
          <div class="max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto px-4 py-4">
<!--            when there are more than two/three logos we can add this -> 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } -->
            <Swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="5"
              :breakpoints="{ 640: { slidesPerView: 2 }}"
              :autoplay="{ delay: 2000, disableOnInteraction: false }"
              grab-cursor
              loop
              class="w-full"
            >
              <SwiperSlide v-for="logo in logos" :key="logo.index">
                <div class="w-full h-50 flex items-center justify-center bg-white my-4" >
                  <a
                    :href="logo.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-full h-full flex content-center justify-center bg-white drop-shadow-lg rounded-2xl pb-4 m-4"
                  >
                    <img :src="`/img/partners_logo/${logo.filename}`" class="max-h-full max-w-full object-contain p-4 m-4"  :alt="logo.alt_text"/>
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
