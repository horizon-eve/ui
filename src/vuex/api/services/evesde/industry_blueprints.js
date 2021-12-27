import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/industry_blueprints`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call industry_blueprints: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/industry_blueprints/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call industry_blueprints: ` + JSON.stringify(error)))
  }
}
