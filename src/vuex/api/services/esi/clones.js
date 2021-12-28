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
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/clones/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
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
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/implants/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
