<script setup>
import WideoItem from '@/components/WideoItem.vue'
</script>

<template>
  <div class="flex flex-col lg:grid lg:grid-cols-2 gap-5">
    <wideo-item :id="'sesja1'" :title="'SESJA I'" :link="'DouAntscfIU'"></wideo-item>
    <wideo-item :id="'sesja2'" :title="'SESJA II'" :link="'eEflXzuPBPY'"></wideo-item>
    <wideo-item :id="'sesja3'" :title="'SESJA III'" :link="'2wY38u4uilk'"></wideo-item>
    <wideo-item :id="'sesja4'" :title="'SESJA IV'" :link="'ohJMJFxcOjE'"></wideo-item>
  </div>
</template>

<style scoped></style>
