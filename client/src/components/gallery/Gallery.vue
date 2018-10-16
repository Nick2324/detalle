<template>
  <div id="gallery">
    <b-container>
      <b-row v-for="(row, i) in matriz" :key="i">
        <b-col v-for="(col, j) in row" :key="i * cols + j">
          <component
            :is="col.component"
            :id="col.id"
            :placeholder="col.placeholder"
            :options="col.options"
            @display-gallery-element="displayGalleryElement($event)"/>
        </b-col>
      </b-row>
    </b-container>
    <b-modal ref="displayer" @hide="closeModal" hide-header hide-footer centered>
      <div ref="displayerDiv" />
    </b-modal>
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
  props: [ 'cols', 'elements' ],
  data () {
    return {
      matriz: null,
      rows: null,
      isDisplayerOn: false
    }
  },
  components: {
    VideoElement,
    GalleryElement,
    TextElement,
    SoundElement,
    LinkElement,
    ImageElement
  },
  created () {
    let i = -1
    this.rows = Math.ceil(this.elements.length / this.cols)
    if (this.elements && this.cols && this.rows) {
      this.matriz = []
      this.elements.forEach(function (currval, index) {
        if (index % this.cols === 0) {
          this.matriz.push([])
          i++
        }
        this.matriz[i].push(currval)
      }.bind(this))
    }
  },
  methods: {
    closeModal () {
      this.$refs.displayerDiv.innerHTML = ''
    },
    displayGalleryElement (data) {
      this.$refs.displayerDiv.innerHTML = data
      this.$refs.displayer.show()
    }
  }
}

</script>
