<template>
  <div id="image-element" class="gallery-element" ref="displayable">
    <article class="card gallery-element">
      <img :src="src" :alt="placeholder" class="card-img-top gallery-element" @click="displayGalleryElement"/>
      <div v-if="text" class="card-body">
        <h4>{{ title }}</h4>
        <p class="card-text" @click="displayGalleryElement">
          {{ text }}
        </p>
      </div>
    </article>
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
