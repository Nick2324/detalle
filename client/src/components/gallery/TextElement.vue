<template>
  <div id="text-element" class="gallery-element">
    <div ref="thumbnail"></div>
    <div :id="id + '-text-element'" ref="content" class="d-none">
      <h3 v-if="title">{{ title }}</h3>
      <h3 v-else>{{ placeholder }}</h3>
      <p v-html="text"></p>
    </div>
  </div>
</template>

<script>

import GalleryElement from './GalleryElement.vue'

export default {
  name: 'text-element',
  extends: GalleryElement,
  data () {
    return {
      text: null,
      title: null
    }
  },
  created () {
    this.title = this.options.title
    this.text = this.options.text
  },
  mounted () {
    this.takeScreenshot()
  },
  methods: {
    takeScreenshot () {
      let id = this.id
      let thumbnail = this.$refs.thumbnail
      this.html2canvas(this.$refs.content, {
        onclone: function (document) {
          let hiddenElement = document.getElementById(id + '-text-element')
          hiddenElement.style.display = 'block'
          hiddenElement.setAttribute('class', '')
          console.log(hiddenElement)
        }
      }).then((canvas) => {
        canvas.setAttribute('class', 'thumbnail')
        thumbnail.appendChild(canvas)
      })
    }
  }
}

</script>
