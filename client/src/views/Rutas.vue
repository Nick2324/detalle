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
            galeria: {
              slides: [
                {
                  text: 'Nuestro 1er viaje, Villavicencio',
                  src: '/images/rutas/1.jpg'
                },
                {
                  text: 'Tratando de llegar a ti pero.................... decidi tomar el caballo mas lento jajajaja',
                  src: '/images/rutas/2.jpg'
                }
              ]
            }
          }
        },
        {
          nombre: 'armenia',
          coordenadas: {
            lat: 4.5389579,
            lng: -75.7711785
          },
          info: {
            galeria: {
              slides: [
                {
                  text: 'Armenia y sus hermosos paisajes cafeteros',
                  src: '/images/rutas/3.jpg'
                },
                {
                  text: 'De tu mano todo camino es mejor ',
                  src: '/images/rutas/4.jpg'
                },
                {
                  text: 'Ven te robo un besito mientras inicia la funcion cafetera',
                  src: '/images/rutas/5.jpg'
                },
                {
                  text: 'Me dolian los pies de tanto caminar, pero verte a mi lado me llenaba de energia',
                  src: '/images/rutas/6.jpg'
                }
              ]
            }
          }
        },
        {
          nombre: 'manizales',
          coordenadas: {
            lat: 5.0686966,
            lng: -75.5186627
          },
          info: {
            galeria:{
              slides:[
                {
                  text: 'Manizales, mi tierra cafetera',
                  src: '/images/rutas/7.jpg'
                },
                {
                  text: 'Enseñandote lo que es Chipre, las ferias, lo que me encanta de esta hermosa tierra "Ave maria, pues"',
                  src: '/images/rutas/8.jpg'
                }
              ]
            }
          }
        },
        {
          nombre: 'medellin',
          coordenadas: {
            lat: 6.2441988,
            lng: -75.6512524
          },
          info: {
            galeria: {
              slides: [
                {
                  src: '/images/rutas/9.jpg',
                  text: 'Medellin y sus varias formas de transporte'
                },
                {
                  text: 'Parque de los pies descalzos y, como lo nombraste, "la gente real no es perfecta"',
                  src: '/images/rutas/10.jpg'
                },
                {
                  text: 'Dejando huella a cada lugar que visitamos',
                  src: '/images/rutas/14.jpg'
                },
                {
                  text: 'Siendo a tu lado, aún más que ayer',
                  src: '/images/rutas/15.jpg'
                },
                {
                  text: 'Grrrrr............el pequeño dinosaurio (Gatosaurio)',
                  src: '/images/rutas/16.jpg'
                },
                {
                  text: 'Los hermosos paisajes que siempre existen en nuestros viajes',
                  src: '/images/rutas/17.jpg'
                },
                {
                  text: 'Cada paso, cada regalo',
                  src: '/images/rutas/18.jpg'
                },
                {
                  text: '"El amor no es perfecto, únicamente real"',
                  src: '/images/rutas/19.jpg'
                }
              ]
            }
          }
        },
        {
          nombre: 'guatape',
          coordenadas: {
            lat: 6.2311374,
            lng: -75.1625134
          },
          info: {
            galeria: {
              slides: [
                {
                  text: 'Guatapé y sus formas unicas de enseñarnos la palabra "paciencia"',
                  src: '/images/rutas/11.jpg'
                },
                {
                  text: 'Para que sol, si tú eres el mío',
                  src: '/images/rutas/12.jpg'
                }
              ]
            }
          }
        },
        {
          nombre: 'bogota',
          coordenadas: {
            lat: 4.6988549,
            lng: -74.1434098
          },
          info: {
            descripcion: 'Por cada ruta hecha y por las que faltan,convertidas en una historia magnifica, única, grandiosa,inolvidable y llenas de amor',
            imagen: '/images/rutas/13.jpg'
          }
        }
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
