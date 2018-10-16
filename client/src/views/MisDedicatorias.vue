<template>
  <div id="mis-dedicatorias">
    <h1>{{ titulo }}</h1>
    <p v-html="descripcion" />
    <gallery :elements="elements" :cols="cols" />
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'mis-dedicatorias',
  data () {
    return {
      titulo: 'Mis dedicatorias',
      cols: 4,
      descripcion: 'Son estas canciones las que deseo que esculques con tu gran oido, a ver si tal vez encuentras el amor que yo por ti respiro',
      elements: [
        {
          'id': 0,
          'placeholder': 'Choquibtown, Nicky Jam - De ti Enamorado',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/1.mp3', 'imageSrc': '/images/canciones/1.jpg' }
        },
        {
          'id': 1,
          'placeholder': 'Gilberto santa rosa - Tú',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/2.mp3', 'imageSrc': '/images/canciones/2.jpg' }
        },
        {
          'id': 2,
          'placeholder': 'Cafe Quijano - Me enamoras con todo',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/3.mp3', 'imageSrc': '/images/canciones/3.jpg' }
        },
        {
          'id': 3,
          'placeholder': 'Luis Fonsi ft Juan Luis Guerra - Llegaste tú',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/4.mp3', 'imageSrc': '/images/canciones/4.jpg' }
        },
        {
          'id': 4,
          'placeholder': 'Amy Winehouse - Moody´s mood for love',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/5.mp3', 'imageSrc': '/images/canciones/5.jpg' }
        },
        {
          'id': 5,
          'placeholder': 'Rozalen - Comiendote a Besos',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/6.mp3', 'imageSrc': '/images/canciones/6.jpg' }
        },
        {
          'id': 6,
          'placeholder': 'Juan Luis Guerra - Mi bendición',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/7.mp3', 'imageSrc': '/images/canciones/7.jpg' }
        },
        {
          'id': 7,
          'placeholder': 'Maná - Bendita tu luz',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/8.mp3', 'imageSrc': '/images/canciones/8.jpg' }
        },
        {
          'id': 8,
          'placeholder': 'Monocordio - Siempre te busqué',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/9.mp3', 'imageSrc': '/images/canciones/9.jpg' }
        },
        {
          'id': 9,
          'placeholder': 'Manuel Mijares - Para amarnos más',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/10.mp3', 'imageSrc': '/images/canciones/10.jpg' }
        },
        {
          'id': 10,
          'placeholder': 'Just the way you are - Bruno Mars',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/11.mp3', 'imageSrc': '/images/canciones/11.jpg' }
        },
        {
          'id': 11,
          'placeholder': 'I won\'t give up - Jason Mraz',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/12.mp3', 'imageSrc': '/images/canciones/12.jpg' }
        },
        {
          'id': 12,
          'placeholder': '(Everything I do) I do it for you - Bryan Adams',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/13.mp3', 'imageSrc': '/images/canciones/13.png' }
        },
        {
          'id': 13,
          'placeholder': 'Amor completo - Mon Laferte',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/14.mp3', 'imageSrc': '/images/canciones/14.jpg' }
        },
        {
          'id': 14,
          'placeholder': 'Natalino - Desde que te vi',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/15.mp3', 'imageSrc': '/images/canciones/15.jpg' }
        },
        {
          'id': 15,
          'placeholder': 'Sigues siendo tú - Andres de Leon',
          'component': 'SoundElement',
          options: { 'src': '/audio/canciones/16.mp3', 'imageSrc': '/images/canciones/16.jpg' }
        }
        /*{
          'id': 0,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/canciones/1.jpg' }
        },
        {
          'id': 1,
          'placeholder': '2',
          'component': 'ImageElement',
          options: { 'src': '/images/canciones/2.jpg' }
        },
        {
          'id': 3,
          'placeholder': '4',
          'component': 'ImageElement',
          options: { 'src': '/images/canciones/logo.png', 'text': 'prueba del texto hijo de su mama' }
        },
        {
          'id': 4,
          'placeholder': '5',
          'component': 'ImageElement',
          options: { 'src': '/images/canciones/4.jpg' }
        },
        {
          'id': 2,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/canciones/6.jpg' }
        },
        {
          'id': 5,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/canciones/7.jpg' }
        },
        {
          'id': 6,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/canciones/8.jpg' }
        },
        {
          'id': 7,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/canciones/9.jpg' }
        },
        {
          'id': 8,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/canciones/10.jpg' }
        },
        {
          'id': 9,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/canciones/5.jpg' }
        }*/
      ]
    }
  },
  components: {
    Gallery
  }
}

</script>
