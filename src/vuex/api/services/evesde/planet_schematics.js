import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/planet_schematics`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call planet_schematics: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/planet_schematics/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call planet_schematics: ` + JSON.stringify(error)))
  }
}
