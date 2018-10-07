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

import GalleryElement from './GalleryElement'

export default {
  name: 'gallery',
  // props: [ 'cols', 'elements' ],
  data () {
    return {
      'matriz': null,
      'elements': [
        { 'id': 1, 'placeholder': 'xyz', 'component': 'gallery-video-element' },
        { 'id': 2, 'placeholder': 'xyz', 'component': 'gallery-image-element' },
        { 'id': 3, 'placeholder': 'xyz', 'component': 'gallery-text-element' },
        { 'id': 4, 'placeholder': 'xyz', 'component': 'gallery-element' },
        { 'id': 5, 'placeholder': 'xyz', 'component': 'gallery-element' },
        { 'id': 6, 'placeholder': 'xyz', 'component': 'gallery-element' },
        { 'id': 7, 'placeholder': 'xyz', 'component': 'gallery-video-element' },
        { 'id': 8, 'placeholder': 'xyz', 'component': 'gallery-image-element' },
        { 'id': 9, 'placeholder': 'xyz', 'component': 'gallery-text-element' },
        { 'id': 10, 'placeholder': 'xyz', 'component': 'gallery-image-element' },
        { 'id': 11, 'placeholder': 'xyz', 'component': 'gallery-image-element' },
        { 'id': 12, 'placeholder': 'xyz', 'component': 'gallery-image-element' }
      ],
      'rows': null,
      'cols': 4
    }
  },
  components: {
    GalleryElement
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
    console.log('this.matriz', this.matriz)
  }
}

</script>
