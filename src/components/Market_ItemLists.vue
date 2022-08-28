<template>
  <div class="box box-default">
    <div class="box-header with-border">
      <h3 class="box-title"><i class="fa fa-list"></i> My Item Lists</h3>
    </div>
    <div class="box-header with-border">
      <div class="box-default pull-left">
        <button type="button" class="btn btn-default margin-r-5" v-on:click="newList()"><i class="fa fa-plus-circle "></i> Add New</button>
        <button type="button" class="btn btn-default margin-r-5" data-widget="collapse"><i class="fa fa-chevron-circle-down"></i> Import EFT</button>
        <button type="button" class="btn btn-default margin-r-5" :disabled="itemLists.length === 0" data-widget="collapse"><i class="fa fa-times-circle-o"></i> Remove All</button>
      </div>
    </div>

    <div class="box-body">
      <table class="table table-striped">
        <tbody>
        <tr>
          <th>List Name</th>
          <th>Number if items</th>
          <th>Actions</th>
        </tr>

        <tr v-for="itemlist in itemLists">
          <td><a v-bind:href="'/item-lists/' + itemlist.id" >{{itemlist.name}}</a></td>
          <td>{{itemlist.items_count}}</td>
          <td>
            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Copy contents to clipboard"><i class="fa fa-copy"></i></button>
            <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Edit List" v-on:click="$router.push('/item-lists/' + itemlist.id)"><i class="fa fa-edit"></i></button>
            <button type="button" class="btn text-red btn-box-tool" data-toggle="tooltip" title="Delete List"><i class="fa fa-remove"></i></button>
          </td>
        </tr>
        </tbody></table>
    </div>

    <!-- /.box-body -->
    <div class="box-footer clearfix">
      <div class="pull-right">
        1-50/200
        <div class="btn-group">
          <button type="button" class="btn btn-default btn-sm"><i class="fa fa-chevron-left"></i></button>
          <button type="button" class="btn btn-default btn-sm"><i class="fa fa-chevron-right"></i></button>
        </div>
        <!-- /.btn-group -->
      </div>
    </div>
    <!-- /.box-footer -->
  </div>
</template>

<script>
  import {services} from '../vuex/api'
  export default {
    name: 'Market_ItemLists',
    data () {
      return {
        itemLists: []
      }
    },
    methods: {
      newList: function () {
        this.$router.push('/item-lists/new')
      }
    },
    mounted () {
      services.itemlists.read({limit: 200}, data => {
        this.itemLists = data
      })
    }
  }
</script>
