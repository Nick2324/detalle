<template>
  <div id="gallery">
    <b-container class="bv-example-row">
      <b-row v-for="(row, i) in matriz" :key="i">
        <b-col v-for="(col, j) in row" :key="i * cols + j">
          <gallery-element :id="col.id" :placeholder="col.placeholder"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

import GalleryElement from '@/components/GalleryElement'

export default {
  name: 'gallery',
  // props: [ 'cols', 'elements' ],
  data () {
    return {
      'matriz': null,
      'elements': [
        { 'id': 1, 'placeholder': 'xyz' },
        { 'id': 2, 'placeholder': 'xyz' },
        { 'id': 3, 'placeholder': 'xyz' },
        { 'id': 4, 'placeholder': 'xyz' },
        { 'id': 5, 'placeholder': 'xyz' },
        { 'id': 6, 'placeholder': 'xyz' },
        { 'id': 7, 'placeholder': 'xyz' },
        { 'id': 8, 'placeholder': 'xyz' },
        { 'id': 9, 'placeholder': 'xyz' },
        { 'id': 10, 'placeholder': 'xyz' },
        { 'id': 11, 'placeholder': 'xyz' },
        { 'id': 12, 'placeholder': 'xyz' }
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
