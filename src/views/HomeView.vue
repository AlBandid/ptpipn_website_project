<script setup>
import MainHeader from "@/components/MainHeader.vue";
import AktualnosciItem from "@/components/AktualnosciItem.vue";
import {onBeforeMount, reactive, ref} from "vue";
import {getDocs, limit, orderBy, query} from "firebase/firestore";
import {postsCollection} from "@/includes/firebase.js";

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
  <div class="h-60 md:h-50 lg:h-40 xl:h-30"/>
  <div class="text-2xl xs:text-xs mt-20 mx-10 lg:mx-50 flex flex-col gap-30">
    <p class="text-center">Naszym celem jest podnoszenie jakości opieki nad noworodkiem i jego rodziną oraz propagowanie i rozwój pielęgniarstwa neonatologicznego na jak najwyższym poziomie.</p>
    <div class="flex flex-col place-items-center gap-10">
      <p class="text-2xl text-fuchsia-950 font-bold">SPRAWDŹ NASZE AKTUALNOŚCI</p>
      <div class="flex flex-col lg:flex-row gap-10 text-md lg:text-2xl mx-10 lg:mx-50 place-items-center md:place-content-center">
        <div v-for="post in posty" :key="post.docID">
          <aktualnosci-item :post="post"/>
        </div>
      </div>
    </div>
    <div class="flex flex-col place-items-center gap-10">
      <p class="text-2xl text-fuchsia-950 font-bold">NASI SPONSORZY</p>
      <div class="flex flex-col mx-auto xl:flex-row gap-8 max-w-10/12 xl:place-content-center place-items-center">
        <div class="max-w-8/12 xl:max-w-4/12 max-h-30 xl:max-h-50 min-w-6/12 xl:min-w-2/12 size-400 bg-[url(/img/identyfikator_ptpipn.png)] bg-contain bg-no-repeat"/>
        <div class="max-w-8/12 xl:max-w-4/12 max-h-30 xl:max-h-50 min-w-6/12 xl:min-w-2/12 size-400 bg-[url(/img/identyfikator_ptpipn.png)] bg-contain bg-no-repeat"/>
        <div class="max-w-8/12 xl:max-w-4/12 max-h-30 xl:max-h-50 min-w-6/12 xl:min-w-2/12 size-400 bg-[url(/img/identyfikator_ptpipn.png)] bg-contain bg-no-repeat"/>
      </div>
    </div>
  </div>
</template>
