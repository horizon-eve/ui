import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/esi/opp_tasks`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call opp_tasks: ` + JSON.stringify(error)))
  }
}
