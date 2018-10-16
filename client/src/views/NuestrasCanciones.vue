<template>
  <div id="nuestras-canciones">
    <h1>{{ title }}</h1>
    <p v-html="descripcion" />
    <gallery :cols="cols" :elements="elements"/>
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'nuestras-canciones',
  data () {
    return {
      title: 'Nuestras canciones',
      descripcion: 'De tu y de mi, de yo y de tu',
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
