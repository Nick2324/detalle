<script>
export default {
  methods: {
    importDynamicComponent: (path, component) => import(
      (path.endsWith('/') ? path : path + '/') +
      component.replace(/-[a-z]/i, (a) => a[1].toUpperCase())
        .replace(/$[a-z]/i, (a) => a.toUpperCase()) + '.vue'),
    importMultipleDynComponents: function (path, components) {
      let returning = []
      this.elements.forEach(function (element) {
        returning.push(this.importDynamicComponent(path, element.component))
      }.bind(this))
      return returning
    }
  }
}
</script>
