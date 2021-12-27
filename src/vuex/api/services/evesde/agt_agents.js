import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/agt_agents`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call agt_agents: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/agt_agents/${id}`, {
    })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call agt_agents: ` + JSON.stringify(error)))
  }
}
