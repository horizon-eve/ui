import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/map_constellations`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call map_constellations: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/map_constellations/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call map_constellations: ` + JSON.stringify(error)))
  }
}
