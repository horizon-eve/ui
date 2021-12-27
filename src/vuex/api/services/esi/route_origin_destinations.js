import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/route_origin_destinations`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call route_origin_destinations: ` + JSON.stringify(error)))
  }
}
