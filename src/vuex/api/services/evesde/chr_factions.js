import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/chr_factions`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call chr_factions: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/chr_factions/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call chr_factions: ` + JSON.stringify(error)))
  }
}
