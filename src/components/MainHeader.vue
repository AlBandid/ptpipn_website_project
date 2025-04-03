<template>
  <div>
    <div class="absolute w-full h-150 -z-2 bg-[url(/img/istockphoto-817147694-612x612.jpg)] bg-cover bg-center"/>
    <div class="absolute w-full h-150 -z-1 bg-black/30 backdrop-blur-sm"/>
    <sub-header/>
  </div>
  <div class="flex-row place-content-center justify-items-center max-w-8/12 mx-auto mt-20 text-white text-7xl font-bold">
    <p class="m-6">Polskie Towarzystwo</p>
    <p class="m-6">Pielęgniarek i Położnych</p>
    <p class="m-6">Neonatologicznych</p>
  </div>
</template>
<script setup>
import SubHeader from "@/components/SubHeader.vue";
</script>
