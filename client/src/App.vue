<template>
  <div id="app">
    <detalle-menu />
  </div>
</template>

<style>
.thumbnail {
  display: block;
  width: 100%;
  height: auto;
}

html, body{
  height: 100%;
  width: 100%;
}

p, h1 {
  font-family: system-ui;
}
</style>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  width: 100%;
}
</style>

<script>
// @ is an alias to /src
import Vue from 'vue'
import Menu from '@/components/menu/Menu.vue'
import ComponentUtil from '@/components/util/ComponentUtil.vue'
import BootstrapVue from 'bootstrap-vue'
import html2canvas from 'html2canvas'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.mixin({
  methods: {
    html2canvas: html2canvas
  }
})
Vue.mixin(ComponentUtil)
Vue.use(BootstrapVue)

export default {
  name: 'root',
  components: {
    'detalle-menu': Menu
  }
}
</script>
