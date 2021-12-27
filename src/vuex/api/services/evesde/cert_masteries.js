import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/cert_masteries`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call cert_masteries: ` + JSON.stringify(error)))
  }
}
