import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/map_location_wormhole_classes`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call map_location_wormhole_classes: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/map_location_wormhole_classes/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call map_location_wormhole_classes: ` + JSON.stringify(error)))
  }
}
