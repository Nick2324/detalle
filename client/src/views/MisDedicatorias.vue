<template>
  <div id="mis-dedicatorias">
    <p>{{ descripcion }}</p>
    <gallery />
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'mis-dedicatorias',
  data () {
    return {
      descripcion: 'Mis dedicatorias'
    }
  },
  components: {
    Gallery
  }
}

</script>
