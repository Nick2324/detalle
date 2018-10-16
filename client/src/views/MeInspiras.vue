<template>
  <div id="me-inspiras">
    <h1>{{ seccion }}</h1>
    <p v-html="descripcion"/>
    <gallery :cols="cols" :elements="elements" />
  </div>
</template>

<script>

import Gallery from '@/components/gallery/Gallery'

export default {
  name: 'me-inspiras',
  data () {
    return {
      descripcion: 'No alcanzan las palabras que conozco, describir los sentimientos y sensaciones que desatas en mi es complejo. Sin embargo, espero que mi poema te logre describir un poco de todo eso que yo siento por ti',
      cols: 1,
      seccion: 'Me inspiras',
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
          id: 0,
          placeholder: 'Poema',
          component: 'TextElement',
          options: { 'text': 'Tan sólo escuchar tu voz, me inspiras,</br>cual una musa, mi mente iluminas,</br>provocas mis deseos más ocultos,</br>me conquistas, me atraes y excitas,</br>hasta los extremos más infinitos.</br></br>Tú existes, tal único de mis anhelos,</br>atravesar nuestras cautas miradas,</br>con virtuoso centellear verdoso,</br>y un acentuado azul completo.</br></br>Tú me infundes y despiertas,</br>miles de impulsos en mi cuerpo</br>que logran serenar, el tímido,</br>desnudarse de nuestras almas.</br></br>Me inspiras en cada recuerdo,</br>colmado de nuestro cariño,</br>tan anhelado y ambicionado,</br>en aquel lugar, único y mágico.</br></br>Desencadenas en mi cuerpo,</br>sensaciones que me invaden,</br>que colman de amor mi pensamiento,</br>y mi alma aplacan y complacen.</br></br>De imágenes pueblas mis sueños,</br>trastornas mis pensamientos,</br>con imperecederos placeres,</br>que de ti me llenas y fecundas.</br></br>Estimulas, que mi corazón pueda,</br>y merezca poseerte en su vida,</br>latiendo al ritmo y cadencia,</br>que suena una hermosa melodía.</br></br>Mis vacíos pueblas de emociones,</br>colmas de nostalgias y pasiones,</br>mi cuerpo y alma alimentas,</br>con tus atributos y esencias.</br></br>Me infundes mis convicciones,</br>con tu voz, tu tacto, tus besos,</br>tus miradas y tus abrazos,</br>en mí han resistido tatuados.</br></br>Son reminiscencia que intacta,</br>en mí señale, la entrada de tú huella,</br>he intrínsecamente, en mí exceda,</br>alimentando en mí, tú presencia.' }
        }
      ]
    }
  },
  components: {
    Gallery
  }
}

</script>
