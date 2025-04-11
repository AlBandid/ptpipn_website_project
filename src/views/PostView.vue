<script setup>
import {onBeforeMount, reactive, computed, defineAsyncComponent} from "vue";
import {useRoute} from "vue-router";

let post = reactive({})
let trescPosta = computed(()=>{
  return defineAsyncComponent(() => import(`../tmp_posts/tresc_${post.id}.vue`))
})

onBeforeMount(() => {
  const postID = useRoute().params.id
  const posty = [
    {
      id: 'post1',
      title: 'Post 1',
    },
    {
      id: 'post2',
      title: 'Post 2',
    },
    {
      id: 'post3',
      title: 'Post 3',
    },
  ]
  post = posty.find((p) => p.id === postID)
})
</script>

<template>
  <div class="flex flex-col gap-5 mt-10 mx-10 lg:mx-50">
    <div class="text-2xl lg:text-4xl font-bold">
      <p>{{post.title}}</p>
    </div>
    <div class="text-lg lg:text-xl text-justify">
      <component :is="trescPosta"></component>
    </div>
  </div>
</template>
