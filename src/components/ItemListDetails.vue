<template>
  <va-box
    :title="itemListName"
    :isBorder="false"
    widgetType=""
  >
    <div slot="content">
      <va-alert :dismissible="false" v-if="saved">
        <h4 slot="header">
          <i class="icon fa fa-check"></i> Saved {{itemList.name}}
        </h4>
      </va-alert>
      <va-input-group
        title="Name"
        vaId="itemListName"
        type="text"
        v-model="itemList.name"
        :class="{'has-error': !itemList.name || itemList.name.length === 0}"
        placeholder="Enter Item List Name"
      >
      </va-input-group>

      <va-input-group
        title="Items"
        vaId="itemListItems"
        type="hidden"
      >
        <div slot="before">
          <div class="box no-border" :class="{'has-error': itemList.items && itemList.items.length < 1}">
            <div class="box-header with-border">
              <div class="box-tools pull-left">
                <div class="input-group" style="width: 237px;">
                  <vue-bootstrap-typeahead
                    v-model="itemSearch"
                    :data="itemSuggestions"
                    placeholder="Search Item"
                    :serializer="s => s.type_name"
                    @hit="selectedItem = $event">
                  </vue-bootstrap-typeahead>
                  <div class="input-group-btn">
                    <button class="btn btn-default" :disabled="this.selectedItem === null" v-on:click="addSelectedItem()"><i class="fa  fa-plus-circle"></i></button>
                  </div>
                </div>
              </div>
              <div class="box-tools pull-right">
                <button type="button" class="btn btn-default" data-toggle="tooltip" title="Copy items to clipboard" v-clipboard:copy="itemsToEFT"><i class="fa  fa-copy"></i></button>
                <button type="submit" class="btn btn-default" data-toggle="tooltip" title="Import fit from clipboard" @click="openModal"><i class="fa fa-chevron-circle-down"></i></button>
                <button type="reset" class="btn btn-default text-red" data-toggle="tooltip" title="Remove items" v-on:click="itemList.items = []"><i class="fa  fa-remove"></i></button>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
              <ul class="products-list product-list-in-box">
                <li class="item" v-for="item in itemList.items">
                  <div class="product-img">
                    <img v-bind:src="`https://images.evetech.net/types/${item.id}/icon?size=32`" v-bind:alt="item.name"/>
                  </div>
                  <div class="product-info">
                    <span class="product-title">{{item.name}}</span>
                    <button class="btn text-red btn-box-tool pull-right" v-on:click="itemList.items.splice(itemList.items.indexOf(item), 1)"><i class="fa  fa-remove"></i></button>
                      <div class="input-group input-group-sm hidden-xs pull-right" :class="{'has-error':item.quantity < 1}" style="width: 110px;">
                        <div class="input-group-btn">
                          <button class="btn btn-box-tool" v-on:click="item.quantity -=1"><i class="fa  fa-minus"></i></button>
                        </div>
                        <input type="text" v-model="item.quantity" class="form-control">
                        <div class="input-group-btn">
                          <button class="btn btn-box-tool" v-on:click="item.quantity +=1"><i class="fa  fa-plus"></i></button>
                        </div>
                      </div>
                    <span class="product-description">
                        {{item.group}}
                    </span>
                  </div>
                </li>
                <!-- /.item -->
              </ul>
            </div>
          </div>
        </div>
      </va-input-group>
      <va-modal>
        <div slot="modal-content">
            <textarea class="form-control" rows="25" v-model="eftPaste" placeholder="Paste EFT text here"></textarea>
        </div>
      </va-modal>
    </div>
    <div slot="footer">
      <button type="button" class="btn btn-default" v-on:click="saveItemList">Save</button>
      <button type="button" class="btn btn-default" v-on:click="$router.go(-1)">Cancel</button>
    </div>
  </va-box>
</template>

<script>
  import _ from 'underscore'
  import VABox from '../widgets/VABox'
  import VAInputGroup from '../components/VAInputGroup'
  import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
  import VAAlert from '../components/VAAlert.vue'
  import Modal from '../components/Modal.vue'

  import {services} from '../vuex/api'

  export default {
    name: 'general-elements',
    data: () => ({
      itemList: {
        id: '',
        name: '',
        items: [],
        items_count: 0
      },
      itemSearch: '',
      selectedItem: null,
      itemSuggestions: [],
      saved: false,
      eftPaste: ''
    }),
    methods: {
      reset () {
        Object.assign(this.$data, this.$options.data())
        this.saved = false
      },
      async searchItems (query) {
        await services.item_types.read({type_name: `like=${query}`}, function (data) {
          this.itemSuggestions = data
        })
      },
      addSelectedItem () {
        this.itemList.items.push({
          id: this.selectedItem.type_id,
          name: this.selectedItem.type_name,
          group: this.selectedItem.group_name,
          quantity: 1
        })
        this.selectedItem = null
        this.itemSearch = null
        this.itemSuggestions = []
      },
      fetchItemList: function () {
        let listId = this.itemList.id || this.$route.params.listId
        if (listId && listId !== 'new') {
          services.itemlists.get(listId, data => {
            this.itemList = data
          })
        } else {
          this.reset()
        }
        this.saved = false
      },
      saveItemList: function () {
        let listId = this.itemList.id || this.$route.params.listId
        if (listId && listId !== 'new') {
          services.itemlists.update(this.itemList, () => {
            this.saved = true
          })
        } else {
          delete this.itemList.id
          services.itemlists.create(this.itemList, id => {
            this.itemList.id = id
            this.saved = true
          })
        }
      },
      openModal () {
        this.eftPaste = null
        this.$bus.$emit('modal-open', {
          title: 'EFT Import',
          type: 'modal-primary',
          confirmText: 'Confirm',
          cancelText: 'Cancel',
          confirmBefore: this.importEft,
          confirmAfter: () => {},
          cancelBefore: () => {},
          cancelAfter: () => {}
        })
      },
      importEft: function () {
        if (this.eftPaste) {
          let lines = this.eftPaste.split('\n')
          if (lines.length > 0) {
            let items = {}
            let itemListName = null
            lines.forEach(l => {
              if (l) {
                l = l.trim()
              }
              if (!l) {
                return
              }
              let names = []
              if (l.startsWith('[Empty')) {
                return // Skip empty slots
              }
              if (l.startsWith('[')) { // First Line
                let found = l.match(/^\[(.+)\s*,\s*(.+)\]\s*$/)
                if (found) {
                  names.push(found[1])
                  itemListName = `${found[1]} - ${found[2]}`
                } else {
                  names.push(l.replace(/\[|,.*$/g, ''))
                }
              } else {
                l.split(',').forEach(n => {
                  names.push(n.trim())
                })
              }
              names.forEach(n => {
                let name = n
                let q = 1
                let found = n.match(/(^.+)\s+x(\d+)\s*$/)
                if (found) {
                  name = found[1]
                  q = parseInt(found[2])
                }
                if (!items[name]) {
                  items[name] = {
                    name: name,
                    quantity: q
                  }
                } else {
                  items[name].quantity += q
                }
              })
            })
            const query = Object.keys(items).map(n => `"${n}"`).join(',')
            services.item_types.read({type_name: `in=${query}`}, data => {
              let refined = []
              data.forEach(i => {
                let item = items[i.type_name]
                if (item) {
                  item.id = i.type_id
                  item.group = i.group_name
                }
                refined.push(item)
              })
              this.itemList.items = refined
              if (itemListName) {
                this.itemList.name = itemListName
              }
            })
          }
        }
      }
    },
    mounted () {
      this.fetchItemList()
    },
    computed: {
      itemListName: function () {
        return this.itemList.name ? this.itemList.name : 'New Item List'
      },
      itemsToEFT: function () {
        return this.itemList.items.map(i => `${i.name} x${i.quantity}`).join('\n')
      }
    },
    watch: {
      itemSearch: _.debounce(function (query) { this.searchItems(query) }, 500),
      'itemList.items': {
        handler () { this.itemList.items_count = this.itemList.items.length },
        deep: true
      }
    },
    components: {
      'va-box': VABox,
      'va-input-group': VAInputGroup,
      'vue-bootstrap-typeahead': VueBootstrapTypeahead,
      'va-alert': VAAlert,
      'va-modal': Modal
    }
  }
</script>
