<template>
<div>
  <div class="box box-default color-palette-box">
    <div class="box-header with-border">
      <h3 class="box-title"><i class="fa fa-cubes"></i> Analyze Market availability</h3>
    </div>
    <div class="box-body">
      <div class="col-md-4">
        <row>
          <div class="form-group">
            <label>Search Structure</label>
            <div class="input-group">
              <input type="text" name="message" v-model="searchStationText" class="form-control">
              <span class="input-group-btn">
                    <button type="button" class="btn btn-primary" v-on:click="searchStation" v-bind:disabled="isStuctureSearchInProgress">
                      <i class="icon fa fa-search"> </i>
                    </button>
                  </span>
            </div>
            <ul class="list-group list-group-unbordered">
              <li class="list-group-item" v-for="(hub,index) in structures" :data="hub">
                <a href="#" v-on:click="selectedHub = hub">{{ hub.name }}</a>
              </li>
            </ul>
          </div>

          <div class="form-group">
            <label>Select Watch list</label>
            <select class="form-control select2" v-model="selectedWatchList" style="width: 100%;">
              <option v-for="(item,index) in watchLists" :data="item" v-bind:value="{id: item.id, name: item.name, items: item.items, price_filter: item.price_filter}" :key="index">
                {{ item.id }} : {{ item.name }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <button type="button" class="btn btn-primary btn-lg btn-block" v-on:click="analyze" v-bind:disabled="!isAnalyzeEnabled">
              <i class="icon fa fa-bar-chart-o"></i> Analyze Market Data
            </button>
          </div>
        </row>
      </div>
      <div class="col-md-4" v-if="selectedHub">
        <img class="profile-user-img img-responsive img-circle" v-bind:src="'https://images.evetech.net/types/' + selectedHub.type_id + '/icon?size=128'" alt="User profile picture">
        <h3 class="profile-username text-center">{{ selectedHub.name }}</h3>
        <p class="text-muted text-center" v-if="selectedOwner">{{ selectedOwner.name }}</p>
      </div>
    </div>
    <div class="box-footer" v-if="report">
      <h5>Summary of items availability on the trade hub</h5>
      <div v-for="item in Object.values(report)" class="col-lg-4 col-xs-6">
        <div class="info-box">
          <span class="info-box-icon" >
            <img :src="`https://images.evetech.net/types/${item.id}/icon?size=64`" v-bind:alt="item.name"/>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">{{item.name}}</span>
            <span class="badge bg-gray">Requested: {{item.qty.toLocaleString()}}</span>
            <span :class="`badge ${item.avail > item.qty ? 'bg-green' : item.avail / item.qty > 0.3 ? 'bg-yellow' : 'bg-red'}`"> Available: {{item.avail.toLocaleString()}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import {services} from '../vuex/api'
import {mapGetters} from 'vuex'
import VAInputGroup from './VAInputGroup'
export default {
  name: 'Market_Availability',
  data () {
    return {
      watchLists: [],
      searchStationText: null,
      selectedWatchList: null,
      structures: [],
      selectedHub: null,
      selectedOwner: null,
      searchQueue: [],
      report: null,
      isAnalysisInProgress: false
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ]),
    isStuctureSearchInProgress: function () {
      return this.searchQueue.length !== 0
    },
    isAnalyzeEnabled: function () {
      return this.selectedWatchList && this.selectedHub && !this.isAnalysisInProgress
    }
  },
  methods: {
    analyze: function () {
      this.report = null
      this.isAnalysisInProgress = true
      const watchData = {}
      // Prepare watchlist data
      const itemListIds = this.selectedWatchList.items.map(wi => wi.itemlist_id)
      // pull item lists
      services.itemlists.read({'id=in': itemListIds.join(',')}, data => {
        try {
          const itemLists = Array.isArray(data) ? data : [data]
          this.selectedWatchList.items.forEach(wi => {
            const itemlist = itemLists.find(il => wi.itemlist_id === il.id)
            // I will assume that a single item list has no duplicates of items
            itemlist.items.forEach(it => {
              let item = watchData[it.id]
              if (!item) {
                item = {id: it.id, name: it.name, group: it.group, qty: it.quantity * wi.qty, avail: 0}
                watchData[it.id] = item
              } else {
                const qty = it.quantity * wi.qty
                if (qty > item.qty) {
                  item.qty = qty
                }
              }
            })
          })
        } catch (e) {
          console.error(e)
        }
        console.log('itemlists done')
      })
      // fetch baseline prices
      services.esi.market.get_markets_prices(data => {
        Object.values(watchData).forEach(item => {
          const price = data.find(d => d.type_id === item.id)
          item.base_price = Math.max(price.adjusted_price, price.average_price)
        })
        console.log('get_markets_prices done')
      })
      const chaining = function (page, module) {
        // fetch structure orders
        services.esi.market.get_markets_structures_structure_id(page, module.selectedHub.structure_id, (data) => {
          const ordersPage = data
          ordersPage.forEach(order => {
            // filter buy orders
            if (!order.is_buy_order && order.volume_remain > 0) {
              // filter overpriced
              const item = watchData[order.type_id]
              if (item && item.base_price * module.selectedWatchList.price_filter >= order.price) {
                item.avail += order.volume_remain
              }
            }
          })
          // I am too tired to make it right. Maybe not today. Yes I know ugh.
          if (ordersPage.length === 1000) {
            chaining(page + 1, module)
          } else {
            module.report = watchData
            module.isAnalysisInProgress = false
            console.log('chaining done')
          }
        })
      }
      chaining(1, this)
    },
    fetchWatchLists: function () {
      services.market_watch_lists.read({}, (data) => {
        this.watchLists = data
      })
    },
    searchStation: function () {
      this.structures = []
      this.searchQueue.push('get_characters_character_id_search')
      services.esi.search.get_characters_character_id_search(['station', 'structure'], this.user.character_id, this.searchStationText, false, (data) => {
        if (data.structure && data.structure.length) {
          data.structure.forEach(s => {
            this.searchQueue.push(s)
            services.esi.universe.get_universe_structures_structure_id(s, (data) => {
              this.structures.push(data)
              this.searchQueue.pop()
            })
          })
        }
        if (data.station && data.station.length) {
          data.station.forEach(s => {
            this.searchQueue.push(s)
            services.esi.universe.get_universe_stations_station_id(s, (data) => {
              this.structures.push(data)
              this.searchQueue.pop()
            })
          })
        }
        this.searchQueue.pop()
      })
    }
  },
  mounted () {
    this.fetchWatchLists()
  },
  watch: {
    selectedHub: function (val) {
      if (val && val.owner_id) {
        services.esi.corporation.get_corporations_corporation_id(val.owner_id, (data) => {
          this.selectedOwner = data
        })
      }
    }
  },
  components: {
    'va-input-group': VAInputGroup
  }
}
</script>
