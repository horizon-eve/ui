<template>
  <div class="wrapper">
    <va-navibar></va-navibar>
    <va-slider :slideMenuItems="slideMenuItems"></va-slider>
    <va-content-wrap></va-content-wrap>
  </div>
</template>

<script>
  import VANaviBar from 'NaviBar.vue'
  import VASlider from 'Slider.vue'
  import VAContentWrap from 'ContentWrap.vue'
  import store from '../vuex/store.js'
  import slideMenuItems from '../lib/slideMenuItems.js'

  export default {
    data () {
      return {
        slideMenuItems: slideMenuItems
      }
    },
    created () {
      this.$store.dispatch('auth/init')
    },
    components: {
      'va-navibar': VANaviBar,
      'va-slider': VASlider,
      'va-content-wrap': VAContentWrap
    },
    store,
    computed: {
      layout () {
        return (this.$route.meta.layout || 'default') + '-layout'
      }
    }
  }
</script>
