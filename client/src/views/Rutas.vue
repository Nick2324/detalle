<template>
    <div id="rutas" class="text-center">
      <p>{{ descripcion }}</p>
      <mapa :options="opcionesMapa"
            :marcadores="rutas" />
    </div>
</template>

<script>
import Mapa from '@/components/maps/Mapa.vue'

export default {
  name: 'rutas',
  data () {
    return {
      descripcion: 'Rutas',
      opcionesMapa: {
        // center: { lat: 4.621717, lng: -74.0711358 },
        center: { lat: 4.62, lng: 74.10 },
        zoom: 10
      },
      rutas: [
        {
          nombre: 'ejemplo1',
          coordenadas: {
            lat: 4.62,
            lng: 74.10
          },
          info: {
            descripcion: 'EL ABC DE LOS DETALLES',
            imagen: '/images/logo.png'
          }
        },
        {
          nombre: 'ejemplo2',
          coordenadas: [
            { lat: 5, lng: 75 },
            { lat: 5, lng: 76 },
            { lat: 5, lng: 77 }
          ],
          info: {
            descripcion: 'ESTE ES UN EJEMPLO DEL POLYLINE 22222222222'
          }
        }
      ]
    }
  },
  components: {
    Mapa
  }
}
</script>
