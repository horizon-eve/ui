<template>
  <div id="app">
    <component :is="layout"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    layout () {
      return (this.$route.meta.layout || 'default') + '-layout'
    }
  }
}
</script>

<style>

</style>
