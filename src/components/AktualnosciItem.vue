<script>
import {computed, defineAsyncComponent} from "vue";

export default {
  name: 'AktualnosciItem',
  props: {
    post: Object
  },
  setup(props) {
    const trescPosta = computed(()=>{return defineAsyncComponent(() => import(`../tmp_posts/tresc_${props.post.id}.vue`))})

    return {
      trescPosta
    }
  },

}
</script>

<template>
<div class="p-10 border-stone-50 bg-stone-50 border-2 rounded-2xl drop-shadow-md drop-shadow-stone-200">
  <router-link class="font-bold" :to="{name: 'post', params: {id: post.id}}">
    {{post.title}}
  </router-link>
  <p class="italic text-base">13.05.2021</p>
  <div class="line-clamp-3">
    <component :is="trescPosta"></component>
  </div>
</div>
</template>
