<template>
  <div id="gallery">
    <b-container class="bv-example-row">
      <b-row v-for="(row, i) in matriz" :key="i">
        <b-col v-for="(col, j) in row" :key="i * cols + j">
          <component :is="col.component" :id="col.id" :placeholder="col.placeholder"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import VideoElement from './VideoElement.vue'
import ImageElement from './ImageElement.vue'
import TextElement from './TextElement.vue'
import GalleryElement from './GalleryElement.vue'
import SoundElement from './SoundElement.vue'
import LinkElement from './LinkElement.vue'

export default {
  name: 'gallery',
  // props: [ 'cols', 'elements' ],
  data () {
    return {
      'matriz': null,
      'elements': [
        { 'id': 1, 'placeholder': 'xyz', 'component': 'VideoElement' },
        { 'id': 2, 'placeholder': 'xyz', 'component': 'VideoElement' },
        { 'id': 3, 'placeholder': 'xyz', 'component': 'TextElement' },
        { 'id': 4, 'placeholder': 'xyz', 'component': 'GalleryElement' },
        { 'id': 5, 'placeholder': 'xyz', 'component': 'GalleryElement' },
        { 'id': 6, 'placeholder': 'xyz', 'component': 'GalleryElement' },
        { 'id': 7, 'placeholder': 'xyz', 'component': 'VideoElement' },
        { 'id': 8, 'placeholder': 'xyz', 'component': 'VideoElement' },
        { 'id': 9, 'placeholder': 'xyz', 'component': 'TextElement' },
        { 'id': 10, 'placeholder': 'xyz', 'component': 'VideoElement' },
        { 'id': 11, 'placeholder': 'xyz', 'component': 'VideoElement' },
        { 'id': 12, 'placeholder': 'xyz', 'component': 'VideoElement' }
      ],
      'rows': null,
      'cols': 4
    }
  },
  components: {
    VideoElement,
    GalleryElement,
    TextElement,
    SoundElement,
    LinkElement
  },
  created () {
    let i = -1
    this.rows = Math.ceil(this.elements.length / this.cols)
    if (this.elements && this.cols && this.rows) {
      this.matriz = []
      this.elements.forEach(function (currval, index) {
        if (index % this.rows === 0) {
          this.matriz.push([])
          i++
        }
        this.matriz[i].push(currval)
      }.bind(this))
    }
  }
}

</script>
