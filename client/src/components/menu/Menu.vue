<template>
<div class="menu">
  <div id="nav">
    <a @click="toggle" href="#">&#9776;</a>
    <div id="sidenav" v-bind:class="classes">
      <router-link v-for="menu in menus" :key="menu.id" v-bind:to="menu.to">
        {{menu.nombre}}
      </router-link>
    </div>
    <router-view/>
  </div>
</div>
</template>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.open-sidenav{
  font-size:30px;cursor:pointer
}

body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

.sidenav-opened{
  width:0px;
}

.sidenav-closed{
  width:250px;
}
</style>

<script>

export default {
  name: 'detalle-menu',
  // props: ["menus"],
  data () {
    return {
      closed: false,
      menus: [
        { nombre: 'Nuestras rutas', id: 1, to: '/rutas' },
        { nombre: 'Nuestros momentos', id: 2, to: '/nuestros-momentos' },
        { nombre: 'Nuestras canciones', id: 3, to: '/nuestras-canciones' },
        { nombre: 'Mis dedicatorias', id: 4, to: '/mis-dedicatorias' },
        { nombre: 'Me inspiras...', id: 5, to: '/me-inspiras' }
      ]
    }
  },
  computed: {
    classes () {
      return {
        'sidenav-opened': !!this.closed,
        'sidenav-closed': !this.closed,
        'sidenav': true,
        'text-center': true
      }
    }
  },
  methods: {
    toggle () {
      this.closed = !this.closed
    }
  }
}
</script>
