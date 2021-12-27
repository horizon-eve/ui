import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/sta_operations`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call sta_operations: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/sta_operations/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call sta_operations: ` + JSON.stringify(error)))
  }
}
