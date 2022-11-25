<template>
  <h4>{{singlepost.title}}</h4>
  <!-- <p>{{singlepost.body}}</p> -->
  
  <p>{{blog}}</p>
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

</style>