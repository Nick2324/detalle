<template>
  <div id="me-inspiras">
    <p>{{ descripcion }}</p>
    <gallery :cols="cols" :elements="elements" />
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'me-inspiras',
  data () {
    return {
      descripcion: 'Me inspiras',
      cols: 1,
      /* elements: [
        {
          'id': 0,
          'placeholder': '1',
          'component': 'TextElement',
          options: { 'src': 'https://stackoverflow.com/questions/20498831/refused-to-display-in-a-frame-because-it-set-x-frame-options-to-sameorigin' }
        },
        {
          'id': 1,
          'placeholder': '2',
          'component': 'TextElement',
          options: { 'src': 'https://webdesign.tutsplus.com/tutorials/getting-creative-with-the-google-maps-api--webdesign-13380' }
        },
        {
          'id': 2,
          'placeholder': '4',
          'component': 'TextElement',
          options: { 'src': 'https://www.npmjs.com/package/css-loader' }
        },
        {
          'id': 3,
          'placeholder': '5',
          'component': 'TextElement',
          options: { 'src': 'https://bootstrap-vue.js.org/docs/components/image/' }
        }
      ] */
      elements: [
        {
          'id': 0,
          'placeholder': '1',
          'component': 'TextElement',
          options: { 'text': 'prueba 1' }
        },
        {
          'id': 1,
          'placeholder': '2',
          'component': 'TextElement',
          options: { 'text': 'prueba 2' }
        },
        {
          'id': 2,
          'placeholder': '4',
          'component': 'TextElement',
          options: { 'text': 'prueba 3333333333333</br>3333333333333</br>' }
        },
        {
          'id': 3,
          'placeholder': '5',
          'component': 'TextElement',
          options: { 'text': 'prueba 4' }
        }
      ]
    }
  },
  components: {
    Gallery
  }
}

</script>
