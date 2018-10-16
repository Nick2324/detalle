<template>
  <div id="nuestras-canciones">
    <p>{{ descripcion }}</p>
    <gallery :cols="cols" :elements="elements"/>
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'nuestras-canciones',
  data () {
    return {
      descripcion: 'Nuestras canciones',
      elements: [
        
      ],
      cols: 4
    }
  },
  components: {
    Gallery
  }
}

</script>
