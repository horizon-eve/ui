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
    return axios.get(`${config.ESI_BASE_URL}/get_route_origin_destination?avoid=${avoid}&connections=${connections}&destination=${destination}&flag=${flag}&origin=${origin}`)
      .then((response) => done(response.data))
      .catch((error) => console.error(error.message, error.stack))
  }
}
