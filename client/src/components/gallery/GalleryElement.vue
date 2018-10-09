<template>
  <div id="gallery-element">
    {{id}} - {{placeholder}}
  </div>
</template>

<script>

export default {
  name: 'gallery-element',
  props: [ 'id', 'placeholder' ],
  created () {
    if (!this.placeholder) {
      this.id = this.placeholder
    }
  },
  computed: {
    descripcion: () => this.id + '-' + this.placeholder
  }
}

</script>
