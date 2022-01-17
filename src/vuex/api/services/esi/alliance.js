/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'

export default {
  /**
   * List all active player alliances
   * {
   *   "application/json": [
   *     99000001,
   *     99000002
   *   ]
   * }
   */
  get_alliances (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_alliances`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Public information about an alliance
   * {
   *   "application/json": {
   *     "creator_corporation_id": 45678,
   *     "creator_id": 12345,
   *     "date_founded": "2016-06-26T21:00:00Z",
   *     "executor_corporation_id": 98356193,
   *     "name": "C C P Alliance",
   *     "ticker": "<C C P>"
   *   }
   * }
   */
  get_alliances_alliance_id (alliance_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_alliances_alliance_id?alliance_id=${alliance_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * List all current member corporations of an alliance
   * {
   *   "application/json": [
   *     98000001
   *   ]
   * }
   */
  get_alliances_alliance_id_corporations (alliance_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_alliances_alliance_id_corporations?alliance_id=${alliance_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Get the icon urls for a alliance
   * {
   *   "application/json": {
   *     "px128x128": "https://images.evetech.net/Alliance/503818424_128.png",
   *     "px64x64": "https://images.evetech.net/Alliance/503818424_64.png"
   *   }
   * }
   */
  get_alliances_alliance_id_icons (alliance_id, done) {
    return axios.get(`${config.ESI_BASE_URL}/get_alliances_alliance_id_icons?alliance_id=${alliance_id}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
