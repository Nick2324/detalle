<template>
  <div id="app">
    <detalle-menu />
  </div>
</template>

<style>
.thumbnail {
  max-width: 100px;
  max-height: 100px;
}
</style>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<script>
// @ is an alias to /src
import Vue from 'vue'
import Menu from '@/components/menu/Menu.vue'
import ComponentUtil from '@/components/util/ComponentUtil.vue'
import BootstrapVue from 'bootstrap-vue'
import VueHtml2Canvas from 'vue-html2canvas'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueHtml2Canvas);
Vue.mixin(ComponentUtil)
Vue.use(BootstrapVue)

export default {
  name: 'root',
  components: {
    'detalle-menu': Menu
  }
}
</script>
