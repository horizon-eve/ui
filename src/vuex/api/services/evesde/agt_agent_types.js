import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/agt_agent_types`, {
      params: params })
      .then((response) => {
        try {
          done(response.data)
        } catch (err) {
          console.error(err)
        }
      })
      .catch((error) => console.error(`Could not call agt_agent_types: ` + JSON.stringify(error)))
  },

  get (id, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/agt_agent_types/${id}`, {
    })
      .then((response) => {
        try {
          done(response.data)
        } catch (err) {
          console.error(err)
        }
      })
      .catch((error) => console.error(`Could not call agt_agent_types: ` + JSON.stringify(error)))
  }
}
