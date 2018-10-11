<template>
  <div id="text-element">
    <div ref="thumbnail"></div>
    <div ref="content" class="d-none">
      <h3 v-if="title">{{ title }}</h3>
      <h3 v-else>{{ placeholder }}</h3>
      <p>{{ text }}</p>
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
    this.takeScreenshot()
  },
  methods: {
    takeScreenshot () {
      this.$html2canvas(this.$refs.content).then((canvas) => {
        console.log(canvas)
        this.$refs.thumbnail.appendChild(canvas)
      })
    }
  }
}

</script>
