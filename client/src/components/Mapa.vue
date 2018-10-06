<template>
  <div id="mapa" ref="mapa"></div>
</template>

<style>
#mapa {
  height: 100%;
}
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

<script>
export default {
  name: 'mapa',
  props: ['options'],
  data: function () {
    return {
      'added': false,
      'vueGMap': null,
      'API_KEY': 'AIzaSyBlIsK8tcgtkt_X1CiIBBaURVnh1evsqm0'
    }
  },
  mounted () {
    if (!this.added) {
      this.createGoogleMaps().then(this.initGoogleMaps, this.googleMapsFailedToLoad)
    }
  },
  methods: {
    initGoogleMaps: function () {
      console.log(this.options)
      this.vueGMap = new google.maps.Map(this.$refs.mapa, this.options)
      this.added = true
    },
    googleMapsFailedToLoad: function (error) {
      console.log(error)
    },
    createGoogleMaps: function () {
      return new Promise((resolve, reject) => {
        let gmap = document.createElement('script')
        gmap.src = `https://maps.googleapis.com/maps/api/js?key=${this.API_KEY}`
        gmap.type = 'text/javascript'
        gmap.onload = resolve
        gmap.onerror = reject
        document.body.appendChild(gmap)
      })
    }
  }
}
</script>
