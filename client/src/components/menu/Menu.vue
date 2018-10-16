<template>
<div class="menu d-flex d-flex-row">
  <div id="sidenav" :class="navClasses">
    <a @click="toggle" href="#" :class="linkClasses">&#9776;</a>
    <div 
      :ref="'menu-item-' + menu.id"
      :class="{'menu-item': true, 'rounded': true, 'menu-item-selected': menu.id == selectedItem}"
      v-for="menu in menus"
      :key="menu.id">
      <router-link :to="menu.to" @click.native="itemSelected(menu.id)">
        {{menu.nombre}}
      </router-link>
    </div>
  </div>
  <div id="menu-content" class="content flex-grow-1">
    <router-view/>
  </div>
</div>
</template>

<style scoped>
.menu {
  height: 100%;
}

.content {
  margin-top: 20px;
  margin-right: 10px;
  overflow: scroll;
}

.toggle-menu {
  position: inherited;
  text-align: right;
}

.toggle-close {
  position: fixed;
  transition: 0.7s;
}

.menu-item {
  background-color: #818181;
}

.menu-item:hover, .menu-item-selected {
  background-color: #FFFFFF;
  transition: 1s;
}

.menu-item:hover a, .menu-item:hover a:hover, .menu-item-selected a.router-link-exact-active {
  color: #818181;
  transition: none;
}

.sidenav {
  height: 100%;
  width: 0;
  top: 0;
  left: 0;
  background-color: #818181;
  overflow-x: hidden;
  padding-top: 10%;
  padding-left: 10%;
  margin-right: 3%;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
}

.sidenav a:hover {
  color: #2222;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

.sidenav-opened {
  width:250px;
  font-size:30px;
  transition: 0.7s;
}

.sidenav-closed {
  width:5px;
  transition: 0.7s;
}

.sidenav-closed a {
  color: #818181;
}

.sidenav-closed .menu-item-selected {
  background-color: #818181;
  transition: none;
}
.sidenav-opened .menu-item-selected {
  background-color: #FFFFFF;
  transition-delay: 0.7s;
}

.sidenav-opened a {
  color: #FFFFFF;
}
</style>

<script>

import router from '@/router.js'

export default {
  name: 'detalle-menu',
  // props: ["menus"],
  data () {
    return {
      closed: false,
      selectedItem: -1,
      menus: [
        { nombre: 'Mi amorcito...', id: 0, to: '/', selectedItem: true },
        { nombre: 'Nuestras rutas', id: 1, to: '/rutas' },
        { nombre: 'Nuestros momentos', id: 2, to: '/nuestros-momentos' },
        { nombre: 'Nuestras canciones', id: 3, to: '/nuestras-canciones' },
        { nombre: 'Mis dedicatorias', id: 4, to: '/mis-dedicatorias' },
        { nombre: 'Me inspiras...', id: 5, to: '/me-inspiras' }
      ]
    }
  },
  created () {
    this.menus.forEach((menuItem) => {
      if (menuItem.selectedItem) {
        this.selectedItem = menuItem.id
        router.push(menuItem.to)
      }
    });
  },
  computed: {
    navClasses () {
      return {
        'p-2': true,
        'sidenav-opened': !this.closed,
        'sidenav-closed': this.closed,
        'sidenav': true,
        'text-center': true,
        'rounded': true,
        'flex-grow-4': true
      }
    },
    linkClasses () {
      return {
        'toggle-close': this.closed,
        'toggle-menu': !this.closed
      }
    }
  },
  methods: {
    toggle () {
      this.closed = !this.closed
    },
    itemSelected (id) {
      this.selectedItem = id
    }
  }
}
</script>
