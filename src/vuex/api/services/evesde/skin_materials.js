import axios from 'axios'
import config from 'config'

export default {

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
  }
}
