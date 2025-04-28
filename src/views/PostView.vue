<script>
import { defineAsyncComponent} from "vue";
import { postsCollection } from "@/includes/firebase.js";
import { getDocs, query, where, limit } from "firebase/firestore";

export default {
  name: "PostView",
  props: {
    urlPosta: String,
    documentID: String,
  },
  data() {
    return {
      post: {
        url_ending: ''
      },
    }
  },
  computed: {
    trescPosta() {
      console.log(this.post)
      return defineAsyncComponent(() => import(`../aktualnosci_posts/tresc_${this.$route.params.urlPosta}.vue`))
    }
  },
  async beforeMount() {
    const postsSnapshot = await getDocs(query(postsCollection, where('url_ending', '==', this.$route.params.urlPosta), limit(1)))
    console.log(postsSnapshot)
    if(postsSnapshot.size === 0){
      this.$router.push({name: 'home'})
      return
    }

    postsSnapshot.forEach((doc) => {
      this.post = Object.assign(this.post, { ...doc.data(), docID: doc.id })
      console.log(this.post)
    })
  }
}


</script>

<template>
<div>
  <div class="app-section-block">
    <div class="app-section-title">
      <p>{{post.postTitle}}</p>
      <p class="italic text-base">
        {{post.creationDate.toDate().toLocaleString('pl-PL', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',})
        }}
      </p>
    </div>
    <div class="text-lg lg:text-xl text-justify">
      <component :is="trescPosta"></component>
    </div>
  </div>
</div>
</template>
