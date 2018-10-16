<template>
    <div id="rutas" class="text-center">
      <h1>{{ title }}</h1>
      <p v-html="descripcion" />
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
      title: 'Rutas',
      descripcion: 'Momentos y lugares donde hemos estado. Que lindo es estar con vos',
      opcionesMapa: {
        center: { lat: 4.4609735, lng: -76.6009903 },
        zoom: 6.5
      },
      rutas: [
        {
          nombre: 'villavicencio',
          coordenadas: {
            lat: 4.1247567,
            lng: -73.6440797
          },
          info: {
            descripcion: 'Nuestro 1er viaje, Villavicencio',
            imagen: '/images/rutas/1.jpg'
          }
        },
        {
          nombre: 'villavicencio2',
          coordenadas: {
            lat: 4.095815,
            lng:  -73.574038
          },
          info: {
            descripcion: 'Tratando de llegar a ti pero.................... decidi tomar el caballo mas lento jajajaja',
            imagen: '/images/rutas/2.jpg'
          }
        },
        {
          nombre: 'armenia',
          coordenadas: {
            lat: 4.5389579,
            lng: -75.7711785
          },
          info: {
            descripcion: 'Armenia y sus hermosos paisajes cafeteros',
            imagen: '/images/rutas/3.jpg'
          }
        },
        {
          nombre: 'armenia2',
          coordenadas: {
            lat: 4.538765,
            lng: -75.7700938
          },
          info: {
            descripcion: 'De tu mano todo camino es mejor ',
            imagen: '/images/rutas/4.jpg'
          }
        },
        {
          nombre: 'armenia3',
          coordenadas: {
            lat: 4.538787,
            lng: -75.7698733
          },
          info: {
            descripcion: 'Ven te robo un besito mientras inicia la funcion cafetera',
            imagen: '/images/rutas/5.jpg'
          }
        },
        {
          nombre: 'armenia4',
          coordenadas: {
            lat: 4.538787,
            lng: -75.7698733
          },
          info: {
            descripcion: 'Me dolian los pies de tanto caminar, pero verte a mi lado me llenaba de energia',
            imagen: '/images/rutas/6.jpg'
          }
        },
        {
          nombre: 'manizales',
          coordenadas: {
            lat: 5.0686966,
            lng: -75.5186627
          },
          info: {
            descripcion: 'Manizales, mi tierra cafetera',
            imagen: '/images/rutas/7.jpg'
          }
        },
        {
          nombre: 'manizales2',
          coordenadas: {
            lat: 5.0748285,
            lng: -75.5343747
          },
          info: {
            descripcion: 'Enseñandote lo que es Chipre, las ferias, lo que me encanta de esta hermosa tierra "Ave maria, pues"',
            imagen: '/images/rutas/8.jpg'
          }
        },
        {
          nombre: 'medellin',
          coordenadas: {
            lat: 6.2441988,
            lng: -75.6512524
          },
          info: {
            descripcion: 'Medellin y sus varias formas de transporte',
            imagen: '/images/rutas/9.jpg'
          }
        },
        {
          nombre: 'medellin',
          coordenadas: {
            lat: 6.2446509,
            lng: -75.5793933
          },
          info: {
            descripcion: 'Parque de los pies descalzos y, como lo nombraste, "la gente real no es perfecta"',
            imagen: '/images/rutas/10.jpg'
          }
        },
       /* {
          nombre: 'ejemplo2',
          coordenadas: [
            { lat: 5, lng: 75 },
            { lat: 5, lng: 76 },
            { lat: 5, lng: 77 }
          ],
          info: {
            descripcion: 'ESTE ES UN EJEMPLO DEL POLYLINE 22222222222'
          }
        } */
      ]
    }
  },
  components: {
    Mapa
  }
}
</script>
