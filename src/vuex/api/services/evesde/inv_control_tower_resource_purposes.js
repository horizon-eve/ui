import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/inv_control_tower_resource_purposes`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call inv_control_tower_resource_purposes: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/inv_control_tower_resource_purposes/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call inv_control_tower_resource_purposes: ` + JSON.stringify(error)))
  }
}
