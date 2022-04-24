import axios from 'axios'
import config from 'config'

export default {
  create (data, done) {
    return axios.post(`${config.API_BASE_URL}/evesde/map_location_wormhole_classes`, data, {
    })
      .then((response) => done(response.data.id))
      .catch((error) => console.error(`Could not call map_location_wormhole_classes: ` + JSON.stringify(error)))
  },

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
  },

  update (data, done) {
    return axios.patch(`${config.API_BASE_URL}/evesde/map_location_wormhole_classes/${data.id}`, data, {
    })
      .then((response) => done(response))
      .catch((error) => console.error(`Could not call map_location_wormhole_classes: ` + JSON.stringify(error)))
  },

  upsert (data, done) {
    if (data.id) {
      this.update(data, done)
    } else {
      this.create(data, done)
    }
  }
}
