import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/map_celestial_graphics`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call map_celestial_graphics: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/map_celestial_graphics/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call map_celestial_graphics: ` + JSON.stringify(error)))
  }
}
