<script setup>
import MainHeader from "@/components/MainHeader.vue";
import AktualnosciItem from "@/components/AktualnosciItem.vue";
const posty = [
  {
    id: 'post1',
    title: 'Post 1',
    tresc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi turpis, faucibus ac dui ut, consequat laoreet nisl. Donec vel ullamcorper ipsum. Nam vulputate elementum aliquam. Nam commodo orci a lacus feugiat, id porta urna faucibus. In nulla orci, ullamcorper ut condimentum a, rhoncus posuere ligula. Cras venenatis felis vel risus iaculis fermentum non eget nisl. Ut luctus finibus nibh, eget auctor risus feugiat eget. Aenean non maximus enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam et magna arcu. In venenatis sagittis erat, id vestibulum massa elementum eget. Praesent id elit erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec viverra mauris sit amet mauris pellentesque bibendum. Nunc lorem ante, pulvinar nec rhoncus et, suscipit ac ligula. Praesent in euismod erat.'
  },
  {
    id: 'post2',
    title: 'Post 2',
    tresc: 'Vivamus vulputate vel justo nec finibus. Donec dictum, metus eget auctor tristique, eros nisi luctus mi, sed blandit lectus magna vel nulla. Nulla facilisi. Pellentesque lobortis pulvinar mauris, vel tempor lacus vulputate rhoncus. Pellentesque varius ex eget tellus lobortis, non auctor odio laoreet. Ut bibendum lorem at accumsan fringilla. Sed maximus vitae arcu sed eleifend. Aenean mauris mauris, iaculis nec ullamcorper in, iaculis in quam. Ut pretium sapien est, eget accumsan ex tempus vel. Phasellus at tellus accumsan odio lobortis pellentesque ut et turpis. Maecenas non odio tellus. Aenean in leo bibendum massa efficitur faucibus scelerisque non lectus. Sed rhoncus, sem non convallis ornare, ex velit interdum lectus, nec scelerisque nisl enim sed massa. Duis fermentum mi sed risus aliquet, eu lacinia augue dictum. Donec ullamcorper facilisis consequat.'
  },
  {
    id: 'post3',
    title: 'Post 3',
    tresc: 'Sed lacinia odio ligula, in condimentum enim dapibus sit amet. Donec dictum feugiat elementum. Sed nec diam enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut orci non diam auctor volutpat. In accumsan, diam eu ullamcorper convallis, purus sem accumsan nisi, id fringilla magna nulla maximus mi. Morbi vel mattis tortor, porta finibus mi. Sed magna purus, pellentesque vitae est non, sollicitudin pretium ante. Vivamus purus ligula, condimentum id nisl a, tincidunt dapibus nibh. Proin justo augue, sollicitudin a sodales non, accumsan quis purus. Sed faucibus pulvinar euismod. Nunc vel egestas enim. Nullam eu convallis arcu, eu mattis nisi.'
  }
]
</script>

<template>
  <main-header/>
  <div class="text-2xl xs:text-xs mt-50 mx-50 xs:mx-10 flex flex-col gap-30">
    <p class="text-center">Naszym celem jest podnoszenie jakości opieki nad noworodkiem i jego rodziną oraz propagowanie i rozwój pielęgniarstwa neonatologicznego na jak najwyższym poziomie.</p>
    <div class="flex flex-col place-items-center gap-10">
      <p class="text-2xl text-fuchsia-950 font-bold">SPRAWDŹ NASZE AKTUALNOŚCI</p>
      <div class="flex flex-col lg:flex-row gap-10 text-md lg:text-2xl mx-10 lg:mx-50 place-items-center md:place-content-center">
        <div v-for="(post, index) in posty" :key="index">
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
