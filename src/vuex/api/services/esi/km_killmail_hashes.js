import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/km_killmail_hashes`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call km_killmail_hashes: ` + JSON.stringify(error)))
  }
}
