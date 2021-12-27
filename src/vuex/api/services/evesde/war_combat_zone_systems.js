import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/war_combat_zone_systems`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call war_combat_zone_systems: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/war_combat_zone_systems/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call war_combat_zone_systems: ` + JSON.stringify(error)))
  }
}
