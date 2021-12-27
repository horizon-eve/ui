import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/crp_npcdivisions`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call crp_npcdivisions: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/crp_npcdivisions/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call crp_npcdivisions: ` + JSON.stringify(error)))
  }
}
