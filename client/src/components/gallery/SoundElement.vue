<template>
  <div id="sound-element" class="gallery-element">
    <img v-if="imageSrc"
      @mouseout="togglePlaying"
      @mouseover="togglePlaying"
      :src="imageSrc"
      :alt="placeholder"
      class="gallery-element"
    />
    <audio :ref="id" controls class="gallery-element">
      <source :src="src" :type="srcType">
    </audio>
    <div :id="descripcion">
      {{placeholder}}
    </div>
  </div>
</template>

<script>

import GalleryElement from './GalleryElement.vue'

export default {
  name: 'sound-element',
  extends: GalleryElement,
  data () {
    return {
      playing: false,
      src: null,
      imageSrc: null
    }
  },
  created () {
    this.src = this.options.src
    this.imageSrc = this.options.imageSrc
  },
  computed: {
    srcType () {
      return 'audio/' + this.src.match(/\.(wav|mp3|ogg|mpeg)/i)[0].toLowerCase().replace('mp3', 'mpeg').replace('.', '')
    },
    descripcion () {
      return this.id + '-' + this.placeholder
    }
  },
  methods: {
    togglePlaying (event) {
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
