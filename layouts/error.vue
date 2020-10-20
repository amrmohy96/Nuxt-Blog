<template>
  <h1 v-if="error.statusCode == 404">Route not found</h1>
  <h1 v-else>'something went wrong'</h1>
</template>

<script>
export default {
  name: "error",
  props: ['error'],
}
</script>

<style scoped>

</style>
