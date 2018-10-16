<template>
  <div id="mapa" ref="mapa" class="text-center"></div>
</template>

<style scoped>
#mapa {
  height: 600px;
  width: 100%;
  float: right;
  margin: auto;
}

.infoWindow {
  max-width: 300px;
  max-height: 300px;
}
</style>

<script>

import Vue from 'vue'
import Carousel from '@/components/bootstrap/Carousel.vue'

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
    construirOptionsInfoWindow (info) {
      let options = {}
      options.content = info.descripcion
      if (info.imagen) {
        options.content = `<div class="infoWindow"><article class="card"><img src="${info.imagen}"  class="card-img-top img-thumbnail img-fluid"/><div class="card-body"><p class="card-text">${info.descripcion}</p></div></article></div>`
      } else if(info.galeria) {
        let id = Math.floor(Math.random() * 100);
        options.content = `<div id="${id}" class="infoWindow" />`
        options.domready = function () {
          let div = document.getElementById(id)
          if(!div.hasChildNodes()){
            let ComponentClass = Vue.extend(Carousel)
            let carousel = new ComponentClass({propsData: info.galeria})
            carousel.$mount()
            div.appendChild(carousel.$el)
          }
        }
      }
      return options
    },
    cargarMarcadorSimple (marcador) {
      let marker = new google.maps.Marker({
        position: marcador.coordenadas,
        map: this.vueGMap,
        title: this.nombre
      })
      if (marcador.info) {
        let options = this.construirOptionsInfoWindow(marcador.info)
        let infowindow = new google.maps.InfoWindow(
          Object.assign({
            maxWidth: '300'
          }, options)
        )
        if (options.domready) {
          google.maps.event.addListener(infowindow, 'domready', options.domready)
        }
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
        let options = this.construirOptionsInfoWindow(marcador.info)
        let infowindow = new google.maps.InfoWindow(
          Object.assign({
            maxWidth: '300',
            position: marcador.coordenadas[Math.floor(marcador.coordenadas.length / 2)]
          }, options)
        )
        google.maps.event.addListener(poly, 'click', function () {
          infowindow.open(this.vueGMap)
        }.bind(this))
      }
    },
    googleMapsFailedToLoad: function (error) {
      console.error(error)
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
