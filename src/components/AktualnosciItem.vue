<script>
import { computed, defineAsyncComponent } from "vue";
import { storage } from "@/includes/firebase.js";
import { ref } from 'firebase/storage'

export default {
  name: 'AktualnosciItem',
  props: {
    post: {
      type: Object
    }
  },
  setup(props) {
    console.log(`aktualnosci_posts/tresc_${props.post.docID}.vue`)
    const postRef = ref(storage, `aktualnosci_posts/tresc_${props.post.docID}.vue`)
    console.log(postRef)
    //const trescPosta = computed(()=>{return defineAsyncComponent(() => import(`../tmp_posts/tresc_post1.vue`))})

    return {
      //trescPosta
    }
  },

}
</script>

<template>
<div class="p-10 border-stone-50 bg-stone-50 border-2 rounded-2xl drop-shadow-md drop-shadow-stone-200">
  <router-link class="font-bold" :to="{name: 'post', params: {id: post.url_ending}}">
    {{post.postTitle}}
  </router-link>
  <p class="italic text-base">13.05.2021</p>
  <div class="line-clamp-3">
    <p>{{post.postSummary}}</p>
<!--    <component :is="trescPosta"></component>-->
  </div>
</div>
</template>
