/* eslint-disable camelcase */
import axios from 'axios'
import config from 'config'

export default {
  /**
   * Get the systems between origin and destination
   * {
   *   "application/json": [
   *     30002771,
   *     30002770,
   *     30002769,
   *     30002772
   *   ]
   * }
   */
  get_route_origin_destination (avoid, connections, destination, flag, origin, done) {
    return axios.get(`${config.API_BASE_URL}/esi/latest/route/${origin}/${destination}/`)
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call get_character_public_information: ` + JSON.stringify(error)))
  }
}
