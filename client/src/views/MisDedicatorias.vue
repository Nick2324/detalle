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
          options: { 'src': '/audio/1.mp3', 'imageSrc': '/images/1.jpg' }
        },
        {
          'id': 1,
          'placeholder': 'Gilberto santa rosa - Tú',
          'component': 'SoundElement',
          options: { 'src': '/audio/2.mp3', 'imageSrc': '/images/2.jpg' }
        },
        {
          'id': 2,
          'placeholder': 'Cafe Quijano - Me enamoras con todo',
          'component': 'SoundElement',
          options: { 'src': '/audio/3.mp3', 'imageSrc': '/images/3.jpg' }
        },
        {
          'id': 3,
          'placeholder': 'Luis Fonsi ft Juan Luis Guerra - Llegaste tú',
          'component': 'SoundElement',
          options: { 'src': '/audio/4.mp3', 'imageSrc': '/images/4.jpg' }
        },
        {
          'id': 4,
          'placeholder': 'Amy Winehouse - Moody´s mood for love',
          'component': 'SoundElement',
          options: { 'src': '/audio/5.mp3', 'imageSrc': '/images/5.jpg' }
        },
        {
          'id': 5,
          'placeholder': 'Rozalen - Comiendote a Besos',
          'component': 'SoundElement',
          options: { 'src': '/audio/6.mp3', 'imageSrc': '/images/6.jpg' }
        },
        {
          'id': 6,
          'placeholder': 'Juan Luis Guerra - Mi bendición',
          'component': 'SoundElement',
          options: { 'src': '/audio/7.mp3', 'imageSrc': '/images/7.jpg' }
        },
        {
          'id': 7,
          'placeholder': 'Maná - Bendita tu luz',
          'component': 'SoundElement',
          options: { 'src': '/audio/8.mp3', 'imageSrc': '/images/8.jpg' }
        },
        {
          'id': 8,
          'placeholder': 'Monocordio - Siempre te busqué',
          'component': 'SoundElement',
          options: { 'src': '/audio/9.mp3', 'imageSrc': '/images/9.jpg' }
        },
        {
          'id': 9,
          'placeholder': 'Manuel Mijares - Para amarnos más',
          'component': 'SoundElement',
          options: { 'src': '/audio/10.mp3', 'imageSrc': '/images/10.jpg' }
        },
        {
          'id': 10,
          'placeholder': 'Just the way you are - Bruno Mars',
          'component': 'SoundElement',
          options: { 'src': '/audio/11.mp3', 'imageSrc': '/images/11.jpg' }
        },
        {
          'id': 11,
          'placeholder': 'I won\'t give up - Jason Mraz',
          'component': 'SoundElement',
          options: { 'src': '/audio/12.mp3', 'imageSrc': '/images/12.jpg' }
        },
        {
          'id': 12,
          'placeholder': '(Everything I do) I do it for you - Bryan Adams',
          'component': 'SoundElement',
          options: { 'src': '/audio/13.mp3', 'imageSrc': '/images/13.png' }
        },
        {
          'id': 13,
          'placeholder': 'Amor completo - Mon Laferte',
          'component': 'SoundElement',
          options: { 'src': '/audio/14.mp3', 'imageSrc': '/images/14.jpg' }
        },
        {
          'id': 14,
          'placeholder': 'Natalino - Desde que te vi',
          'component': 'SoundElement',
          options: { 'src': '/audio/15.mp3', 'imageSrc': '/images/15.jpg' }
        },
        {
          'id': 15,
          'placeholder': 'Sigues siendo tú - Andres de Leon',
          'component': 'SoundElement',
          options: { 'src': '/audio/16.mp3', 'imageSrc': '/images/16.jpg' }
        }
        /*{
          'id': 0,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/1.jpg' }
        },
        {
          'id': 1,
          'placeholder': '2',
          'component': 'ImageElement',
          options: { 'src': '/images/2.jpg' }
        },
        {
          'id': 3,
          'placeholder': '4',
          'component': 'ImageElement',
          options: { 'src': '/images/logo.png', 'text': 'prueba del texto hijo de su mama' }
        },
        {
          'id': 4,
          'placeholder': '5',
          'component': 'ImageElement',
          options: { 'src': '/images/4.jpg' }
        },
        {
          'id': 2,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/6.jpg' }
        },
        {
          'id': 5,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/7.jpg' }
        },
        {
          'id': 6,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/8.jpg' }
        },
        {
          'id': 7,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/9.jpg' }
        },
        {
          'id': 8,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/10.jpg' }
        },
        {
          'id': 9,
          'placeholder': '3',
          'component': 'ImageElement',
          options: { 'src': '/images/5.jpg' }
        }*/
      ]
    }
  },
  components: {
    Gallery
  }
}

</script>
