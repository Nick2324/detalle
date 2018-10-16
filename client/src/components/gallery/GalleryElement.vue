<template>
  <div id="gallery-element">
    {{id}} - {{placeholder}}
  </div>
</template>

<style>
.gallery-element {
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
}
</style>

<script>

export default {
  name: 'gallery-element',
  props: [ 'id', 'placeholder', 'options' ],
  created () {
    if (!this.placeholder) {
      this.id = this.placeholder
    }
  },
  computed: {
    descripcion () {
      return this.id + '-' + this.placeholder
    }
  },
  methods: {
    displayGalleryElement (replacing, onClose) {
      let outerHTML = this.$refs.displayable.outerHTML
      if (Array.isArray(replacing)) {
        replacing.forEach((value) => {
          outerHTML = outerHTML.replace(value.target, value.newValue)
        })
      } else {
        outerHTML = outerHTML.replace(replacing.target, replacing.newValue)
      }
      this.$emit(
        'display-gallery-element',
        outerHTML,
        onClose
      )
    }
  }
}

</script>
