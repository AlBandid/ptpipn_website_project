<script>
import { computed, defineAsyncComponent } from "vue";

export default {
  name: 'AktualnosciItem',
  props: {
    post: {
      type: Object
    }
  },
  setup(props) {
    const trescPosta = computed(()=>{
      return defineAsyncComponent(() => import(`../aktualnosci_posts/tresc_${props.post.url_ending}.vue`))
    })

    return {
      trescPosta
    }
  },

}
</script>

<template>
<div class="p-10 border-fuchsia-50 bg-white border-2 rounded-2xl drop-shadow-md">
  <router-link class="font-bold app-link line-clamp-1" :to="{name: 'post', params: {urlPosta: post.url_ending}}">
    {{post.postTitle}}
  </router-link>
  <p class="italic text-base">
    {{post.creationDate.toDate().toLocaleString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',})
    }}
  </p>
  <div class="line-clamp-3">
    <component :is="trescPosta"></component>
  </div>
</div>
</template>
