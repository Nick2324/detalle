<template>
  <div id="nuestras-canciones">
    <p>{{ descripcion }}</p>
    <gallery />
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'nuestras-canciones',
  data () {
    return {
      descripcion: 'Nuestras canciones'
    }
  },
  components: {
    Gallery
  }
}

</script>
