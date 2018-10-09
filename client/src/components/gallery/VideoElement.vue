<template>
  <div id="video-element">
    <video :ref="id" @hover="togglePlaying" :poster="imageSrc">
      <source :src="src" :type="srcType">
    </video>
    <div :id="descripcion">
      {{placeholder}}
    </div>
  </div>
</template>

<script>

import GalleryElement from './GalleryElement.vue'

export default {
  name: 'video-element',
  extends: GalleryElement,
  props: [ 'src', 'imageSrc' ],
  data () {
    return {
      src: null,
      srcType: null,
      playing: false
    }
  },
  computed: {
    srcType: () => 'video/' + this.src.match(/\.(mp4|webm|ogg)^/i).toLowerCase()
  },
  method: {
    togglePlaying () {
      this.playing = !!this.playing
      if (this.playing) {
        this.$ref[this.id].play()
      } else {
        this.$ref[this.id].pause()
      }
    }
  }
}

</script>
