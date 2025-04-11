<script setup>
import {RouterLink} from "vue-router";
import {ref, onBeforeUnmount} from "vue";

let header_class = ref("");
let top_header_bg_class = ref("absolute max-w-full w-full bg-fuchsia-900/80 -z-3 h-20");
function handleScroll() {
  if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
    header_class.value = "sticky top-0 bg-fuchsia-900/80 backdrop-blur-sm duration-150 drop-shadow-lg"
    top_header_bg_class.value = ""
  } else {
    header_class.value = ""
    top_header_bg_class.value = "absolute max-w-full w-full bg-fuchsia-900/80 -z-3 h-20"
  }
}
window.addEventListener('scroll', handleScroll, {passive: true});

onBeforeUnmount(()=>{
  window.removeEventListener('scroll', handleScroll, {passive: true});
})
</script>

<template>
  <div class="max-w-full" :class="header_class" @scroll.passive="handleScroll">
    <div v-if="$route.path!='/'" :class="top_header_bg_class"/>
    <div class="relative max-w flex place-content-center items-center h-20 gap-5 text-white font-sans text-md/5 lg:text-lg/5 xl:text-xl/6 2xl:text-2xl/6 text-center">
      <span class="max-h-20 w-5/12">
        <nav class="flex items-center float-right">
          <RouterLink :to="{name: 'neonursing'}" class="p-5 rounded-4xl duration-150 hover:bg-white/10">Neonursing 2024</RouterLink>
          <RouterLink :to="{name: 'aktualnosci'}" class="p-5 rounded-4xl duration-150 hover:bg-white/10">Aktualności</RouterLink>
        </nav>
      </span>
      <span class="max-w-2/12 min-w-10 w-16">
          <nav class="">
            <RouterLink :to="{name: 'home'}">
              <img src="/img/nowe_logo_ptpipn_biale.png" alt="PTPiPN logo" class=""/>
            </RouterLink>
          </nav>
        </span>
      <span class="max-h-20 w-5/12">
          <nav class="gap-5 flex float-left">
            <RouterLink :to="{name: 'about'}" class="p-5 rounded-4xl duration-150 hover:bg-white/10">O nas</RouterLink>
            <RouterLink :to="{name: 'about'}" class="p-5 rounded-4xl duration-150 hover:bg-white/10">Sprawy członkowskie</RouterLink>
            <RouterLink :to="{name: 'about'}" class="p-5 rounded-4xl duration-150 hover:bg-white/10">Do pobrania</RouterLink>
          </nav>
        </span>
    </div>
  </div>
</template>

