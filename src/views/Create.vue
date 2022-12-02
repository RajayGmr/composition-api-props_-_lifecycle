<template>
    <form action="" @submit.prevent="handleSubmit">
        <label for="">Title:</label>
        <input type="text" required v-model="title">

        <label for="">Body:</label>
        <textarea required v-model="bodytext"></textarea>
        <!-- <input type="text" required v-model="bodytext"> -->

        <label for="">Tags(Hit enter to add a tag)</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="handleKey">

        <button>Add Post</button>
        <div v-for="tag in tags" :key="tag.tag" class="pill">
            {{tag}}
        </div>
    </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup(){
        let title=ref("");
        let bodytext=ref("");
        let tag=ref("");
        let tags=ref([])
        let handleKey=()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value)
            }
            tag.value="";
        }
        let handleSubmit=async()=>{
            await fetch('http://localhost:3000/posts',{
                method: "POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    title:title.value,
                    body:bodytext.value,
                    tags:tags.value,
                })
            })   
        }
        return{title,bodytext,tag,tags,handleKey,handleSubmit}
    }
}
</script>

<style>
form{
    max-width: 450px;
    margin: 0 auto;
    text-align: left;
}
input, textarea{
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid black;
}
textarea{
    height: 160px;
}
label{
    display: inline-block;
    margin-top: 30px;
    position: relative;
}
button{
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 18px;
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