/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
   * {
   *   "application/json": {
   *     "solar_system_id": 30002505,
   *     "structure_id": 1000000016989
   *   }
   * }
   */
  get_characters_character_id_location (character_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/location/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Checks if the character is currently online
   * {
   *   "application/json": {
   *     "last_login": "2017-01-02T03:04:05Z",
   *     "last_logout": "2017-01-02T04:05:06Z",
   *     "logins": 9001,
   *     "online": true
   *   }
   * }
   */
  get_characters_character_id_online (character_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/online/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Get the current ship type, name and id
   * {
   *   "application/json": {
   *     "ship_item_id": 1000000016991,
   *     "ship_name": "SPACESHIPS!!!",
   *     "ship_type_id": 1233
   *   }
   * }
   */
  get_characters_character_id_ship (character_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/ship/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
