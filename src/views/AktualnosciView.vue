<script>
import AktualnosciItem from "@/components/AktualnosciItem.vue";
import { reactive, ref, onBeforeMount, onBeforeUnmount } from "vue";
import { postsCollection } from "@/includes/firebase.js";
import { doc, getDoc, getDocs, query, limit, orderBy, startAfter } from 'firebase/firestore'
export default {
  name: 'AktualnosciView',
  components: {
    AktualnosciItem
  },
  setup(){
    const posty = reactive([])
    const scroll_interval = ref(10)
    const pendingRequest = ref(false)

    async function requestPosts() {
      if(pendingRequest.value){
        console.log('there is a pending request already')
        return
      }

      console.log('loading posts')
      pendingRequest.value = true;
      let postsSnapshot
      if(posty.length > 0){
        const lastPost = await getDoc(doc(postsCollection, posty[posty.length-1].docID))
        postsSnapshot = await getDocs(
          query(
            postsCollection,
            orderBy('postTitle','desc'),
            startAfter(lastPost),
            limit(scroll_interval.value)
          )
        )
      } else {
        postsSnapshot = await getDocs(
          query(
            postsCollection,
            orderBy('postTitle','desc'),
            limit(scroll_interval.value)
          )
        )
      }

      postsSnapshot.forEach((doc) => {
        posty.push({ ...doc.data(), docID: doc.id })
      })
      pendingRequest.value = false;
    }

    async function handleScroll(){
      const {scrollTop, offsetHeight} = document.documentElement
      const {innerHeight} = window
      const bottomOfWindow = Math.round(scrollTop) + innerHeight === offsetHeight
      if(bottomOfWindow) {
        await requestPosts()
      }
    }

    onBeforeMount(() => {
      requestPosts()
      window.addEventListener('scroll', handleScroll)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      posty,
    }
  }
}
</script>

<template>
<div>
  <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-10">
    <div v-for="post in posty" :key="post.docID">
      <aktualnosci-item :post="post" :id="`post-id-${post.docID}`"/>
    </div>
  </div>
</div>
</template>
