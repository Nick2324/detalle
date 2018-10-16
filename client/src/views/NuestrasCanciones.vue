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
        {
          'id': 0,
          'placeholder': 'Carla Morrison - Disfruto',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/1.mp3', 'imageSrc': '/images/nuestras_canciones/1.jpg' }
        },
        {
          'id': 1,
          'placeholder': 'Pablo Alboran - Solamente tú',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/2.mp3', 'imageSrc': '/images/nuestras_canciones/2.jpg' }
        },
        {
          'id': 2,
          'placeholder': 'Pablo Alboran - Por fin',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/3.mp3', 'imageSrc': '/images/nuestras_canciones/3.jpg' }
        },
        {
          'id': 3,
          'placeholder': 'Louis Armstrong - Only you',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/4.mp3', 'imageSrc': '/images/nuestras_canciones/4.jpg' }
        },
        {
          'id': 4,
          'placeholder': 'Canserbero - Querer querernos ',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/5.mp3', 'imageSrc': '/images/nuestras_canciones/5.jpg' }
        },
        {
          'id': 5,
          'placeholder': 'Andres Cepeda ft Sebastian Yatra - Magia',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/6.mp3', 'imageSrc': '/images/nuestras_canciones/6.jpeg' }
        },
        {
          'id': 6,
          'placeholder': 'Choquibtown - Invencible',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/7.mp3', 'imageSrc': '/images/nuestras_canciones/7.jpg' }
        },
        {
          'id': 7,
          'placeholder': 'Lauryn Hill - Can´t take my eyes off of you',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/8.mp3', 'imageSrc': '/images/nuestras_canciones/8.jpg' }
        },
        {
          'id': 8,
          'placeholder': 'Romeo Santos - Sobredosis',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/9.mp3', 'imageSrc': '/images/nuestras_canciones/9.jpg' }
        },
        {
          'id': 9,
          'placeholder': 'Romeo Santos - La diabla/Mi santa ',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/10.mp3', 'imageSrc': '/images/nuestras_canciones/10.jpg' }
        },
        {
          'id': 10,
          'placeholder': 'Cafe Tacuba - Eres',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/11.mp3', 'imageSrc': '/images/nuestras_canciones/11.jpg' }
        },
        {
          'id': 11,
          'placeholder': 'Sebastian Yatra - Todo lo que siento',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/12.mp3', 'imageSrc': '/images/nuestras_canciones/12.jpg' }
        },
        {
          'id': 12,
          'placeholder': 'TINI, Nacho - Te Quiero Más',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/13.mp3', 'imageSrc': '/images/nuestras_canciones/13.jpg' }
        },
        {
          'id': 13,
          'placeholder': 'Bombai - Solo si es contigo',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/14.mp3', 'imageSrc': '/images/nuestras_canciones/14.jpeg' }
        },
        {
          'id': 14,
          'placeholder': 'Camilo Echeverry - Medialuna',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/15.mp3', 'imageSrc': '/images/nuestras_canciones/15.jpg' }
        },
        {
          'id': 15,
          'placeholder': 'Artic Monkeys - I wanna be yours',
          'component': 'SoundElement',
          options: { 'src': '/audio/nuestras_canciones/16.mp3', 'imageSrc': '/images/nuestras_canciones/16.jpg' }
        }
      ],
      cols: 4
    }
  },
  components: {
    Gallery
  }
}

</script>
