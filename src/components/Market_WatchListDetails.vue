<template>
  <va-box
    :title="watchListName"
    :isBorder="false"
    widgetType=""
  >
    <div slot="content">
      <va-alert :dismissible="false" v-if="saved">
        <h4 slot="header">
          <i class="icon fa fa-check"></i> Saved {{watchList.name}}
        </h4>
      </va-alert>

      <va-input-group
        title="Watch list name"
        vaId="watchListName"
        type="text"
        v-model="watchList.name"
        :class="{'has-error': !watchList.name || watchList.name.length === 0}"
        placeholder="Enter Watch List Name">
      </va-input-group>
      <va-input-group
        title="Description"
        vaId="watchListDescription"
        type="text"
        v-model="watchList.description"
        placeholder="Enter Description">
      </va-input-group>
      <va-input-group
        title="Price Filter"
        vaId="watchListPriceFilter"
        type="text"
        v-model="watchList.price_filter"
        placeholder="Enter Price Filter">
      </va-input-group>

      <div class="row">
        <div class="col-md-3">
          <label>Pick item lists to watch</label>
          <select class="form-control" v-model="watchList.items" :multiple="true">
            <option v-for="(item,index) in this.itemLists" :data="item" v-bind:value="{itemlist_id: item.id, name: item.name, qty: 1}" :key="index">
              {{ item.id }} : {{ item.name }}
            </option>
          </select>
        </div>
      </div>
      <p> </p>

      <va-input-group
        title="Quantities"
        vaId="watchListItems"
        type="hidden">
        <div slot="before">
          <div class="box no-border" :class="{'has-error': watchList.items && watchList.items.length < 1}">
            <!-- /.box-header -->
            <div class="box-body">
              <ul class="products-list product-list-in-box">
                <li class="item" v-for="item in watchList.items">
                  <div class="col-md-3">
                    <span class="product-list-in-box">{{item.itemlist_id}}</span>
                    <span class="product-title">{{item.name}}</span>

                    <button class="btn text-red btn-box-tool pull-right" v-on:click="watchList.items.splice(watchList.items.indexOf(item), 1)"><i class="fa fa-remove"></i></button>
                      <div class="input-group input-group-sm hidden-xs pull-right" :class="{'has-error':item.qty < 1}" style="width: 110px;">
                        <div class="input-group-btn">
                          <button class="btn btn-box-tool" v-on:click="item.qty -=1"><i class="fa  fa-minus"></i></button>
                        </div>
                        <input type="text" v-model="item.qty" class="form-control">
                        <div class="input-group-btn">
                          <button class="btn btn-box-tool" v-on:click="item.qty +=1"><i class="fa  fa-plus"></i></button>
                        </div>
                      </div>

                  </div>
                </li>
                <!-- /.item -->
              </ul>
            </div>
          </div>
          <button type="button" class="btn btn-default" v-on:click="save">Save</button>
          <button type="button" class="btn btn-default" v-on:click="$router.go(-1)">Cancel</button>
        </div>
      </va-input-group>
    </div>
    <div slot="footer">
      <h4 v-if="this.allItems">Summary of all items in this watch list:</h4>
      <div v-for="item in allItems" class="col-lg-4 col-xs-6">
        <div class="info-box">
          <span class="info-box-icon" >
            <img :src="`https://images.evetech.net/types/${item.id}/icon?size=64`" v-bind:alt="item.name"/>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">{{item.name}}</span>
            <span class="badge bg-fuchsia">{{item.qty}}</span>
          </div>
        </div>
      </div>
    </div>
  </va-box>
</template>

<script>
  import VABox from '../widgets/VABox'
  import VAInputGroup from './VAInputGroup'
  import VAAlert from './VAAlert.vue'
  import {services} from '../vuex/api'

  export default {
    name: 'general-elements',
    data: () => ({
      watchList: {
        id: '',
        name: '',
        description: '',
        items: [],
        price_filter: 3.0
      },
      itemLists: [],
      saved: false
    }),
    methods: {
      reset () {
        Object.assign(this.$data, this.$options.data())
        this.saved = false
      },
      fetch: function () {
        let listId = this.watchList.id || this.$route.params.listId
        if (listId && listId !== 'new') {
          services.market_watch_lists.get(listId, (data) => {
            try {
              this.watchList = data
              this.watchList.items = data.items
              this.allItems // yes but it should be recalculated quickly
            } catch (error) {
              console.error('aaaa!', error)
            }
          })
        } else {
          this.reset()
        }
        this.saved = false
      },
      save: function () {
        let listId = this.watchList.id || this.$route.params.listId
        if (listId && listId !== 'new') {
          services.market_watch_lists.upsert(this.watchList, () => {
            this.saved = true
          })
        } else {
          delete this.watchList.id
          services.market_watch_lists.create(this.watchList, id => {
            this.watchList.id = id
            this.saved = true
          })
        }
      },
      fetchItemLists: function () {
        services.itemlists.read({}, (data) => {
          this.itemLists = data
        })
      }
    },
    mounted () {
      this.fetchItemLists()
      this.fetch()
    },
    computed: {
      watchListName: function () {
        return this.watchList.name ? this.watchList.name : 'New Watch List'
      },
      allItems: function () {
        if (this.watchList.items.length) {
          const selectedMap = {}
          this.watchList.items.forEach(wl => {
            selectedMap[wl.itemlist_id] = wl
          })
          const selectedIds = Object.keys(selectedMap)
          const selectedItemLists = this.itemLists.filter(il => selectedIds.includes(il.id))
          let res = {}
          selectedItemLists.forEach(il => {
            const multiplier = selectedMap[il.id].qty
            il.items.forEach(i => {
              const item = res[i.id]
              if (!item) {
                res[i.id] = {id: i.id, name: i.name, qty: i.quantity * multiplier}
              } else {
                item.qty += i.quantity * multiplier
              }
            })
          })
          return Object.values(res)
        } else {
          return null
        }
      }
    },
    components: {
      'va-box': VABox,
      'va-input-group': VAInputGroup,
      'va-alert': VAAlert
    }
  }
</script>
