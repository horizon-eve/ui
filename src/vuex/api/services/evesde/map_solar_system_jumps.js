import axios from 'axios'
import config from 'config'

export default {

  read (params = {}, done) {
    return axios.get(`${config.API_BASE_URL}/evesde/map_solar_system_jumps`, {
      params: params })
        .then((response) => done(response.data))
        .catch((error) => console.error(`Could not call map_solar_system_jumps: ` + JSON.stringify(error)))
  }
}
