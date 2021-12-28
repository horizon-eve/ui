/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * List open market orders placed by a character
   * {
   *   "application/json": [
   *     {
   *       "duration": 30,
   *       "escrow": 45.6,
   *       "is_buy_order": true,
   *       "is_corporation": false,
   *       "issued": "2016-09-03T05:12:25Z",
   *       "location_id": 456,
   *       "min_volume": 1,
   *       "order_id": 123,
   *       "price": 33.3,
   *       "range": "station",
   *       "region_id": 123,
   *       "type_id": 456,
   *       "volume_remain": 4422,
   *       "volume_total": 123456
   *     }
   *   ]
   * }
   */
  get_characters_character_id_orders (character_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/orders/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * List cancelled and expired market orders placed by a character up to 90 days in the past.
   * {
   *   "application/json": [
   *     {
   *       "duration": 30,
   *       "escrow": 45.6,
   *       "is_buy_order": true,
   *       "is_corporation": false,
   *       "issued": "2016-09-03T05:12:25Z",
   *       "location_id": 456,
   *       "min_volume": 1,
   *       "order_id": 123,
   *       "price": 33.3,
   *       "range": "station",
   *       "region_id": 123,
   *       "state": "expired",
   *       "type_id": 456,
   *       "volume_remain": 4422,
   *       "volume_total": 123456
   *     }
   *   ]
   * }
   */
  get_characters_character_id_orders_history (character_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/orders/history/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * List open market orders placed on behalf of a corporation
   * {
   *   "application/json": [
   *     {
   *       "duration": 30,
   *       "escrow": 45.6,
   *       "is_buy_order": true,
   *       "issued": "2016-09-03T05:12:25Z",
   *       "issued_by": 2112625428,
   *       "location_id": 456,
   *       "min_volume": 1,
   *       "order_id": 123,
   *       "price": 33.3,
   *       "range": "station",
   *       "region_id": 123,
   *       "type_id": 456,
   *       "volume_remain": 4422,
   *       "volume_total": 123456,
   *       "wallet_division": 1
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_orders (corporation_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/corporations/${corporation_id}/orders/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.
   * {
   *   "application/json": [
   *     {
   *       "duration": 30,
   *       "escrow": 45.6,
   *       "is_buy_order": true,
   *       "issued": "2016-09-03T05:12:25Z",
   *       "issued_by": 2112625428,
   *       "location_id": 456,
   *       "min_volume": 1,
   *       "order_id": 123,
   *       "price": 33.3,
   *       "range": "station",
   *       "region_id": 123,
   *       "state": "expired",
   *       "type_id": 456,
   *       "volume_remain": 4422,
   *       "volume_total": 123456,
   *       "wallet_division": 1
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_orders_history (corporation_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/corporations/${corporation_id}/orders/history/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Get a list of item groups
   * {
   *   "application/json": [
   *     1,
   *     2,
   *     3
   *   ]
   * }
   */
  get_markets_groups (done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/markets/groups/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Get information on an item group
   * {
   *   "application/json": {
   *     "description": "Small, fast vessels suited to a variety of purposes.",
   *     "market_group_id": 5,
   *     "name": "Standard Frigates",
   *     "parent_group_id": 1361,
   *     "types": [
   *       582,
   *       583
   *     ]
   *   }
   * }
   */
  get_markets_groups_market_group_id (market_group_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/markets/groups/${market_group_id}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return a list of prices
   * {
   *   "application/json": [
   *     {
   *       "adjusted_price": 306988.09,
   *       "average_price": 306292.67,
   *       "type_id": 32772
   *     }
   *   ]
   * }
   */
  get_markets_prices (done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/markets/prices/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return all orders in a structure
   * {
   *   "application/json": [
   *     {
   *       "duration": 90,
   *       "is_buy_order": false,
   *       "issued": "2016-09-03T05:12:25Z",
   *       "location_id": 1020988381992,
   *       "min_volume": 1,
   *       "order_id": 4623824223,
   *       "price": 9.9,
   *       "range": "region",
   *       "type_id": 34,
   *       "volume_remain": 1296000,
   *       "volume_total": 2000000
   *     }
   *   ]
   * }
   */
  get_markets_structures_structure_id (page, structure_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/markets/structures/${structure_id}/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return a list of historical market statistics for the specified type in a region
   * {
   *   "application/json": [
   *     {
   *       "average": 5.25,
   *       "date": "2015-05-01",
   *       "highest": 5.27,
   *       "lowest": 5.11,
   *       "order_count": 2267,
   *       "volume": 16276782035
   *     }
   *   ]
   * }
   */
  get_markets_region_id_history (region_id, type_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/markets/${region_id}/history/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return a list of orders in a region
   * {
   *   "application/json": [
   *     {
   *       "duration": 90,
   *       "is_buy_order": false,
   *       "issued": "2016-09-03T05:12:25Z",
   *       "location_id": 60005599,
   *       "min_volume": 1,
   *       "order_id": 4623824223,
   *       "price": 9.9,
   *       "range": "region",
   *       "system_id": 30000053,
   *       "type_id": 34,
   *       "volume_remain": 1296000,
   *       "volume_total": 2000000
   *     }
   *   ]
   * }
   */
  get_markets_region_id_orders (order_type, page, region_id, type_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/markets/${region_id}/orders/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return a list of type IDs that have active orders in the region, for efficient market indexing.
   * {
   *   "application/json": [
   *     587,
   *     593,
   *     597
   *   ]
   * }
   */
  get_markets_region_id_types (page, region_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/markets/${region_id}/types/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
