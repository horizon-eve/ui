import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/crp_npccorporation_research_fields`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call crp_npccorporation_research_fields: ` + JSON.stringify(error)))
  }
}
