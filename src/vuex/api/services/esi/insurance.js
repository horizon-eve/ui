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
    return axios.get(`${config.ESI_BASE_URL}/get_insurance_prices`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
