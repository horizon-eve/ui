/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'

export default {
  /**
   * Shows sovereignty data for campaigns.
   * {
   *   "application/json": [
   *     {
   *       "attackers_score": 0.4,
   *       "campaign_id": 32833,
   *       "constellation_id": 20000125,
   *       "defender_id": 1695357456,
   *       "defender_score": 0.6,
   *       "event_type": "station_defense",
   *       "solar_system_id": 30000856,
   *       "start_time": "2016-10-29T14:34:40Z",
   *       "structure_id": 61001096
   *     }
   *   ]
   * }
   */
  get_sovereignty_campaigns (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_sovereignty_campaigns`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Shows sovereignty information for solar systems
   * {
   *   "application/json": [
   *     {
   *       "faction_id": 500001,
   *       "system_id": 30045334
   *     }
   *   ]
   * }
   */
  get_sovereignty_map (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_sovereignty_map`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  },

  /**
   * Shows sovereignty data for structures.
   * {
   *   "application/json": [
   *     {
   *       "alliance_id": 498125261,
   *       "solar_system_id": 30000570,
   *       "structure_id": 1018253388776,
   *       "structure_type_id": 32226,
   *       "vulnerability_occupancy_level": 2,
   *       "vulnerable_end_time": "2016-10-29T05:30:00Z",
   *       "vulnerable_start_time": "2016-10-28T20:30:00Z"
   *     }
   *   ]
   * }
   */
  get_sovereignty_structures (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_sovereignty_structures`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
