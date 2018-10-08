<template>
  <div id="image-element">
    ELEMENTO IMAGE - {{id}} - {{placeholder}}
  </div>
</template>

<script>

import GalleryElement from './GalleryElement.vue'

export default {
  name: 'image-element',
  extends: GalleryElement
}

</script>
