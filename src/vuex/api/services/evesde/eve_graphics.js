import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/eve_graphics`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call eve_graphics: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/eve_graphics/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call eve_graphics: ` + JSON.stringify(error)))
  }
}
