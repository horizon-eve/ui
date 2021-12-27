import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/inv_contraband_types`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call inv_contraband_types: ` + JSON.stringify(error)))
  }
}
