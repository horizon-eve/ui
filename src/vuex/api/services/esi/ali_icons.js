import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/ali_icons`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call ali_icons: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/ali_icons/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call ali_icons: ` + JSON.stringify(error)))
  }
}
