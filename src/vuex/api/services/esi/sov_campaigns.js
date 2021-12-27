import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/sov_campaigns`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call sov_campaigns: ` + JSON.stringify(error)))
  }
}
