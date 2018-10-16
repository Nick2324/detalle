<template>
  <div>
    <b-carousel 
      id="carousel"
      class="carousel"
      controls
      indicators
      background="#ababab"
      :interval="4000"
      img-width="300"
      img-height="300"
      v-model="slide"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
    <b-carousel-slide v-for="(slide, i) in slides" :key="i"
      :caption="slide.caption"
      :text="slide.text"
      :img-src="slide.src"
    />
    </b-carousel>
  </div>
</template>

<style scoped>
.carousel {
  text-shadow: 1px 1px 2px #333;
}
</style>

<script>
export default {
  props: { slides: Array },
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>