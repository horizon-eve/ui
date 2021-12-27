import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/fw_systems`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call fw_systems: ` + JSON.stringify(error)))
  }
}
