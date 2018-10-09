<template>
  <div id="mapa" ref="mapa" class="text-center"></div>
</template>

<style>
#mapa {
  height: 600px;
  width: 600px;
  float: right;
  margin: auto;
}
</style>

<script>
export default {
  name: 'mapa',
  props: ['options'],
  data: function () {
    return {
      'vueGMap': null,
      'API_KEY': 'AIzaSyBlIsK8tcgtkt_X1CiIBBaURVnh1evsqm0'
    }
  },
  mounted () {
    this.createGoogleMaps().then(this.initGoogleMaps, this.googleMapsFailedToLoad)
  },
  methods: {
    initGoogleMaps: function () {
      this.vueGMap = new google.maps.Map(this.$refs.mapa, this.options)
    },
    googleMapsFailedToLoad: function (error) {
      console.log(error)
    },
    createGoogleMaps: function () {
      return new Promise((resolve, reject) => {
        if (!document.getElementById('script-google-maps')) {
          let gmap = document.createElement('script')
          gmap.id = 'script-google-maps'
          gmap.src = `https://maps.googleapis.com/maps/api/js?key=${this.API_KEY}`
          gmap.type = 'text/javascript'
          gmap.onload = resolve
          gmap.onerror = reject
          document.body.appendChild(gmap)
        } else {
          resolve()
        }
      })
    }
  }
}
</script>
