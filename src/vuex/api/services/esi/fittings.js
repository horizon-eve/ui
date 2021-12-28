/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Return fittings of a character
   * {
   *   "application/json": [
   *     {
   *       "description": "Awesome Vindi fitting",
   *       "fitting_id": 1,
   *       "items": [
   *         {
   *           "flag": "Cargo",
   *           "quantity": 1,
   *           "type_id": 1234
   *         }
   *       ],
   *       "name": "Best Vindicator",
   *       "ship_type_id": 123
   *     }
   *   ]
   * }
   */
  get_characters_character_id_fittings (character_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/fittings/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Save a new fitting for a character
   *
   */
  post_characters_character_id_fittings (character_id, done) {
    return axios.post(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/fittings/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Delete a fitting from a character
   *
   */
  delete_characters_character_id_fittings_fitting_id (character_id, fitting_id, done) {
    return axios.delete(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/fittings/${fitting_id}/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
