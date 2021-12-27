import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/ram_installation_type_contents`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call ram_installation_type_contents: ` + JSON.stringify(error)))
  }
}
