<template>
  <div id="nuestros-momentos">
    <p>{{ descripcion }}</p>
    <gallery :elements="elements" :cols="cols" />
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'nuestros-momentos',
  data () {
    return {
      descripcion: 'Nuestros momentos',
      cols: 4,
      elements: [
        {
          'id': 0,
          'placeholder': '1',
          'component': 'VideoElement',
          options: { 'src': '/video/1.mp4', 'imageSrc': '/images/1.jpg' }
        },
        {
          'id': 1,
          'placeholder': '2',
          'component': 'VideoElement',
          options: { 'src': '/video/2.mp4', 'imageSrc': '/images/2.jpg' }
        },
        {
          'id': 3,
          'placeholder': '4',
          'component': 'VideoElement',
          options: { 'src': '/video/3.mp4', 'imageSrc': '/images/logo.png' }
        },
        {
          'id': 4,
          'placeholder': '5',
          'component': 'VideoElement',
          options: { 'src': '/video/4.mp4', 'imageSrc': '/images/4.jpg' }
        },
        {
          'id': 2,
          'placeholder': '3',
          'component': 'VideoElement',
          options: { 'src': '/video/5.mp4', 'imageSrc': '/images/5.jpg' }
        }
      ]
    }
  },
  components: {
    Gallery
  }
}

</script>
