<script setup>
const { title, link } = defineProps({ title: String, link: String })
</script>

<template>
  <div>
    <p>{{ title }}</p>
    <div class="max-w-110 w-11/12 h-60 md:max-w-160 md:h-85 lg:max-w-220 lg:h-90">
      <iframe id="sesja1" type="text/html" width="100%" height="100%"
              :src="'https://www.youtube.com/embed/'+link+'?autoplay=1&origin=https://ptpipn.pl'"
      ></iframe>
    </div>
  </div>
</template>

<style scoped></style>
