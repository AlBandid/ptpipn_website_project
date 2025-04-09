<script>
export default {
  name: 'AktualnosciItem',
  props: {
    post: Object
  }
}
</script>

<template>
<div class="p-10 border-stone-50 bg-stone-50 border-2 rounded-2xl drop-shadow-md drop-shadow-stone-200">
  <router-link class="font-bold" :to="{name: 'post', params: {id: post.id}}">
    {{post.title}}
  </router-link>
  <p class="italic text-base">13.05.2021</p>
  <p class="line-clamp-3">{{post.tresc}}</p>
</div>
</template>
