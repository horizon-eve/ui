import axios from 'axios'
import config from 'config'

export default {
  create (data, done) {
    return axios.post(`${config.API_BASE_URL}/evesde/inv_contraband_types`, data, {
    })
      .then((response) => done(response.data.id))
      .catch((error) => console.error(`Could not call inv_contraband_types: ` + JSON.stringify(error)))
  },

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/inv_contraband_types`, {
      params: params })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call inv_contraband_types: ` + JSON.stringify(error)))
  },

  update (data, done) {
    return axios.patch(`${config.API_BASE_URL}/evesde/inv_contraband_types/${data.id}`, data, {
    })
      .then((response) => done(response))
      .catch((error) => console.error(`Could not call inv_contraband_types: ` + JSON.stringify(error)))
  },

  upsert (data, done) {
    if (data.id) {
      this.update(data, done)
    } else {
      this.create(data, done)
    }
  }
}
