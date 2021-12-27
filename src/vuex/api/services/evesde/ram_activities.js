import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/ram_activities`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call ram_activities: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/ram_activities/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call ram_activities: ` + JSON.stringify(error)))
  }
}
