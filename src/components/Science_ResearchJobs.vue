<template>
<div>
  <div class="box box-default color-palette-box">
    <div class="box-header with-border">
      <h3 class="box-title"><i class="fa fa-users"></i> My Characters</h3>
      <div class="box-default pull-right">
        <button type="button" class="btn btn-default margin-r-5" v-on:click="newList()"><i class="fa fa-user-plus "></i> Add Character</button>
      </div>

    </div>
    <div class="box-body">
      <row>
        <va-character-science-job v-for="color in colors[1]"
                                  :color="color">
        </va-character-science-job>
      </row>
    </div>
  </div>
</div>
</template>

<script>
import VAColorPaletteSet from 'components/VAColorPaletteSet.vue'
// eslint-disable-next-line camelcase
import Science_ResearchJob from 'components/Science_ResearchJob.vue'

export default {
  name: 'General',
  data () {
    return {
      colors: [
        ['Primary', 'Info', 'Success', 'Warning', 'Danger', 'Gray', 'aa'],
        ['Navi', 'Teal', 'Purple', 'Orange', 'Maroon', 'Black', 'bb']
      ]
    }
  },
  created () {

  },
  components: {
    'va-color-palette-set': VAColorPaletteSet,
    'va-character-science-job': Science_ResearchJob
  }
}
</script>

<style scoped>

</style>
