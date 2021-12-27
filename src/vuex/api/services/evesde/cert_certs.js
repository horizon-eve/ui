import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/cert_certs`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call cert_certs: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/cert_certs/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call cert_certs: ` + JSON.stringify(error)))
  }
}
