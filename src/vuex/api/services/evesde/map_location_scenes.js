import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/map_location_scenes`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call map_location_scenes: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/map_location_scenes/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call map_location_scenes: ` + JSON.stringify(error)))
  }
}
