<template>
<div>
  <div class="box box-default color-palette-box">
    <div class="box-header with-border">
      <h3 class="box-title"><i class="fa fa-list-alt"></i> Market availability watch lists</h3>
      <div class="box-default pull-right">
        <button type="button" class="btn btn-default margin-r-5" v-on:click="newList()"><i class="fa fa-plus-square "></i> Add market watch list</button>
      </div>

    </div>
    <div class="box-body">
      <table class="table table-striped">
        <tbody>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price Filter %</th>
          <th>Contents</th>
        </tr>
        <tr v-for="watchList in watchLists">
          <td><a v-bind:href="'/market-watch-lists/' + watchList.id" >{{watchList.name}}</a></td>
          <td>{{watchLists.items_count}}</td>
          <td>
            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Copy contents to clipboard"><i class="fa fa-copy"></i></button>
            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Edit List" v-on:click="$router.push('/item-lists/' + itemlist.id)"><i class="fa fa-edit"></i></button>
            <button type="button" class="btn text-red btn-box-tool" data-toggle="tooltip" title="Delete List"><i class="fa fa-remove"></i></button>
          </td>
        </tr>
        </tbody></table>
    </div>
  </div>
</div>
</template>
<script>
import {services} from '../vuex/api'
export default {
  name: 'Market_WatchLists',
  data () {
    return {
      watchLists: []
    }
  },
  methods: {
    newList: function () {
      this.$router.push('/market-watch-lists/new')
    }
  },
  mounted () {
    services.market_watch_lists.read({}, data => {
      this.watchLists = data
    })
  }
}
</script>
