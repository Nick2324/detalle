<script>
export default {
  methods: {
    importDynamicComponent: (path, component) => import(
      (path.endsWith('/') ? path : path + '/') +
      component.replace(/-[a-z]/i, (a) => a[1].toUpperCase) + '.vue')
  }
}
</script>
