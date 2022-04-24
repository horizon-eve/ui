import axios from 'axios'
import config from 'config'

export default {
  create (data, done) {
    return axios.post(`${config.API_BASE_URL}/evesde/skin_materials`, data, {
    })
      .then((response) => done(response.data.id))
      .catch((error) => console.error(`Could not call skin_materials: ` + JSON.stringify(error)))
  },

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/skin_materials`, {
      params: params })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call skin_materials: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/skin_materials/${id}`, {
    })
      .then((response) => done(response.data))
      .catch((error) => console.error(`Could not call skin_materials: ` + JSON.stringify(error)))
  },

  update (data, done) {
    return axios.patch(`${config.API_BASE_URL}/evesde/skin_materials/${data.id}`, data, {
    })
      .then((response) => done(response))
      .catch((error) => console.error(`Could not call skin_materials: ` + JSON.stringify(error)))
  },

  upsert (data, done) {
    if (data.id) {
      this.update(data, done)
    } else {
      this.create(data, done)
    }
  }
}
