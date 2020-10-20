<template>

  <div class="card">
    <div v-if="$store.state.post">
      <div style="width: 500px; height: 50%; display: inline-block; padding: 20px; margin: 20px; border:2px solid #35495e">
        <strong>
          {{ $store.state.post.title }}
        </strong>
        <p>{{ $store.state.post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "_id",
  validate({params}) {
   return !isNaN(params.id);
  },
  fetch({$axios,store,params}) {
    if (store.state.post && store.state.post.id === params.id) return true;
    return $axios.$get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(res => {
      store.commit('updatePost',res)
    })
  }
}
</script>

<style scoped>

</style>
