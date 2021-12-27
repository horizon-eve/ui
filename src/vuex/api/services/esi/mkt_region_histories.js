import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/mkt_region_histories`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call mkt_region_histories: ` + JSON.stringify(error)))
  }
}
