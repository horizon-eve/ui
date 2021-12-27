import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/characters`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call characters: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/esi/characters/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call characters: ` + JSON.stringify(error)))
  }
}
