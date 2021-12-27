import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/inv_type_reactions`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call inv_type_reactions: ` + JSON.stringify(error)))
  }
}
