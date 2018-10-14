<template>
  <div id="gallery-element">
    {{id}} - {{placeholder}}
  </div>
</template>

<style scoped>
.gallery-element {
  max-width: 100%;
  max-height: 100%;
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
  }
}

</script>
