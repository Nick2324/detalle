<template>
  <div id="mapa" ref="mapa" class="text-center"></div>
</template>

<style scoped>
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
  props: ['options', 'marcadores'],
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
    cargarMarcadores () {
      if (this.marcadores) {
        this.marcadores.forEach(function (marcador) {
          if (Array.isArray(marcador.coordenadas)) {
            this.cargarMarcadorForma(marcador)
          } else {
            this.cargarMarcadorSimple(marcador)
          }
        }.bind(this))
      }
    },
    initGoogleMaps: function () {
      this.vueGMap = new google.maps.Map(this.$refs.mapa, this.options)
      this.cargarMarcadores()
    },
    construirContenidoInfoWindow (info) {
      let contenido = info.descripcion
      if (info.imagen) {
        contenido = `<div><img src="${info.imagen}" /><p>${info.descripcion}</p></div>`
      }
      return contenido
    },
    cargarMarcadorSimple (marcador) {
      let marker = new google.maps.Marker({
        position: marcador.coordenadas,
        map: this.vueGMap,
        title: this.nombre
      })
      if (marcador.info) {
        let contenido = this.construirContenidoInfoWindow(marcador.info)
        let infowindow = new google.maps.InfoWindow({
          content: contenido
        })
        marker.addListener('click', function () {
          infowindow.open(this.vueGMap, marker)
        }.bind(this))
      }
    },
    cargarMarcadorForma (marcador) {
      let poly = new google.maps.Polygon({
        paths: marcador.coordenadas,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      })
      poly.setMap(this.vueGMap)
      if (marcador.info) {
        let contenido = this.construirContenidoInfoWindow(marcador.info)
        let infowindow = new google.maps.InfoWindow({
          content: contenido,
          position: marcador.coordenadas[Math.floor(marcador.coordenadas.length / 2)]
        })
        google.maps.event.addListener(poly, 'click', function () {
          infowindow.open(this.vueGMap)
        }.bind(this))
      }
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
