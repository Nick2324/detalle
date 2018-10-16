<template>
  <div id="nuestros-momentos">
    <h1>{{ titulo }}</h1>
    <p v-html="descripcion" />
    <gallery :elements="elements" :cols="cols" />
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'nuestros-momentos',
  data () {
    return {
      titulo: 'Nuestros momentos',
      descripcion: 'Sé que sólo al verlas las entenderás...',
      cols: 4,
      elements: [
        {
          'id': 0,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/1.jpg' }
        },
        {
          'id': 1,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/2.jpg' }
        },
        {
          'id': 2,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/3.jpg' }
        },
        {
          'id': 3,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/4.jpg' }
        },
        {
          'id': 4,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/5.jpg' }
        },
        {
          'id': 5,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/6.jpg' }
        },
        {
          'id': 6,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/7.jpg' }
        },
        {
          'id': 7,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/8.jpg' }
        },
        {
          'id': 8,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/9.jpg' }
        },
        {
          'id': 9,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/10.jpg' }
        },
        {
          'id': 10,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/11.jpg' }
        },
        {
          'id': 11,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/12.jpg' }
        },
        {
          'id': 12,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/13.jpg' }
        },
        {
          'id': 13,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/14.jpg' }
        },
        {
          'id': 14,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/15.jpg' }
        },
        {
          'id': 15,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/16.jpg' }
        },
        {
          'id': 16,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/17.jpg' }
        },
        {
          'id': 17,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/18.jpg' }
        },
        {
          'id': 18,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/19.jpg' }
        },
        {
          'id': 19,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/20.jpg' }
        },
        {
          'id': 20,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/21.jpg' }
        },
        {
          'id': 21,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/22.jpg' }
        },
        {
          'id': 22,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/23.jpg' }
        },
        {
          'id': 23,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/24.jpg' }
        },
        {
          'id': 24,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/25.jpg' }
        },
        {
          'id': 25,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/26.jpg' }
        },
        {
          'id': 26,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/27.jpg' }
        },
        {
          'id': 27,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/28.jpg' }
        },
        {
          'id': 28,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/29.jpg' }
        },
        {
          'id': 29,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/30.jpg' }
        },
        {
          'id': 30,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/31.jpg' }
        },
        {
          'id': 31,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/32.jpg' }
        },
        {
          'id': 32,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/33.jpg' }
        },
        {
          'id': 33,
          'placeholder': '1',
          'component': 'ImageElement',
          options: { 'src': '/images/momentos/34.jpg' }
        }
      ]
    }
  },
  components: {
    Gallery
  }
}

</script>
