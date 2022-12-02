<template>
  <div class="spin">

  </div>
</template>

<script>
export default {

}
</script>

<style>
.spin{
    width: 25px;
    height: 25px;
    border: 5px solid transparent;
    border-radius: 50%;
    margin: 30px auto;

    border-top-color: red;
    border-bottom-color: green;
    border-right-color: yellow;
    border-left-color: blue;
    animation: loading 1s infinite;
}
@keyframes loading {
    to{
        transform: rotate(360deg);
    }
}

</style>