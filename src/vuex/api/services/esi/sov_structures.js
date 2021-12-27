import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/sov_structures`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call sov_structures: ` + JSON.stringify(error)))
  }
}
