<template>
  <div id="text-element">
    <h3 v-if="title">{{ title }}</h3>
    <h3 v-else>{{ placeholder }}</h3>
    <!--p :id="descripcion">{{ text }}</p-->
  </div>
</template>

<script>

import GalleryElement from './GalleryElement.vue'

export default {
  name: 'text-element',
  extends: GalleryElement,
  props: [ 'title', 'text' ]
}

</script>
