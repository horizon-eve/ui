import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/war_combat_zones`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call war_combat_zones: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/war_combat_zones/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call war_combat_zones: ` + JSON.stringify(error)))
  }
}
