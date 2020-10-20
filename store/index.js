export default {
  state: () => ({
    posts: [],
    post:{}
  }),
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
    },
    updatePost(state,post){
      state.post = post;
    }
  }
}
