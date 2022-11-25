<template>
  <h1>Post Lists</h1>
  <div v-for="prop in props" :key="prop.id">
    <SinglePost :singlepost="prop"></SinglePost>
  </div>

</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:['props'],
    setup(props){
        onMounted(()=>{
            alert("Component mounted")
        });
        onUnmounted(()=>{
            alert("Component Unmounted")
        });
        onUpdated(()=>{
            alert("component Updated")
        })

    }
}
</script>

<style>

</style>