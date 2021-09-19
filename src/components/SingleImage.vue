<template>
  <div class="image-container-wrapper__single-image">
    <img :src="imageUrl" :alt="author" />
    <div class="image-container-wrapper__single-image__about">
      <div>
        <span>{{ author }}</span>
      </div>
      <div>
        <span>{{ id }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    author: String,
    url: String,
    downloadUrl: String,
  },
  computed: {
    imageUrl() {
      const id = this.downloadUrl.split(`/id/`)[1].split("/")[0];
      return `${this.downloadUrl.split(`/id/`)[0]}/id/${id}/367/267`;
    },
  },
  created() {},
};
</script>

<style>
</style>