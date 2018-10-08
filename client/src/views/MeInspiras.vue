<template>
  <div id="me-inspiras">
    <p>{{ descripcion }}</p>
    <gallery />
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'me-inspiras',
  data () {
    return {
      descripcion: 'Me inspiras'
    }
  },
  components: {
    Gallery
  }
}

</script>
