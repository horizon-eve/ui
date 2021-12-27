import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/inv_meta_groups`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call inv_meta_groups: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/inv_meta_groups/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call inv_meta_groups: ` + JSON.stringify(error)))
  }
}
