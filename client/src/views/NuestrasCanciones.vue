<template>
  <div id="nuestras-canciones">
    <p>{{ descripcion }}</p>
    <gallery :cols="cols" :elements="elements"/>
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'nuestras-canciones',
  data () {
    return {
      descripcion: 'Nuestras canciones',
      elements: [
        {
          'id': 0,
          'placeholder': '1',
          'component': 'SoundElement',
          options: { 'src': '/audio/1.mpeg', 'imageSrc': '/images/1.jpg' }
        },
        {
          'id': 1,
          'placeholder': '2',
          'component': 'SoundElement',
          options: { 'src': '/audio/2.mpeg', 'imageSrc': '/images/2.jpg' }
        },
        {
          'id': 3,
          'placeholder': '4',
          'component': 'SoundElement',
          options: { 'src': '/audio/3.mpeg', 'imageSrc': '/images/logo.png' }
        },
        {
          'id': 4,
          'placeholder': '5',
          'component': 'SoundElement',
          options: { 'src': '/audio/4.mpeg', 'imageSrc': '/images/4.jpg' }
        },
        {
          'id': 2,
          'placeholder': '3',
          'component': 'SoundElement',
          options: { 'src': '/audio/5.mpeg', 'imageSrc': '/images/5.jpg' }
        },
        {
          'id': 5,
          'placeholder': '6',
          'component': 'SoundElement',
          options: { 'src': '/audio/6.mpeg', 'imageSrc': '/images/6.jpg' }
        },
        {
          'id': 6,
          'placeholder': '7',
          'component': 'SoundElement',
          options: { 'src': '/audio/7.mpeg', 'imageSrc': '/images/6.jpg' }
        }
      ],
      cols: 3
    }
  },
  components: {
    Gallery
  }
}

</script>
