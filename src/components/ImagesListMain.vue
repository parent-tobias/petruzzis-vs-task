<template>
  <div>
    <div class="pagination">
      <a @click.prevent="prevPage()" href="#">&laquo;</a>
      <a class="active">{{ currentPage }}</a>
      <a @click="nextPage()" href="#">&raquo;</a>
    </div>
    <div class="image-container-wrapper">
      <div v-for="image in images" :key="image.id">
        <single-image
          :id="image.id"
          :author="image.author"
          :url="image.url"
          :downloadUrl="image.download_url"
        />
      </div>
    </div>
    <modal :image="selectedImage" v-if="modalActive" />
  </div>
</template>

<script>
import SingleImage from "./SingleImage.vue";
import Modal from "./Modal.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    SingleImage,
    Modal,
  },
  data() {
    return {
      payload: {
        page: 1,
        limit: 30,
      },
      modalActive: false,
      selectedImage: null,
    };
  },
  methods: {
    selectImage(arg) {
      this.modalActive = true;
      this.selectedImage = arg;
    },
    prevPage() {
      if (this.payload.page < 1) {
        this.payload.page -= 1;
        this.$store.dispatch("getImages", this.payload);
      } else {
        console.log("cant go -1");
      }
    },
  },
  created() {
    this.$store.dispatch("getImages", this.payload);
  },
  computed: {
    ...mapGetters({
      images: "getImageList",
      currentPage: "currentPage",
    }),
  },
};
</script>

<style>
</style>