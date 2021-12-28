/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'

export default {
  /**
   * Return a list of current incursions
   * {
   *   "application/json": [
   *     {
   *       "constellation_id": 20000607,
   *       "faction_id": 500019,
   *       "has_boss": true,
   *       "infested_solar_systems": [
   *         30004148,
   *         30004149,
   *         30004150,
   *         30004151,
   *         30004152,
   *         30004153,
   *         30004154
   *       ],
   *       "influence": 0.9,
   *       "staging_solar_system_id": 30004154,
   *       "state": "mobilizing",
   *       "type": "Incursion"
   *     }
   *   ]
   * }
   */
  get_incursions (done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/incursions/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
