<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div>
      <div class="absolute w-full -z-1"><img src="/img/istockphoto-817147694-612x612.jpg" class="w-full" /></div>
      <div class="max-w-full mt-4 bg-white/20">
        <div class="relative max-w flex place-content-center items-center h-20 gap-10">
        <span class="h-10 text-2xl w-5/12">
          <nav class="gap-5 flex float-right">
            <RouterLink :to="{name: 'aktualnosci'}">Kolejny link menu</RouterLink>
            <RouterLink :to="{name: 'aktualnosci'}">Neonursing 2025</RouterLink>
            <RouterLink :to="{name: 'aktualnosci'}">Aktualności</RouterLink>
          </nav>
        </span>
          <span class="max-w-2/12 min-w-10 w-18">
          <nav class="">
            <RouterLink :to="{name: 'home'}">
              <img src="/img/nowe_logo_ptpipn.png" alt="PTPiPN logo" />
            </RouterLink>
          </nav>
        </span>
          <span class="h-10 text-2xl w-5/12">
          <nav class="gap-5 flex float-left">
            <RouterLink :to="{name: 'about'}">O nas</RouterLink>
            <RouterLink :to="{name: 'about'}">Sprawy członkowskie</RouterLink>
            <RouterLink :to="{name: 'about'}">Do pobrania</RouterLink>
          </nav>
        </span>
        </div>
      </div>
    </div>

  </header>

  <RouterView />
</template>
