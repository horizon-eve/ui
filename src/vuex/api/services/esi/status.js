/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'

export default {
  /**
   * EVE Server status
   * {
   *   "application/json": {
   *     "players": 12345,
   *     "server_version": "1132976",
   *     "start_time": "2017-01-02T12:34:56Z"
   *   }
   * }
   */
  get_status (done) {
    return axios.get(`${config.ESI_BASE_URL}/get_status`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
