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
    return axios.get(`${config.API_BASE_URL}/esi/latest/status/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
