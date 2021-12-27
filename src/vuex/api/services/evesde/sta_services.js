import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/sta_services`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call sta_services: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/sta_services/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call sta_services: ` + JSON.stringify(error)))
  }
}
