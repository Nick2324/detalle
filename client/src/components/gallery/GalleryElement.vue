<template>
  <div id="gallery-element">
    {{id}} - {{placeholder}}
  </div>
</template>

<script>

export default {
  name: 'gallery-element',
  props: [ 'id', 'placeholder' ]
}

</script>
