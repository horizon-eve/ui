/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'

export default {
  /**
   * Return a list of wars
   * {
   *   "application/json": [
   *     3,
   *     2,
   *     1
   *   ]
   * }
   */
  get_wars (max_war_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/wars/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return details about a war
   * {
   *   "application/json": {
   *     "aggressor": {
   *       "corporation_id": 986665792,
   *       "isk_destroyed": 0,
   *       "ships_killed": 0
   *     },
   *     "declared": "2004-05-22T05:20:00Z",
   *     "defender": {
   *       "corporation_id": 1001562011,
   *       "isk_destroyed": 0,
   *       "ships_killed": 0
   *     },
   *     "id": 1941,
   *     "mutual": false,
   *     "open_for_allies": false
   *   }
   * }
   */
  get_wars_war_id (war_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/wars/${war_id}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  },

  /**
   * Return a list of kills related to a war
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
  get_wars_war_id_killmails (page, war_id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/wars/${war_id}/killmails/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
