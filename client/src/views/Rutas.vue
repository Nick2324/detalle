<template>
    <div id="rutas">
        <mapa v-bind:options="opciones"/>
    </div>
</template>

<script>

import Mapa from '@/components/Mapa.vue'

export default {
  name: 'rutas',
  data () {
    return {
      opciones:{
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
      }
    }
  },
  components: {
    Mapa
  }
}

</script>
