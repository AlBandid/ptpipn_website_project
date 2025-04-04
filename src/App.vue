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
  <app-header/>
  <RouterView class="mb-20"/>
  <app-footer/>
</template>
