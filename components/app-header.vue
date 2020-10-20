<template>
  <ul class="list">
    <li>
      <nuxt-link style="text-decoration: none;color: white" to="/blog">Blog</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "app-header"
}
</script>

<style scoped>
.list {
  list-style: none;
  background-color: #35495e;
  padding: 15px;
  color: white;
}
</style>
