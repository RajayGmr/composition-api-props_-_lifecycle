<template>
    <h1>Post Lists</h1>
    <div v-for="prop in props" :key="prop.id">
      <SinglePost :singlepost="prop"></SinglePost>
    </div>
  
  </template>
  
  <script>
  import SinglePost from './SinglePost'
  export default {
    components: { SinglePost },
      props:['props'],
      setup(props){
      
      }
  }
  </script>
  
  <style>
  
  </style>