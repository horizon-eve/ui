import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/ind_facilities`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call ind_facilities: ` + JSON.stringify(error)))
  }
}
