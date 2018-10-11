<template>
  <div id="mis-dedicatorias">
    <p>{{ descripcion }}</p>
    <gallery :elements="elements" :cols="cols" />
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'mis-dedicatorias',
  data () {
    return {
      cols: 3,
      descripcion: 'Mis dedicatorias',
      elements: [
        {
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
        }
      ]
    }
  },
  components: {
    Gallery
  }
}

</script>
