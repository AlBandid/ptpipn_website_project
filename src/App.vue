<script>
import { RouterView } from 'vue-router'
import AppHeader from "@/components/AppHeader.vue"
import AppFooter from "@/components/AppFooter.vue"
import {ref} from "vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    RouterView,
    AppFooter,
  },
  setup() {
    const viewHeight = ref(`${window.innerHeight - 35}px`)
    console.log(viewHeight)

    return {
      viewHeight,
    }
  }
}
</script>

<template>
  <app-header/>
  <RouterView class="mb-20 min-h-(viewHeight)"/>
  <app-footer/>
</template>
