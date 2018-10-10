<template>
  <div id="sound-element">
    <img :src="imageSrc" :alt="placeholder"/>
    <audio :ref="id" @hover="togglePlaying">
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
  props: [ 'src', 'imageSrc' ],
  data () {
    return {
      playing: false
    }
  },
  computed: {
    srcType: () => 'audio/' + this.src.match(/\.(wav|mp3|ogg)^/i).toLowerCase().replace('mp3', 'mpeg'),
    descripcion: () => this.id + '-' + this.placeholder
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
