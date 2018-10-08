<template>
    <div id="rutas">
      <p>{{ descripcion }}</p>
      <mapa v-bind:options="opciones"/>
    </div>
</template>

<script>

import Mapa from '@/components/maps/Mapa.vue'

export default {
  name: 'rutas',
  data () {
    return {
      descripcion: 'Rutas',
      opciones: {
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
