<script setup>
const { wid_id, title, link, program } = defineProps({
  wid_id: String,
  title: String,
  link: String,
  program: Array
});
</script>

<template>
  <div class="max-w-11/12 mb-10">
    <p>{{ title }}</p>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
      <div class="max-w-110 w-full h-60 md:max-w-160 md:h-85 lg:max-w-160 lg:h-90">
        <iframe :id="wid_id" type="text/html" width="100%" height="100%"
                :src="'https://www.youtube.com/embed/'+link+'?autoplay=0&origin=https://ptpipn.pl'"
                allowfullscreen="allowfullscreen"
                mozallowfullscreen="mozallowfullscreen"
                msallowfullscreen="msallowfullscreen"
                oallowfullscreen="oallowfullscreen"
                webkitallowfullscreen="webkitallowfullscreen"
        ></iframe>
      </div>
      <div>
        <div v-for="(item,index) in program" :key="index" class="flex-col text-justify">
          <p>{{index+1}}. <b>{{item.title}}</b> - {{item.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
