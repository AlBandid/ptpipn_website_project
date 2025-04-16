<script>
import { defineAsyncComponent} from "vue";
import { postsCollection } from "@/includes/firebase.js";
import { getDocs, query, where, limit } from "firebase/firestore";

export default {
  name: "PostView",
  props: {
    idPosta: String,
    documentID: String,
  },
  data() {
    return {
      post: {},
    }
  },
  computed: {
    trescPosta() {
      return defineAsyncComponent(() => import(`../aktualnosci_posts/tresc_${this.$route.params.idPosta}.vue`))
    }
  },
  async created() {
    const postsSnapshot = await getDocs(query(postsCollection, where('url_ending', '==', this.$route.params.idPosta), limit(1)))

    if(postsSnapshot.size === 0){
      this.$router.push({name: 'home'})
      return
    }

    postsSnapshot.forEach((doc) => {
      this.post = Object.assign(this.post, { ...doc.data(), docID: doc.id })
    })
  }
}


</script>

<template>
  <div class="app-view-content">
    <div class="app-section-title">
      <p>{{post.postTitle}}</p>
    </div>
    <div class="text-lg lg:text-xl text-justify">
      <component :is="trescPosta"></component>
    </div>
  </div>
</template>
