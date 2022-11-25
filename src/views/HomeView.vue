<template>
  <div class="home">
    <div v-if="showPost">
      <PostList :props="posts"></PostList>
    </div>
    <button @click="showPost=!showPost">Toggle PostList</button>
    <button @click="posts.pop()">Delete</button>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import { ref } from '@vue/reactivity'
// @ is an alias to /src


export default {
  components: { PostList },
  setup(){
    let showPost=ref(true)
    let posts=ref([
      {title:"Post title 1", body:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam nam sapiente cum tenetur earum omnis! Porro mollitia neque doloremque alias eaque autem saepe omnis id velit. Distinctio, repellat quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam nam sapiente cum tenetur earum omnis! Porro mollitia neque doloremque alias eaque autem saepe omnis id velit. Distinctio, repellat quibusdam.ipsum dolor sit amet consectetur adipisicing elit. Possimus quisquam nam sapiente cum tenetur earum omnis! Porro mollitia neque doloremque alias eaque autem saepe omnis id velit. Distinctio, repellat quibusdam.",id:1},
      {title:"Post title 2", body:"Lorem ipsum",id:2},
      {title:"Post title 3", body:"Lorem ipsum",id:3},
      {title:"Post title 4", body:"Lorem ipsum",id:4},
      {title:"Post title 5", body:"Lorem ipsum",id:5},
    ])

    return {posts,showPost};
  }
}
</script>
