<template>
  <div id="image-element">
    <img :src="src" :alt="placeholder" />
  </div>
</template>

<script>

import GalleryElement from './GalleryElement.vue'

export default {
  name: 'image-element',
  extends: GalleryElement,
  created () {
    this.src = this.options.src
  },
  data () {
    return {
      src: null
    }
  }
}

</script>
