<template>
  <div id="image-element">
    <b-card
      :title="title"
      :img-src="src"
      :img-alt="placeholder"
      img-top
      tag="article">
      <p v-if="text" class="card-text">
        {{ text }}
      </p>
    </b-card>
  </div>
</template>

<script>

import GalleryElement from './GalleryElement.vue'

export default {
  name: 'image-element',
  extends: GalleryElement,
  created () {
    this.src = this.options.src
    this.text = this.options.text
    this.title = this.options.title
  },
  data () {
    return {
      src: null,
      text: null,
      title: null
    }
  }
}

</script>
