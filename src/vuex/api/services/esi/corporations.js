import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/corporations`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call corporations: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/corporations/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call corporations: ` + JSON.stringify(error)))
  }
}
