<template>

  <div class="card">
    <div v-if="$store.state.posts">
      <div style="width: 300px; height: 200px; display: inline-block; padding: 20px; margin: 5px; border:2px solid #35495e" v-for="post in $store.state.posts" :key="post.id">
        <strong>
          <nuxt-link :to="`/blog/${post.id}`">
            <span @click="updatePost(post)">{{ post.title }}</span>
          </nuxt-link>
        </strong>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  fetch({$axios,store}) {
    return $axios.$get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        store.commit('updatePosts',res)
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods:{
    updatePost(post){
      this.$store.commit('updatePost',post)
    }
  }
}
</script>

<style scoped>

</style>
