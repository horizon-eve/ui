/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Returns a list of all planetary colonies owned by a character.
   * {
   *   "application/json": [
   *     {
   *       "last_update": "2016-11-28T16:42:51Z",
   *       "num_pins": 1,
   *       "owner_id": 90000001,
   *       "planet_id": 40023691,
   *       "planet_type": "plasma",
   *       "solar_system_id": 30000379,
   *       "upgrade_level": 0
   *     },
   *     {
   *       "last_update": "2016-11-28T16:41:54Z",
   *       "num_pins": 1,
   *       "owner_id": 90000001,
   *       "planet_id": 40023697,
   *       "planet_type": "barren",
   *       "solar_system_id": 30000379,
   *       "upgrade_level": 0
   *     }
   *   ]
   * }
   */
  get_characters_character_id_planets (character_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_planets?character_id=${character_id}`, {
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
   * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.
   * {
   *   "application/json": {
   *     "links": [
   *       {
   *         "destination_pin_id": 1000000017022,
   *         "link_level": 0,
   *         "source_pin_id": 1000000017021
   *       }
   *     ],
   *     "pins": [
   *       {
   *         "latitude": 1.55087844973,
   *         "longitude": 0.717145933308,
   *         "pin_id": 1000000017021,
   *         "type_id": 2254
   *       },
   *       {
   *         "latitude": 1.53360639935,
   *         "longitude": 0.709775584394,
   *         "pin_id": 1000000017022,
   *         "type_id": 2256
   *       }
   *     ],
   *     "routes": [
   *       {
   *         "content_type_id": 2393,
   *         "destination_pin_id": 1000000017030,
   *         "quantity": 20,
   *         "route_id": 4,
   *         "source_pin_id": 1000000017029
   *       }
   *     ]
   *   }
   * }
   */
  get_characters_character_id_planets_planet_id (character_id, planet_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_characters_character_id_planets_planet_id?character_id=${character_id}&planet_id=${planet_id}`, {
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
   * List customs offices owned by a corporation
   * {
   *   "application/json": [
   *     {
   *       "alliance_tax_rate": 0.1,
   *       "allow_access_with_standings": true,
   *       "allow_alliance_access": false,
   *       "corporation_tax_rate": 0.02,
   *       "excellent_standing_tax_rate": 0.05,
   *       "good_standing_tax_rate": 0.2,
   *       "neutral_standing_tax_rate": 0.5,
   *       "office_id": 1000000014530,
   *       "reinforce_exit_end": 1,
   *       "reinforce_exit_start": 23,
   *       "standing_level": "neutral",
   *       "system_id": 30003657
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_customs_offices (corporation_id, page, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_corporations_corporation_id_customs_offices?corporation_id=${corporation_id}&page=${page}`, {
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
   * Get information on a planetary factory schematic
   * {
   *   "application/json": {
   *     "cycle_time": 1800,
   *     "schematic_name": "Bacteria"
   *   }
   * }
   */
  get_universe_schematics_schematic_id (schematic_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_universe_schematics_schematic_id?schematic_id=${schematic_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
