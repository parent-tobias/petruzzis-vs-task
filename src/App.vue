<template>
  <div id="app">
    <image-list-main />
  </div>
</template>

<script>
import ImageListMain from "./components/ImagesListMain.vue";

export default {
  name: "App",
  components: {
    ImageListMain,
  },
};
</script>

<style>
@import "./styles/style.css";
</style>
