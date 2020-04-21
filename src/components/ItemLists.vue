<template>
  <div class="box box-default">
    <div class="box-header with-border">
      <div class="box-tools pull-left">
        <button type="button" class="btn btn-default" v-on:click="newList()"><i class="fa fa-plus-circle"></i> Add New</button>
        <button type="button" class="btn btn-default" data-widget="collapse"><i class="fa fa-chevron-circle-down"></i> Import EFT</button>
        <button type="button" class="btn btn-default" :disabled="itemLists.length === 0" data-widget="collapse"><i class="fa fa-times-circle-o"></i> Remove All</button>
      </div>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <div class="table-responsive">
        <table class="table no-margin">
          <thead>
          <tr>
            <th>List Name</th>
            <th>Number if items</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="itemlist in itemLists">
            <td><a v-bind:href="'/item-lists/' + itemlist.id" >{{itemlist.name}}</a></td>
            <td>{{itemlist.items_count}}</td>
            <td>
              <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Copy contents to clipboard"><i class="fa fa-copy"></i></button>
              <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Edit List" v-on:click="$router.push('/item-lists/' + itemlist.id)"><i class="fa fa-edit"></i></button>
              <button type="button" class="btn text-red btn-box-tool" data-toggle="tooltip" title="Delete List"><i class="fa fa-remove"></i></button>
              </td>
          </tr>
          </tbody>
        </table>
      </div>
      <!-- /.table-responsive -->
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
  import axios from 'axios'
  import config from '../config'
  export default {
    name: 'ItemLists',
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
      axios
        .get(`${config.API_BASE_URL}/itemlist`, {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'x-hr-authtoken': this.$store.state.auth.auth_token
          }
        })
        .then(response => (this.itemLists = response.data))
    }
  }
</script>
