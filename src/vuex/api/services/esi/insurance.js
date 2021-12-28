/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'

export default {
  /**
   * Return available insurance levels for all ship types
   * {
   *   "application/json": [
   *     {
   *       "levels": [
   *         {
   *           "cost": 10.01,
   *           "name": "Basic",
   *           "payout": 20.01
   *         }
   *       ],
   *       "type_id": 1
   *     }
   *   ]
   * }
   */
  get_insurance_prices (done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/insurance/prices/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
