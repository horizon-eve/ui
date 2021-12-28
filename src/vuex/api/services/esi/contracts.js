/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
   * {
   *   "application/json": [
   *     {
   *       "acceptor_id": 0,
   *       "assignee_id": 0,
   *       "availability": "public",
   *       "buyout": 10000000000.01,
   *       "contract_id": 1,
   *       "date_accepted": "2017-06-06T13:12:32Z",
   *       "date_completed": "2017-06-06T13:12:32Z",
   *       "date_expired": "2017-06-13T13:12:32Z",
   *       "date_issued": "2017-06-06T13:12:32Z",
   *       "days_to_complete": 0,
   *       "end_location_id": 60014719,
   *       "for_corporation": true,
   *       "issuer_corporation_id": 456,
   *       "issuer_id": 123,
   *       "price": 1000000.01,
   *       "reward": 0.01,
   *       "start_location_id": 60014719,
   *       "status": "outstanding",
   *       "type": "auction",
   *       "volume": 0.01
   *     }
   *   ]
   * }
   */
  get_characters_character_id_contracts (character_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/contracts/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Lists bids on a particular auction contract
   * {
   *   "application/json": [
   *     {
   *       "amount": 1.23,
   *       "bid_id": 1,
   *       "bidder_id": 123,
   *       "date_bid": "2017-01-01T10:10:10Z"
   *     }
   *   ]
   * }
   */
  get_characters_character_id_contracts_contract_id_bids (character_id, contract_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/contracts/${contract_id}/bids/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Lists items of a particular contract
   * {
   *   "application/json": [
   *     {
   *       "is_included": true,
   *       "is_singleton": false,
   *       "quantity": 1,
   *       "record_id": 123456,
   *       "type_id": 587
   *     }
   *   ]
   * }
   */
  get_characters_character_id_contracts_contract_id_items (character_id, contract_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/contracts/${contract_id}/items/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Lists bids on a public auction contract
   * {
   *   "application/json": [
   *     {
   *       "amount": 1.23,
   *       "bid_id": 1,
   *       "date_bid": "2017-01-01T10:10:10Z"
   *     }
   *   ]
   * }
   */
  get_contracts_public_bids_contract_id (contract_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/contracts/public/bids/${contract_id}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Lists items of a public contract
   * {
   *   "application/json": [
   *     {
   *       "is_included": true,
   *       "item_id": 123456,
   *       "quantity": 1,
   *       "record_id": 123456,
   *       "type_id": 587
   *     }
   *   ]
   * }
   */
  get_contracts_public_items_contract_id (contract_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/contracts/public/items/${contract_id}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Returns a paginated list of all public contracts in the given region
   * {
   *   "application/json": [
   *     {
   *       "buyout": 10000000000.01,
   *       "contract_id": 1,
   *       "date_expired": "2017-06-13T13:12:32Z",
   *       "date_issued": "2017-06-06T13:12:32Z",
   *       "days_to_complete": 0,
   *       "end_location_id": 60014719,
   *       "for_corporation": true,
   *       "issuer_corporation_id": 456,
   *       "issuer_id": 123,
   *       "price": 1000000.01,
   *       "reward": 0.01,
   *       "start_location_id": 60014719,
   *       "type": "auction",
   *       "volume": 0.01
   *     }
   *   ]
   * }
   */
  get_contracts_public_region_id (page, region_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/contracts/public/${region_id}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
   * {
   *   "application/json": [
   *     {
   *       "acceptor_id": 0,
   *       "assignee_id": 0,
   *       "availability": "public",
   *       "buyout": 10000000000.01,
   *       "contract_id": 1,
   *       "date_expired": "2017-06-13T13:12:32Z",
   *       "date_issued": "2017-06-06T13:12:32Z",
   *       "days_to_complete": 0,
   *       "end_location_id": 60014719,
   *       "for_corporation": true,
   *       "issuer_corporation_id": 456,
   *       "issuer_id": 123,
   *       "price": 1000000.01,
   *       "reward": 0.01,
   *       "start_location_id": 60014719,
   *       "status": "outstanding",
   *       "type": "auction",
   *       "volume": 0.01
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_contracts (corporation_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/corporations/${corporation_id}/contracts/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Lists bids on a particular auction contract
   * {
   *   "application/json": [
   *     {
   *       "amount": 1.23,
   *       "bid_id": 1,
   *       "bidder_id": 123,
   *       "date_bid": "2017-01-01T10:10:10Z"
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_contracts_contract_id_bids (contract_id, corporation_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/corporations/${corporation_id}/contracts/${contract_id}/bids/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Lists items of a particular contract
   * {
   *   "application/json": [
   *     {
   *       "is_included": true,
   *       "is_singleton": false,
   *       "quantity": 1,
   *       "record_id": 123456,
   *       "type_id": 587
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_contracts_contract_id_items (contract_id, corporation_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/corporations/${corporation_id}/contracts/${contract_id}/items/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
