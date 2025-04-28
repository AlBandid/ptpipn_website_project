<script>
import { RouterView } from 'vue-router'
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"

export default {
  name: 'App',
  components: {
    AppHeader,
    RouterView,
    AppFooter,
  },
}
</script>

<template>
  <div>
    <app-header/>
<!--    <transition name="fade" mode="out-in">-->
      <RouterView class="mb-20 -z-2 h-auto min-h-screen app-view-content"/>
<!--    </transition>-->
    <app-footer/>
  </div>
</template>

<style>
.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 0.5s linear;
}
.fade-leave-to{
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
