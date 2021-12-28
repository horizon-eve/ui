/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'
import store from 'src/vuex/store'

export default {
  /**
   * Return a list of a character's kills and losses going back 90 days
   * {
   *   "application/json": [
   *     {
   *       "killmail_hash": "8eef5e8fb6b88fe3407c489df33822b2e3b57a5e",
   *       "killmail_id": 2
   *     },
   *     {
   *       "killmail_hash": "b41ccb498ece33d64019f64c0db392aa3aa701fb",
   *       "killmail_id": 1
   *     }
   *   ]
   * }
   */
  get_characters_character_id_killmails_recent (character_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/characters/${character_id}/killmails/recent/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Get a list of a corporation's kills and losses going back 90 days
   * {
   *   "application/json": [
   *     {
   *       "killmail_hash": "8eef5e8fb6b88fe3407c489df33822b2e3b57a5e",
   *       "killmail_id": 2
   *     },
   *     {
   *       "killmail_hash": "b41ccb498ece33d64019f64c0db392aa3aa701fb",
   *       "killmail_id": 1
   *     }
   *   ]
   * }
   */
  get_corporations_corporation_id_killmails_recent (corporation_id, page, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/corporations/${corporation_id}/killmails/recent/`, {
      headers: {
        'content-type': 'application/json',
        'x-hr-authtoken': store.state.auth.auth_token
      }
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return a single killmail from its ID and hash
   * {
   *   "application/json": {
   *     "attackers": [
   *       {
   *         "character_id": 95810944,
   *         "corporation_id": 1000179,
   *         "damage_done": 5745,
   *         "faction_id": 500003,
   *         "final_blow": true,
   *         "security_status": -0.3,
   *         "ship_type_id": 17841,
   *         "weapon_type_id": 3074
   *       }
   *     ],
   *     "killmail_id": 56733821,
   *     "killmail_time": "2016-10-22T17:13:36Z",
   *     "solar_system_id": 30002976,
   *     "victim": {
   *       "alliance_id": 621338554,
   *       "character_id": 92796241,
   *       "corporation_id": 841363671,
   *       "damage_taken": 5745,
   *       "items": [
   *         {
   *           "flag": 20,
   *           "item_type_id": 5973,
   *           "quantity_dropped": 1,
   *           "singleton": 0
   *         }
   *       ],
   *       "position": {
   *         "x": 452186600569.4748,
   *         "y": 146704961490.90222,
   *         "z": 109514596532.54477
   *       },
   *       "ship_type_id": 17812
   *     }
   *   }
   * }
   */
  get_killmails_killmail_id_killmail_hash (killmail_hash, killmail_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/killmails/${killmail_id}/${killmail_hash}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
