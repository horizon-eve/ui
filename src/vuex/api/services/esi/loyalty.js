/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Return a list of loyalty points for all corporations the character has worked for
   * {
   *   "application/json": [
   *     {
   *       "corporation_id": 123,
   *       "loyalty_points": 100
   *     }
   *   ]
   * }
   */
  get_characters_character_id_loyalty_points (character_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/loyalty/points/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return a list of offers from a specific corporation's loyalty store
   * {
   *   "application/json": [
   *     {
   *       "ak_cost": 35000,
   *       "isk_cost": 0,
   *       "lp_cost": 100,
   *       "offer_id": 1,
   *       "quantity": 1,
   *       "required_items": [],
   *       "type_id": 123
   *     },
   *     {
   *       "isk_cost": 1000,
   *       "lp_cost": 100,
   *       "offer_id": 2,
   *       "quantity": 10,
   *       "required_items": [
   *         {
   *           "quantity": 10,
   *           "type_id": 1234
   *         }
   *       ],
   *       "type_id": 1235
   *     }
   *   ]
   * }
   */
  get_loyalty_stores_corporation_id_offers (corporation_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/loyalty/stores/${corporation_id}/offers/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
