import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/agt_agents_in_spaces`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call agt_agents_in_spaces: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/agt_agents_in_spaces/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call agt_agents_in_spaces: ` + JSON.stringify(error)))
  }
}
