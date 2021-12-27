import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/wars`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call wars: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/wars/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call wars: ` + JSON.stringify(error)))
  }
}
