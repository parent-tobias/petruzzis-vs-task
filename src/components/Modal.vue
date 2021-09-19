<template>
  <div class="modal-wrapper">
    <div class="modal">
      <span class="cancel-modal-btn"></span>
      <iframe :src="image.download_url" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        image: Object
    }
};
</script>

<style>
</style>