<template>
  <div id="gallery-image-element">
    ELEMENTO IMAGE - {{id}} - {{placeholder}}
  </div>
</template>

<script>

import GalleryElement from './GalleryElement'

export default {
    name: 'gallery-image-element',
    extends: GalleryElement
}

</script>
