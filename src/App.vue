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
    <RouterView class="mb-20 h-auto min-h-[68.5vh] app-view-content" />
    <app-footer/>
  </div>
</template>
