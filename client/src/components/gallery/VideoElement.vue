<template>
  <div id="video-element">
    ELEMENTO VIDEO - {{id}} - {{placeholder}}
  </div>
</template>

<script>

import GalleryElement from './GalleryElement.vue'

export default {
  name: 'video-element',
  extends: GalleryElement
}

</script>
