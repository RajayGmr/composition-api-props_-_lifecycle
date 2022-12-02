<template>
    <div class="post">
        <router-link :to="{name:'detail',params:{id:singlepost.id}}">
        <h4>{{singlepost.title}}</h4>
        </router-link>
        <p>{{singlepost.body}}</p>
        <div v-for="tag in singlepost.tags" :key="tag" class="pill">
        {{tag}}
        </div>
    </div>
   
  </template>
  
  <script>
  import { computed } from '@vue/runtime-core'
  export default {
      props:['singlepost'],
      setup(props){
          let blog=computed(()=>{
              return props.singlepost.body.substring(0,79)+"....";
          })
          return{blog};
      }
  }
  </script>
  
  <style>
  .post{
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed rgb(1, 21, 28);
  }
  .post h4{
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: rgb(84, 5, 5);
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h4::before{
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotate(-1deg);
  }
  .pill{
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}
  
  </style>