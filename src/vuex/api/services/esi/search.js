/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Search for entities that match a given sub-string.
   * {
   *   "application/json": {
   *     "solar_system": [
   *       30002510
   *     ],
   *     "station": [
   *       60004588,
   *       60004594,
   *       60005725,
   *       60009106,
   *       60012721,
   *       60012724,
   *       60012727
   *     ]
   *   }
   * }
   */
  get_characters_character_id_search (categories, character_id, search, strict, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/search/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Search for entities that match a given sub-string.
   * {
   *   "application/json": {
   *     "solar_system": [
   *       30002510
   *     ],
   *     "station": [
   *       60004588,
   *       60004594,
   *       60005725,
   *       60009106,
   *       60012721,
   *       60012724,
   *       60012727
   *     ]
   *   }
   * }
   */
  get_search (categories, search, strict, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/search/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
