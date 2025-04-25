<script setup>
import MainHeader from "@/components/MainHeader.vue";
import AktualnosciItem from "@/components/AktualnosciItem.vue";
import {onBeforeMount, reactive, ref} from "vue";
import {getDocs, limit, orderBy, query} from "firebase/firestore";
import {postsCollection} from "@/includes/firebase.js";
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
const modules = [Navigation, Pagination, Autoplay];

//const logoModules = import.meta.glob('/public/img/partners_logo/*.{png,jpg,jpeg,svg,gif}', { eager: true });
//const logos = Object.values(logoModules).map(mod => mod.default);
const logos = [
  {
    index: 0,
    filename: '00_NeoMedica.png',
    link: 'http://neomedica.waw.pl',
    decoration: 'border-fuchsia-700'
  },
  {
    index: 1,
    filename: '01_Nutricia-logo-strapline-rgb-grad.jpg',
    link: 'https://akademianutricia.pl',
    decoration: 'border-yellow-600'
  },
  {
    index: 2,
    filename: '02_Bebilon_w_tarczy-1.png',
    link: 'https://www.bebiprogram.pl',
    decoration: 'border-yellow-600'
  },
  {
    index: 3,
    filename: '03_bebiko.jpg',
    link: 'https://www.bebiklub.pl',
    decoration: 'border-yellow-600'
  },
  {
    index: 4,
    filename: '04_Humana.jpg',
    link: 'https://www.humana-baby.pl',
    decoration: 'border-slate-400'
  },
  {
    index: 5,
    filename: '05_medela.jpg',
    link: 'https://www.medela.com/pl-pl/odciaganie-pokarmu-z-piersi',
    decoration: 'border-slate-400'
  },
  {
    index: 6,
    filename: '06_Logo_Bepanthen_Baby_RGB.png',
    link: 'https://www.bepanthen.pl',
    decoration: 'border-slate-400'
  },
  {
    index: 7,
    filename: '07_neno_2024.jpg',
    link: 'https://neno.pl',
    decoration: 'border-slate-400'
  },
  {
    index: 8,
    filename: '08_Drager_logo_2023.jpg',
    link: 'https://www.draeger.com/pl_pl/Hospital/Neonatal-Care',
    decoration: 'border-slate-400'
  },
  {
    index: 9,
    filename: '09_Dutchmed.gif',
    link: 'http://www.dutchmed.pl',
    decoration: 'border-slate-400'
  },
  {
    index: 10,
    filename: '10_FPHcare-logo.svg.png',
    link: 'https://www.fphcare.com/en-gb/',
    decoration: 'border-slate-400'
  },
  {
    index: 11,
    filename: '11_bd.png',
    link: 'https://www.bd.com/pl-pl',
    decoration: 'border-slate-400'
  },
  {
    index: 12,
    filename: '12_LOGO NUK MEDICPRO duże 2024.jpg',
    link: 'https://www.nuk.pl/pl_pl/o-marce-nuk/nuk-medicpro',
    decoration: 'border-white'
  },
  {
    index: 13,
    filename: '13_Kroban - logo.png',
    link: 'https://www.kroban.pl',
    decoration: 'border-white'
  },
  {
    index: 14,
    filename: '14_logo_neOplus.jpg',
    link: 'https://neoplus.com.pl',
    decoration: 'border-white'
  },
  {
    index: 15,
    filename: '15_Seca.jpg',
    link: 'https://www.seca.com/pl_pl.html',
    decoration: 'border-white'
  },
  {
    index: 16,
    filename: '16_logo ge.jpg',
    link: 'https://www.gehealthcare.pl',
    decoration: 'border-white'
  },
  {
    index: 17,
    filename: '17_baxter.png',
    link: 'https://www.baxter.com.pl/pl',
    decoration: 'border-white'
  }
]

const posty = reactive([])
const pendingRequest = ref(false)

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
      orderBy('postTitle','desc'),
      limit(3)
    )
  )

  postsSnapshot.forEach((doc) => {
    posty.push({ ...doc.data(), docID: doc.id })
  })
  pendingRequest.value = false;
}

onBeforeMount(() => {
  requestTop3Posts()
})

</script>

<template>
  <main-header/>
  <div class="mt-30 sm:mt-40 flex flex-col gap-30">
    <div class="app-section-block">
      <p class="text-center text-base lg:text-2xl px-10 md:px-20 xl:px-30 mx-auto italic">
        "Naszym celem jest podnoszenie jakości opieki nad noworodkiem i jego rodziną oraz propagowanie
        i rozwój pielęgniarstwa neonatologicznego na jak najwyższym poziomie."
      </p>
    </div>
    <div class="app-section-block place-items-center">
      <p class="text-2xl text-fuchsia-950 font-bold text-center">SPRAWDŹ NASZE AKTUALNOŚCI</p>
      <div class="flex flex-col lg:flex-row gap-10 text-md lg:text-2xl mt-5 mx-10 lg:mx-50 place-items-center md:place-content-center">
        <div v-for="post in posty" :key="post.docID">
          <aktualnosci-item :post="post"/>
        </div>
      </div>
    </div>
    <div class="app-section-block place-items-center mb-10 mx-auto max-w-full md:overflow-hidden">
      <p class="text-2xl text-fuchsia-950 font-bold text-center">NASI PATRONI I PARTNERZY</p>
      <div class="w-full bg-white">
        <div class="max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl mx-auto px-4 py-4">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :space-between="5"
            :breakpoints="{ 768: { slidesPerView: 4 } }"
            :autoplay="{ delay: 2000, disableOnInteraction: false }"
            grab-cursor
            loop
            class="w-full"
          >
            <SwiperSlide v-for="logo in logos" :key="logo.index">
              <div class="w-full h-50 md:h-30 flex items-center justify-center bg-white my-4" >
                <a
                  :href="logo.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full h-50 md:h-30 flex items-center justify-center bg-white border-3 drop-shadow-lg rounded-2xl p-4 m-4"
                  :class="logo.decoration"
                >
                  <img :src="`/img/partners_logo/${logo.filename}`" class="max-h-full max-w-full object-contain" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>
