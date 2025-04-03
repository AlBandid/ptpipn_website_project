<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="max-w-full mt-4">
    <div class="relative max-w flex place-content-center items-center h-20 gap-10 text-white">
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
              <img src="/img/nowe_logo_ptpipn_biale.png" alt="PTPiPN logo" />
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
</template>

