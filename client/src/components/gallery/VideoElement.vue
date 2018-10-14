<template>
  <div id="video-element" class="gallery-element">
    <video
      :ref="id"
      @mouseout="togglePlaying"
      @mouseover="togglePlaying"
      :poster="imageSrc"
      controls
    class="gallery-element">
      <source :src="src" :type="srcType">
    </video>
    <div :id="descripcion">
      {{ placeholder }}
    </div>
  </div>
</template>

<script>

import GalleryElement from './GalleryElement.vue'

export default {
  name: 'video-element',
  extends: GalleryElement,
  created () {
    this.src = this.options.src
    this.imageSrc = this.options.imageSrc
  },
  data () {
    return {
      playing: false,
      src: null,
      imageSrc: null
    }
  },
  computed: {
    srcType () {
      return 'video/' + this.src.match(/\.(mp4|webm|ogg)/i)[0].toLowerCase().replace('.', '')
    }
  },
  methods: {
    togglePlaying () {
      this.playing = !this.playing
      if (this.playing) {
        this.$refs[this.id].play()
      } else {
        this.$refs[this.id].pause()
      }
    }
  }
}

</script>
