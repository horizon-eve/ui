import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/planet_schematics_type_maps`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call planet_schematics_type_maps: ` + JSON.stringify(error)))
  }
}
