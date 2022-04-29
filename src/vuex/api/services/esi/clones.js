/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * A list of the character's clones
   * {
   *   "application/json": {
   *     "home_location": {
   *       "location_id": 1021348135816,
   *       "location_type": "structure"
   *     },
   *     "jump_clones": [
   *       {
   *         "implants": [
   *           22118
   *         ],
   *         "jump_clone_id": 12345,
   *         "location_id": 60003463,
   *         "location_type": "station"
   *       }
   *     ]
   *   }
   * }
   */
  get_characters_character_id_clones (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_clones?character_id=${character_id}`, {
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
   * Return implants on the active clone of a character
   * {
   *   "application/json": [
   *     1,
   *     2,
   *     3
   *   ]
   * }
   */
  get_characters_character_id_implants (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_implants?character_id=${character_id}`, {
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
