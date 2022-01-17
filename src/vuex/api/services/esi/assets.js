/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Return a list of the characters assets
   * {
   *   "application/json": [
   *     {
   *       "is_blueprint_copy": true,
   *       "is_singleton": true,
   *       "item_id": 1000000016835,
   *       "location_flag": "Hangar",
   *       "location_id": 60002959,
   *       "location_type": "station",
   *       "quantity": 1,
   *       "type_id": 3516
   *     }
   *   ]
   * }
   */
  get_characters_character_id_assets (character_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_assets?character_id=${character_id}&page=${page}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
   * {
   *   "application/json": [
   *     {
   *       "item_id": 12345,
   *       "position": {
   *         "x": 1.2,
   *         "y": 2.3,
   *         "z": -3.4
   *       }
   *     }
   *   ]
   * }
   */
  post_characters_character_id_assets_locations (character_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_characters_character_id_assets_locations?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.
   * {
   *   "application/json": [
   *     {
   *       "item_id": 12345,
   *       "name": "Awesome Name"
   *     }
   *   ]
   * }
   */
  post_characters_character_id_assets_names (character_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_characters_character_id_assets_names?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return a list of the corporation assets
   * {
   *   "application/json": [
   *     {
   *       "is_blueprint_copy": true,
   *       "is_singleton": true,
   *       "item_id": 1000000016835,
   *       "location_flag": "Hangar",
   *       "location_id": 60002959,
   *       "location_type": "station",
   *       "quantity": 1,
   *       "type_id": 3516
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_assets (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_assets?corporation_id=${corporation_id}&page=${page}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
   * {
   *   "application/json": [
   *     {
   *       "item_id": 12345,
   *       "position": {
   *         "x": 1.2,
   *         "y": 2.3,
   *         "z": -3.4
   *       }
   *     }
   *   ]
   * }
   */
  post_corporations_corporation_id_assets_locations (corporation_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_corporations_corporation_id_assets_locations?corporation_id=${corporation_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships
   * {
   *   "application/json": [
   *     {
   *       "item_id": 12345,
   *       "name": "Awesome Name"
   *     }
   *   ]
   * }
   */
  post_corporations_corporation_id_assets_names (corporation_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_corporations_corporation_id_assets_names?corporation_id=${corporation_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
