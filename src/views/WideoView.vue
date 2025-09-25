<script setup>
import { computed, ref } from 'vue'
import AuthForm from '@/components/AuthForm.vue'
import WideoList from '@/components/WideoList.vue'

let isAuthorized = ref(false)
let view = computed(() => { return isAuthorized.value ? WideoList : AuthForm })

function authorize() {
  isAuthorized.value = true
}
</script>

<template>
  <div class="app-section-block">
    <div class="app-section-title">
      <p>Konferencja Neonursing - materiały wideo</p>
    </div>
    <component :is="view" :authorize="authorize"></component>
  </div>
</template>

<style scoped></style>
