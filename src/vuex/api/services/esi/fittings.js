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
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_fittings?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Save a new fitting for a character
   * .
   */
  post_characters_character_id_fittings (character_id, done) {
    return axios.post(`${config.ESI_BASE_URL}/post_characters_character_id_fittings?character_id=${character_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Delete a fitting from a character
   * .
   */
  delete_characters_character_id_fittings_fitting_id (character_id, fitting_id, done) {
    return axios.delete(`${config.ESI_BASE_URL}/delete_characters_character_id_fittings_fitting_id?character_id=${character_id}&fitting_id=${fitting_id}`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token,
        'x-hr-character': store.state.user.character_id
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
