<template>
  <div id="gallery-text-element">
    ELEMENTO TEXTO - {{id}} - {{placeholder}}
  </div>
</template>

<script>

import GalleryElement from './GalleryElement'

export default {
    name: 'gallery-text-element',
    extends: GalleryElement
}

</script>
