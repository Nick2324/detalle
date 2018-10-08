<template>
  <div id="link-element">
    ELEMENTO LINK - {{id}} - {{placeholder}}
  </div>
</template>

<script>

import GalleryElement from './GalleryElement.vue'

export default {
  name: 'link-element',
  extends: GalleryElement
}

</script>
