import { ref } from "vue";

let getPosts=()=>{
    let posts=ref([]);
    let error=ref("")
    let load=async()=>{
      try{
        await new Promise((resolve,reject)=>{
          //resolve();
          setTimeout(resolve,3000)
        })
        let response= await fetch("http://localhost:3000/posts")
        if(response.status===404){
          throw new Error("Error 404");
        }
        let datas=await response.json()
        //console.log(datas);
        posts.value=datas
      }
      catch(err){
        error.value=err.message
      }
      
    }
    return {posts,error,load};
}
export default getPosts;