import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/dgm_effects`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call dgm_effects: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/dgm_effects/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call dgm_effects: ` + JSON.stringify(error)))
  }
}
