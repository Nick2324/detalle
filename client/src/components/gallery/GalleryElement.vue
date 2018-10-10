<template>
  <div id="gallery-element">
    {{id}} - {{placeholder}}
  </div>
</template>

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
