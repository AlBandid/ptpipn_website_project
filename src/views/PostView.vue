<script setup>
import {onBeforeMount, reactive, computed, defineAsyncComponent} from "vue";
import {useRoute} from "vue-router";

let post = reactive({})
let trescPosta = computed(()=>{
  return defineAsyncComponent(() => import(`../tmp_posts/tresc_${post.id}.vue`))
  //W0nVQLNbTlcEjjryViU9
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
  <div class="app-view-content">
    <div class="app-section-title">
      <p>{{post.title}}</p>
    </div>
    <div class="text-lg lg:text-xl text-justify">
      <component :is="trescPosta"></component>
    </div>
  </div>
</template>
